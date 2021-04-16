<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Exception\RequestException;
use Exception;
use Illuminate\Support\Facades\Log;


class MiPresController extends Controller
{
    // Swagger client: https://wsmipres.sispro.gov.co/WSSUMMIPRESNOPBS/Swagger/ui/index
    // Billing Swagger client: https://wsmipres.sispro.gov.co/WSFACMIPRESNOPBS/Swagger/ui/index
    private $baseUrl = 'https://wsmipres.sispro.gov.co/WSSUMMIPRESNOPBS/api/';
    private $mainToken = '525FE1ED-00E2-4364-9F5D-7612B8B1E21E';
    private $nit = '802024817';
    protected $secondToken = '';
    protected $client;

    public function generateToken(Request $request)
    {
        $client = new Client();
        // if($secondToken == ''){
        //     $secondToken = $client->request('GET', $this->baseUrl.'GenerarToken/'.$this->nit.'/'.$this->mainToken);
        // }
        try {
            $sectok = \App\Models\Configuration::where('code', 'mipresSecondToken')->first();
            $secondToken = $sectok == null ? '' : $sectok->value;
            
        }catch(Exception $e){
            $secondToken = '-1';
        }
        try {
            if($sectok == null){
                $secondToken = $client->request('GET', $this->baseUrl.'GenerarToken/'.$this->nit.'/'.$this->mainToken, ['timeout' => 30]);
                $insertToken = new \App\Models\Configuration;
                $insertToken->code = 'mipresSecondToken';
                $insertToken->display = 'Token Secundario MiPRES';
                $insertToken->value = '1';
                $insertToken->company_id = $request->user()->company_default_id;
                $insertToken->save();
            }
        }catch(Exception $e){
               $secondToken = '-2'; 
        }
        return $secondToken;
    }
    public function getPrescriptions(Request $request, $token)
    {   
        //There are 3 cases, we just cover to fetch one prescription without details given a prescription number.
        //Next step, is to add 2 more cases to fetch all prescription in date range without details, 
        //and last case to fetch prescriptions by patient ID wihtout details.
        $data = json_decode($request->data, true);
        try {
            if(isset($data["prescriptionNumber"])){
                $headers = ['Accept' => 'application/json'];
                $endpoint = 'DireccionamientoXPrescripcion';
                $url = $this->baseUrl.$endpoint.'/'.$this->nit.'/'.$token.'/'.$data["prescriptionNumber"];
                $client = new \GuzzleHttp\Client();
                $response = $client->request('GET', $url, $headers, ['timeout' => 15]);
                if($response != null){
                    $body = $response->getBody();
                    $code = $response->getStatusCode();
                    $status = 'true';
                    $message = 'Data found!';
                    $data = json_decode($body);    
                }else{
                    $code = 501;
                    $status = 'false';
                    $message = 'Error on service!';
                    $data = [];
                }
                
            }
            elseif(isset($data["prescriptionDate"])){                
                $headers = ['Accept' => 'application/json'];
                $endpoint = 'DireccionamientoXFecha';
                $url = $this->baseUrl.$endpoint.'/'.$this->nit.'/'.$token.'/'.substr($data["prescriptionDate"], 0, 10);
                $client = new \GuzzleHttp\Client();
                $response = $client->request('GET', $url, $headers, ['timeout' => 15]);
                if($response != null){
                    $body = $response->getBody();
                    $code = $response->getStatusCode();
                    $status = 'true';
                    $message = 'Data found!';
                    $data = json_decode($body);    
                }else{
                    $code = 501;
                    $status = 'false';
                    $message = 'Error on service!';
                    $data = [];
                }
            }else{
                $status = 'false';
                $message = 'Prescription not found!';
                $data = [];
            }
        }catch(ClientException $ce){
            $status = 'false';
            $message = (string) $ce->getResponse()->getBody();
            $code = $ce->getResponse()->getStatusCode();
            $data = [];
        }catch(RequestException $re){
            $status = 'false';
            $message = (string) $re->getResponse()->getBody();
            $code = $re->getResponse()->getStatusCode();
            $data = [];
        }catch(Exception $e){
            $status = 'false';
            $message = $e->getMessage();
            $code = 500;
            $data = [];
        }
        return ['status'=>$status,'message'=>$message,'data'=>$data, 'code' => $code]; 
    }
    public function getPrescriptionStatusByNumber(Request $request, $token, $prescription, $role)
    {   
        $start_time = microtime(true); 
        $keys = ['addressing', 'programming', 'delivery', 'delivery-report', 'billing'];
        $finalData = ['addressing' => '', 'programming' => '', 'delivery' => '', 'delivery-report' => '', 'billing' => ''];
        $final = [];
        $prescriptions = [];
        $products = [];
        try {
            $client = new \GuzzleHttp\Client();
            foreach ($keys as $k){
                $headers = ['Accept' => 'application/json'];
                $endpoint = '';
                if($k == 'addressing'){
                    $endpoint = 'DireccionamientoXPrescripcion';
                }else if($k == 'programming' && $role != 'supplier'){
                    $endpoint = 'ProgramacionXPrescripcion';
                }else if($k == 'delivery'){
                    $endpoint = 'EntregaXPrescripcion';
                }else if($k == 'delivery-report' && $role != 'delivery'){
                    $endpoint = 'ReporteEntregaXPrescripcion';
                }else if($k == 'billing' && $role != 'delivery'){
                    $this->baseUrl = 'https://wsmipres.sispro.gov.co/WSFACMIPRESNOPBS/api/';
                    $endpoint = 'FacturacionXPrescripcion';
                }
                if($endpoint != ''){
                    $url = $this->baseUrl.$endpoint.'/'.$this->nit.'/'.$token.'/'.$prescription;
                    $response = $client->request('GET', $url, $headers);
                    $body = $response->getBody();
                    $code = $response->getStatusCode();
                    $status = 'true';
                    $message = 'Data found!';
                    $data = json_decode($body);
                    $cums = [];
                    
                    if($endpoint == 'DireccionamientoXPrescripcion'){
                        // dump($data);
                        $products = [];
                        foreach($data as $d){
                            $cums[] = $d->CodSerTecAEntregar;
                            $products[] = \App\Models\CumsProductosMipres::firstOrCreate(['cums' => $d->CodSerTecAEntregar]);
                        }
                        // $products = \DB::table('cums_productos_mipres')->select()->whereIn('cums', $cums)->get();
                    }
                    $finalData[$k] = $data;
                }
            }
        }catch(ClientException $ce){
            $status = 'false';
            $message = 'Cliente exception: '.((string) $ce->getResponse()->getBody());
            $code = $ce->getResponse()->getStatusCode();
            $data = [];
            $products = [];
        }catch(RequestException $re){
           $status = 'false';
           $message = 'Request exception: '.((string) $re->getResponse()->getBody());
           $code = $re->getResponse()->getStatusCode();
           $data = [];
           $products = [];
        }
        // }catch(Exception $e){
        //    $status = 'false';
        //    $message = 'General exception: '.$e->getMessage();
        //    $code = 500;
        //    $products = [];
        //    $data = [];
        // }
        $end_time = microtime(true); 
        $execution_time = ($end_time - $start_time); 
        return ['status'=>$status,'message'=>$message,'data'=>$finalData, 'products' => $products, 'exec_time' => $execution_time, 'code' => $code];        
    }
    public function getPrescriptionStatusByDate(Request $request, $token, $prescription, $date, $role)
    {   
        $start_time = microtime(true); 
        $keys = ['addressing', 'programming', 'delivery', 'delivery-report', 'billing'];
        $finalData = ['addressing' => '', 'programming' => '', 'delivery' => '', 'delivery-report' => '', 'billing' => ''];
        $final = [];
        $prescriptions = [];
        $products = [];
        try {
            $client = new \GuzzleHttp\Client();
            foreach ($keys as $k){
                $headers = ['Accept' => 'application/json'];
                $endpoint = '';
                if($k == 'addressing'){
                    $endpoint = 'DireccionamientoXFecha';
                }else if($k == 'programming' && $role != 'supplier'){
                    $endpoint = 'ProgramacionXFecha';
                }else if($k == 'delivery'){
                    $endpoint = 'EntregaXFecha';
                }else if($k == 'delivery-report' && $role != 'delivery'){
                    $endpoint = 'ReporteEntregaXFecha';
                }else if($k == 'billing' && $role != 'delivery'){
                    $this->baseUrl = 'https://wsmipres.sispro.gov.co/WSFACMIPRESNOPBS/api/';
                    $endpoint = 'FacturacionXFecha';
                }
                if($endpoint != ''){
                    $url = $this->baseUrl.$endpoint.'/'.$this->nit.'/'.$token.'/'.$date;
                    $response = $client->request('GET', $url, $headers);
                    $body = $response->getBody();
                    $code = $response->getStatusCode();
                    $status = 'true';
                    $message = 'Data found!';
                    $data = json_decode($body);
                    $cums = [];
                    
                    if($endpoint == 'DireccionamientoXFecha'){
                        // dump($data);
                        $products = [];
                        foreach($data as $d){
                            $cums[] = $d->CodSerTecAEntregar;
                            $products[] = \App\Models\CumsProductosMipres::firstOrNew(['cums' => $d->CodSerTecAEntregar]);
                        }
                        // $products = \DB::table('cums_productos_mipres')->select()->whereIn('cums', $cums)->get();
                    }
                    $finalData[$k] = $data;
                }
            }
        }catch(ClientException $ce){
            $status = 'false';
            $message = (string) $ce->getResponse()->getBody();
            $code = $ce->getResponse()->getStatusCode();
            $data = [];
            $products = [];
        }catch(RequestException $re){
           $status = 'false';
           $message = (string) $re->getResponse()->getBody();
           $code = $re->getResponse()->getStatusCode();
           $data = [];
           $products = [];
        }catch(Exception $e){
           $status = 'false';
           $message = $e->getMessage();
           $code = 500;
           $products = [];
           $data = [];
        }
        $end_time = microtime(true); 
        $execution_time = ($end_time - $start_time); 
        return ['status'=>$status,'message'=>$message,'data'=>$finalData, 'products' => $products, 'exec_time' => $execution_time, 'code' => $code];        
    }
    public function getPrescriptionStatusByNumber2(Request $request, $token, $prescription, $role)
    {   
        $start_time = microtime(true); 
        $keys = ['addressing', 'programming', 'delivery', 'delivery-report', 'billing'];
        $finalData = ['addressing' => '', 'programming' => '', 'delivery' => '', 'delivery-report' => '', 'billing' => ''];
        $final = [];
        $prescriptions = [];
        $products = [];
        try {
            $client = new \GuzzleHttp\Client();
            foreach ($keys as $k){
                $headers = ['Accept' => 'application/json'];
                $endpoint = '';
                if($k == 'addressing'){
                    $endpoint = 'DireccionamientoXPrescripcion';
                }else if($k == 'programming' && $role != 'supplier'){
                    $endpoint = 'ProgramacionXPrescripcion';
                }else if($k == 'delivery'){
                    $endpoint = 'EntregaXPrescripcion';
                }else if($k == 'delivery-report' && $role != 'delivery'){
                    $endpoint = 'ReporteEntregaXPrescripcion';
                }else if($k == 'billing' && $role != 'delivery'){
                    $this->baseUrl = 'https://wsmipres.sispro.gov.co/WSFACMIPRESNOPBS/api/';
                    $endpoint = 'FacturacionXPrescripcion';
                }
                if($endpoint != ''){
                    $url = $this->baseUrl.$endpoint.'/'.$this->nit.'/'.$token.'/'.$prescription;
                    $response = $client->request('GET', $url, $headers);
                    $body = $response->getBody();
                    $code = $response->getStatusCode();
                    $status = 'true';
                    $message = 'Data found!';
                    $data = json_decode($body);
                    $cums = [];
                    
                    if($endpoint == 'DireccionamientoXPrescripcion'){
                        // dump($data);
                        $products = [];
                        foreach($data as $d){
                            $cums[] = $d->CodSerTecAEntregar;
                            $products[] = \App\Models\CumsProductosMipres::firstOrCreate(['cums' => $d->CodSerTecAEntregar]);
                        }
                        // $products = \DB::table('cums_productos_mipres')->select()->whereIn('cums', $cums)->get();
                    }
                    $finalData[$k] = $data;
                }
            }




            $client = new \GuzzleHttp\Client(['base_uri' => 'https://wsmipres.sispro.gov.co'], ['Accept' => 'application/json']);

            // Initiate each request but do not block
            $promises = [
                'DireccionamientoXPrescripcion' => $client->getAsync('/WSSUMMIPRESNOPBS/api/DireccionamientoXPrescripcion'.'/'.$this->nit.'/'.$token.'/'.$prescription),
                'ProgramacionXPrescripcion' => $client->getAsync('/WSSUMMIPRESNOPBS/api/ProgramacionXPrescripcion'.'/'.$this->nit.'/'.$token.'/'.$prescription),
                'EntregaXPrescripcion' => $client->getAsync('/WSSUMMIPRESNOPBS/api/EntregaXPrescripcion'.'/'.$this->nit.'/'.$token.'/'.$prescription),
                'DireccionamientoXPrescripcion' => $client->getAsync('/WSSUMMIPRESNOPBS/api/DireccionamientoXPrescripcion'.'/'.$this->nit.'/'.$token.'/'.$prescription),
            ];

            // Wait for the requests to complete; throws a ConnectException
            // if any of the requests fail
            $responses = Promise\Utils::unwrap($promises);

            // You can access each response using the key of the promise
            echo $responses['image']->getHeader('Content-Length')[0];
            echo $responses['png']->getHeader('Content-Length')[0];

            // Wait for the requests to complete, even if some of them fail
            $responses = Promise\Utils::settle($promises)->wait();

            // Values returned above are wrapped in an array with 2 keys: "state" (either fulfilled or rejected) and "value" (contains the response)
            echo $responses['image']['state']; // returns "fulfilled"
            echo $responses['image']['value']->getHeader('Content-Length')[0];
            echo $responses['png']['value']->getHeader('Content-Length')[0];
        }catch(ClientException $ce){
            $status = 'false';
            $message = 'Cliente exception: '.((string) $ce->getResponse()->getBody());
            $code = $ce->getResponse()->getStatusCode();
            $data = [];
            $products = [];
        }catch(RequestException $re){
           $status = 'false';
           $message = 'Request exception: '.((string) $re->getResponse()->getBody());
           $code = $re->getResponse()->getStatusCode();
           $data = [];
           $products = [];
        }
        // }catch(Exception $e){
        //    $status = 'false';
        //    $message = 'General exception: '.$e->getMessage();
        //    $code = 500;
        //    $products = [];
        //    $data = [];
        // }
        $end_time = microtime(true); 
        $execution_time = ($end_time - $start_time); 
        return ['status'=>$status,'message'=>$message,'data'=>$finalData, 'products' => $products, 'exec_time' => $execution_time, 'code' => $code];        
    }
    public function changePrescriptionState(Request $request, $token, $process){

        try{    
                $object = json_decode($request->data,true);
                $client = new \GuzzleHttp\Client();
                $headers = [
                    'Accept' => 'application/json',
                    'Content-Type' => 'application/json'
                ];
                $form_params = [];
                $endpoint = '';
                if($process == 'programming'){
                    $endpoint = 'Programacion';
                    $form_params = [
                        'ID' => $object["ID"],
                        'FecMaxEnt' => substr($object["FecMaxEnt"], 0, 10),
                        'TipoIDSedeProv' => $object["TipoIDSedeProv"],
                        'NoIDSedeProv' => $object["NoIDSedeProv"],
                        'CodSedeProv' => $object["CodSedeProv"],
                        'CodSerTecAEntregar' => $object["CodSerTecAEntregar"],
                        'CantTotAEntregar' => $object["CantTotAEntregar"]
                    ];
                }elseif($process == 'delivery'){
                    $endpoint = 'Entrega';
                    $form_params = [
                        'ID' => $object["ID"],
                        'CodSerTecEntregado' => $object["CodSerTecEntregado"],
                        'CantTotEntregada' => $object["CantTotEntregada"],
                        'EntTotal' => $object["EntTotal"],
                        'CausaNoEntrega' => isset($object["CausaNoEntrega"]) ? $object["CausaNoEntrega"] : '0',
                        'FecEntrega' => substr($object["FecEntrega"], 0, 10),
                        'NoLote' => isset($object["NoLote"]) ? $object["NoLote"] : '',
                        'TipoIDRecibe' => $object["TipoIDRecibe"],
                        'NoIDRecibe' => $object["NoIDRecibe"]
                    ];
                }elseif($process == 'delivery-report'){
                    $endpoint = 'ReporteEntrega';
                    $form_params = [
                        'ID' => $object["ID"],
                        'EstadoEntrega' => $object["EstadoEntrega"],
                        'CausaNoEntrega' => isset($object["CausaNoEntrega"]) ? $object["CausaNoEntrega"] : '0',
                        'ValorEntregado' => $object["ValorEntregado"]
                    ];
                }elseif($process == 'billing'){
                    $endpoint = 'Facturacion';
                    $this->baseUrl = 'https://wsmipres.sispro.gov.co/WSFACMIPRESNOPBS/api/';
                    $form_params = [
                        'NoPrescripcion' => $object["NoPrescripcion"],
                        'TipoTec' => $object["TipoTec"],
                        'ConTec' => $object["ConTec"],
                        'TipoIDPaciente' => $object["TipoIDPaciente"],
                        'NoIDPaciente' => $object["NoIDPaciente"],
                        'NoEntrega' => $object["NoEntrega"],
                        'NoSubEntrega' => isset($object["NoSubEntrega"]) ? $object["NoSubEntrega"] : '0',
                        'NoFactura' => $object["NoFactura"],
                        'NoIDEPS' => $object["NoIDEPS"],
                        'CodEPS' => $object["CodEPS"],
                        'CodSerTecAEntregado' => $object["CodSerTecAEntregado"],
                        'CantUnMinDis' => $object["CantUnMinDis"],
                        'ValorUnitFacturado' => $object["ValorUnitFacturado"],
                        'ValorTotFacturado' => $object["ValorTotFacturado"],
                        'CuotaModer' => isset($object["CuotaModer"]) ? $object["CuotaModer"] : '0',
                        'Copago' => isset($object["Copago"]) ? $object["Copago"] : '0'
                    ];
                }
                $url = $this->baseUrl.$endpoint.'/'.$this->nit.'/'.$token;
                $response = $client->request('PUT', $url, ['headers' => $headers,
                'json' => 
                    $form_params]);
                $body = $response->getBody();
                $code = $response->getStatusCode();
                $status = 'true';
                $message = 'Data found!';
                $data = json_decode($body);
        }catch(ClientException $ce){
            $status = 'false';
            $message = (string) $ce->getResponse()->getBody();
            $code = $ce->getResponse()->getStatusCode();
            $data = [];
        }catch(RequestException $re){
           $status = 'false';
           $message = (string) $re->getResponse()->getBody();$re->getMessage();
           $code = $re->getResponse()->getStatusCode();
           $data = [];
        }catch(Exception $e){
           $status = 'false';
           $message = $e->getMessage();
           $code = 500;
           $data = [];
        }
        return ['status'=>$status,'message'=>$message,'data'=>$data, 'code' => $code];        
    }
    public function cancelPrescriptionState(Request $request, $token, $process){
        $status = '';
        $message = '';
        $data = [];
        try{    
            $object = json_decode($request->data,true);
                $client = new \GuzzleHttp\Client();
                $headers = [
                    'Accept' => 'application/json',
                    'Content-Type' => 'application/json'
                ];
                $form_params = [];
                $endpoint = '';
                $idToCancel = '';
                if($process == 'programming'){
                    $endpoint = 'AnularProgramacion';
                    $idToCancel = $object["IdProgramacion"];
                }elseif($process == 'delivery'){
                    $endpoint = 'AnularEntrega';
                    $idToCancel = $object["IdEntrega"];
                }elseif($process == 'delivery-report'){
                    $endpoint = 'AnularReporteEntrega';
                    $idToCancel = $object["IDReporteEntrega"]; 
                }elseif($process == 'billing'){
                    $endpoint = 'FacturacionAnular';
                    $this->baseUrl = 'https://wsmipres.sispro.gov.co/WSFACMIPRESNOPBS/api/';
                    $idToCancel = $object["idFacturacion"];
                }
                $url = $this->baseUrl.$endpoint.'/'.$this->nit.'/'.$token.'/'.$idToCancel;
                $response = $client->request('PUT', $url, ['headers' => $headers]);
                $body = $response->getBody();
                $status = 'true';
                $message = 'Data found!';
                $data = json_decode($body);
                $code = $response->getStatusCode();
        }catch(ClientException $ce){
            $status = 'false';
            $message = (string) $ce->getResponse()->getBody();
            $code = $ce->getResponse()->getStatusCode();
            $data = [];
        }catch(RequestException $re){
           $status = 'false';
           $message = (string) $re->getResponse()->getBody();
           $code = $re->getResponse()->getStatusCode();
           $data = [];
        }catch(Exception $e){
           $status = 'false';
           $message = $e->getMessage();
           $code = 500;
           $data = [];
        }
        return ['status'=>$status,'message'=>$message,'data'=>$data, 'code' => $code];        
    }
}
