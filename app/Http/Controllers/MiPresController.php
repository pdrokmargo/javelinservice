<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Exception\RequestException;
use Exception;

class MiPresController extends Controller
{
    private $baseUrl = 'https://wsmipres.sispro.gov.co/WSSUMMIPRESNOPBS/api/';
    private $mainToken = '525FE1ED-00E2-4364-9F5D-7612B8B1E21E';
    private $nit = '802024817';
    protected $secondToken = '';
    protected $client;

    public function generateToken()
    {
        $client = new Client();
        $secondToken = $client->request('GET', $this->baseUrl.'GenerarToken/'.$this->nit.'/'.$this->mainToken);
        return $secondToken;
    }
    // public function prescription(Request $request, $token, $prescription)
    // {   
    //     $keys = ['addressing', 'programming', 'delivery', 'delivery-report'];
    //     $finalData = ['addressing' => '', 'programming' => '', 'delivery' => '', 'delivery-report' => ''];
    //     // $endpoints = ['DireccionamientoXPrescripcion', 'ProgramacionXPrescripcion', 'EntregaXPrescripcion', 'ReporteEntregaXPrescripcion'];
    //     $final = [];
    //     $prescriptions = [];
        
    //     try {
    //         foreach ($keys as $k){
    //             $client = new \GuzzleHttp\Client();
    //             $headers = ['Accept' => 'application/json'];
    //             $endpoint = '';
    //             if($k == 'addressing'){
    //                 $endpoint = 'DireccionamientoXPrescripcion';
    //             }else if($k == 'programming'){
    //                 $endpoint = 'ProgramacionXPrescripcion';
    //             }else if($k == 'delivery'){
    //                 $endpoint = 'EntregaXPrescripcion';
    //             }else if($k == 'delivery-report'){
    //                 $endpoint = 'ReporteEntregaXPrescripcion';
    //             }                
    //             $url = $this->baseUrl.$endpoint.'/'.$this->nit.'/'.$token.'/'.$prescription;
    //             $response = $client->request('GET', $url, $headers);
    //             $body = $response->getBody();
    //             $status = 'true';
    //             $message = 'Data found!';
    //             $data = json_decode($body);
    //             $finalData[$k] = $data;
    //         }
    //     }catch(ClientException $ce){
    //         $status = 'false';
    //         $message = $ce->getMessage();
    //         $data = [];
    //     }catch(RequestException $re){
    //        $status = 'false';
    //        $message = $re->getMessage();
    //        $data = [];
    //     }catch(Exception $e){
    //        $this->status = 'false';
    //        $this->message = $e->getMessage();
    //        $data = [];
    //     }
    //     return ['status'=>$status,'message'=>$message,'data'=>$finalData];        
    // }
    public function getPrescriptions(Request $request, $token)
    {   
        //There are 3 cases, we just cover to fetch one prescription without details given a prescription number.
        //Next step, is to add 2 more cases to fetch all prescription in date range without details, 
        //and last case to fetch prescriptions by patient ID wihtout details.
        $data = json_decode($request->data, true);
        if(isset($data["prescriptionNumber"])){
            try {
            $client = new \GuzzleHttp\Client();
            $headers = ['Accept' => 'application/json'];
            $endpoint = 'DireccionamientoXPrescripcion';
            $url = $this->baseUrl.$endpoint.'/'.$this->nit.'/'.$token.'/'.$data["prescriptionNumber"];
            $response = $client->request('GET', $url, $headers);
            $body = $response->getBody();
            $status = 'true';
            $message = 'Data found!';
            $data = json_decode($body);
            $data = $data[0];
        }catch(ClientException $ce){
            $status = 'false';
            $message = $ce->getMessage();
            $data = [];
        }catch(RequestException $re){
           $status = 'false';
           $message = $re->getMessage();
           $data = [];
        }catch(Exception $e){
           $this->status = 'false';
           $this->message = $e->getMessage();
           $data = [];
        }
        }else{
            $status = 'false';
            $message = 'Prescription not found!';
            $data = [];
        }
        return ['status'=>$status,'message'=>$message,'data'=>$data]; 
    }
    public function getPrescriptionStatusByNumber(Request $request, $token, $prescription)
    {   
        $keys = ['addressing', 'programming', 'delivery', 'delivery-report', 'billing'];
        $finalData = ['addressing' => '', 'programming' => '', 'delivery' => '', 'delivery-report' => '', 'billing' => ''];
        // $endpoints = ['DireccionamientoXPrescripcion', 'ProgramacionXPrescripcion', 'EntregaXPrescripcion', 'ReporteEntregaXPrescripcion'];
        $final = [];
        $prescriptions = [];
        
        try {
            foreach ($keys as $k){
                $client = new \GuzzleHttp\Client();
                $headers = ['Accept' => 'application/json'];
                $endpoint = '';
                if($k == 'addressing'){
                    $endpoint = 'DireccionamientoXPrescripcion';
                }else if($k == 'programming'){
                    $endpoint = 'ProgramacionXPrescripcion';
                }else if($k == 'delivery'){
                    $endpoint = 'EntregaXPrescripcion';
                }else if($k == 'delivery-report'){
                    $endpoint = 'ReporteEntregaXPrescripcion';
                }else if($k == 'billing'){
                    $endpoint = 'FacturacionXPrescripcion';
                }

                $url = $this->baseUrl.$endpoint.'/'.$this->nit.'/'.$token.'/'.$prescription;
                $response = $client->request('GET', $url, $headers);
                $body = $response->getBody();
                $status = 'true';
                $message = 'Data found!';
                $data = json_decode($body);
                $finalData[$k] = $data;
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
           $this->status = 'false';
           $this->message = $e->getMessage();
           $data = [];
        }
        return ['status'=>$status,'message'=>$message,'data'=>$finalData];        
    }
    public function changePrescriptionState(Request $request, $token, $process){

        try{
                $object = json_decode($request->data, true);
                $client = new \GuzzleHttp\Client();
                $headers = ['Accept' => 'application/json'];
                $form_params = [];
                dump($request->data);
                $endpoint = '';
                if($process == 'programming'){
                    $endpoint = 'Programacion';
                    $form_params = ['form_params' => [
                        'ID' => $object["ID"],
                        'FecMaxEnt' => $object["FecMaxEnt"],
                        'TipoIDSedeProv' => $object["TipoIDSedeProv"],
                        'NoIDSedeProv' => $object["NoIDSedeProv"],
                        'CodSedeProv' => $object["CodSedeProv"],
                        'CodSerTecAEntregar' => $object["CodSerTecAEntregar"],
                        'CantTotAEntregar' => $object["CantTotAEntregar"]
                    ]];
                }elseif($process == 'delivery'){
                    $endpoint = 'Entrega';
                    $form_params = ['form_params' => [
                        'foo' => 'bar',
                        'baz' => ['hi', 'there!']
                    ]];
                }elseif($process == 'delivery-report'){
                    $endpoint = 'ReporteEntrega';
                    $form_params = ['form_params' => [
                        'foo' => 'bar',
                        'baz' => ['hi', 'there!']
                    ]];
                }elseif($process == 'billing'){
                    $endpoint = 'Facturacion';
                    $form_params = ['form_params' => [
                        'foo' => 'bar',
                        'baz' => ['hi', 'there!']
                    ]];
                }
                $url = $this->baseUrl.$endpoint.'/'.$this->nit.'/'.$token;
                $response = $client->request('PUT', $url, $headers, $form_params);
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
           $this->status = 'false';
           $this->message = $e->getMessage();
           $data = [];
        }
        return ['status'=>$status,'message'=>$message,'data'=>$data];        
    }
}
