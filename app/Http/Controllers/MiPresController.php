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

    public function generateToken()
    {
        $client = new Client();
        // if($secondToken == ''){
        //     $secondToken = $client->request('GET', $this->baseUrl.'GenerarToken/'.$this->nit.'/'.$this->mainToken);
        // }
        $secondToken = $client->request('GET', $this->baseUrl.'GenerarToken/'.$this->nit.'/'.$this->mainToken);
        return $secondToken;
    }
    public function getPrescriptions(Request $request, $token)
    {   
        //There are 3 cases, we just cover to fetch one prescription without details given a prescription number.
        //Next step, is to add 2 more cases to fetch all prescription in date range without details, 
        //and last case to fetch prescriptions by patient ID wihtout details.
        $data = json_decode($request->data, true);
        try {
            if(isset($data["prescriptionDate"])){
                $client = new \GuzzleHttp\Client();
                $headers = ['Accept' => 'application/json'];
                $endpoint = 'DireccionamientoXFecha';
                $url = $this->baseUrl.$endpoint.'/'.$this->nit.'/'.$token.'/'.substr($data["prescriptionDate"], 0, 10);
                $response = $client->request('GET', $url, $headers);
                $body = $response->getBody();
                $status = 'true';
                $message = 'Data found!';
                $data = json_decode($body);
            }
            elseif(isset($data["prescriptionNumber"])){
                $client = new \GuzzleHttp\Client();
                $headers = ['Accept' => 'application/json'];
                $endpoint = 'DireccionamientoXPrescripcion';
                $url = $this->baseUrl.$endpoint.'/'.$this->nit.'/'.$token.'/'.$data["prescriptionNumber"];
                $response = $client->request('GET', $url, $headers);
                $body = $response->getBody();
                $status = 'true';
                $message = 'Data found!';
                $data = json_decode($body);
            }else{
                $status = 'false';
                $message = 'Prescription not found!';
                $data = [];
            }
        }catch(ClientException $ce){
            $status = 'false';
            $message = $ce->getMessage();
            $data = [];
        }catch(RequestException $re){
            $status = 'false';
            $message = $re->getMessage();
            $data = [];
        }catch(Exception $e){
            $status = 'false';
            $message = $e->getMessage();
            $data = [];
        }
        return ['status'=>$status,'message'=>$message,'data'=>$data]; 
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
                    $status = 'true';
                    $message = 'Data found!';
                    $data = json_decode($body);
                    $cums = [];
                    
                    if($endpoint == 'DireccionamientoXPrescripcion'){
                        // dump($data);
                        foreach($data as $d){
                            $cums[] = $d->CodSerTecAEntregar;
                        }
                        $products = \DB::table('cums_productos_mipres')->select()->whereIn('cums', $cums)->get();
                    }
                    $finalData[$k] = $data;
                }
            }
        }catch(ClientException $ce){
            $status = 'false';
            $message = $ce->getMessage();
            $data = [];
            $products = [];
        }catch(RequestException $re){
           $status = 'false';
           $message = $re->getMessage();
           $data = [];
           $products = [];
        }catch(Exception $e){
           $status = 'false';
           $message = $e->getMessage();
           $products = [];
           $data = [];
        }
        $end_time = microtime(true); 
        $execution_time = ($end_time - $start_time); 
        return ['status'=>$status,'message'=>$message,'data'=>$finalData, 'products' => $products, 'exec_time' => $execution_time];        
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
                    $status = 'true';
                    $message = 'Data found!';
                    $data = json_decode($body);
                    $cums = [];
                    
                    if($endpoint == 'DireccionamientoXFecha'){
                        // dump($data);
                        foreach($data as $d){
                            $cums[] = $d->CodSerTecAEntregar;
                        }
                        $products = \DB::table('cums_productos_mipres')->select()->whereIn('cums', $cums)->get();
                    }
                    $finalData[$k] = $data;
                }
            }
        }catch(ClientException $ce){
            $status = 'false';
            $message = $ce->getMessage();
            $data = [];
            $products = [];
        }catch(RequestException $re){
           $status = 'false';
           $message = $re->getMessage();
           $data = [];
           $products = [];
        }catch(Exception $e){
           $status = 'false';
           $message = $e->getMessage();
           $products = [];
           $data = [];
        }
        $end_time = microtime(true); 
        $execution_time = ($end_time - $start_time); 
        return ['status'=>$status,'message'=>$message,'data'=>$finalData, 'products' => $products, 'exec_time' => $execution_time];        
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
                $status = 'true';
                $message = 'Data found!';
                $data = json_decode($body);
        }catch(ClientException $ce){
            $status = 'false';
            $message = $ce->getMessage();
            $data = [];
        }catch(RequestException $re){
           $status = 'false';
           $message = $re->getMessage();
           $data = [];
        }catch(Exception $e){
           $status = 'false';
           $message = $e->getMessage();
           $data = [];
        }
        return ['status'=>$status,'message'=>$message,'data'=>$data];        
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
                
        }catch(ClientException $ce){
            $status = 'false';
            $message = $ce->getMessage();
            $data = [];
        }catch(RequestException $re){
           $status = 'false';
           $message = $re->getMessage();
           $data = [];
        }catch(Exception $e){
           $status = 'false';
           $message = $e->getMessage();
           $data = [];
        }
        return ['status'=>$status,'message'=>$message,'data'=>$data];        
    }
}
