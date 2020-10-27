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
    // private $client;

    // public function __construct() {
    //     $client = new Client();
    // }

    public function generateToken()
    {
        $client = new Client();
        $secondToken = $client->request('GET', $this->baseUrl.'GenerarToken/'.$this->nit.'/'.$this->mainToken);
        return $secondToken;
    }
    public function prescriptionAddressing(Request $request, $token, $prescription)
    {   

        try{
            // Send an asynchronous request.
//             $request = new \GuzzleHttp\Psr7\Request('GET', $url, $headers);
//             $promise = $client->sendAsync($request)->then(function ($response) {
//                 echo 'I completed! ' . $response->getBody();
//             });

// $promise->wait();
            // $secondToken = $this->generateToken();
            $client = new \GuzzleHttp\Client();
            $headers = ['Accept' => 'application/json'];
            $url = $this->baseUrl.'DireccionamientoXPrescripcion/'.$this->nit.'/'.$token.'/'.$prescription;
            // echo 'prove: '. $secondToken;   
            $response = $client->request('GET', $url, $headers);
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
        // $client = new \GuzzleHttp\Client();
        // $response = $client->request('GET', 'https://wsmipres.sispro.gov.co/WSSUMMIPRESNOPBS/api/DireccionamientoXPrescripcion/802024817/_0hZFuEPhyPIbwAowjiePR8TMae8cIdhF4MCV5Dh7CA=/20201003197023452163');
        // dd($response);
// echo $response->getStatusCode(); // 200
// echo $response->getHeaderLine('content-type'); // 'application/json; charset=utf8'
// echo $response->getBody(); // '{"id": 1420053, "name": "guzzle", ...}'
// $headers = ['X-Foo' => 'Bar'];
// Send an asynchronous request.
// $request = new \GuzzleHttp\Psr7\Request('GET', 'https://wsmipres.sispro.gov.co/WSSUMMIPRESNOPBS/api/DireccionamientoXPrescripcion/802024817/_0hZFuEPhyPIbwAowjiePR8TMae8cIdhF4MCV5Dh7CA=/20201003197023452163');
// $promise = $client->sendAsync($request)->then(function ($response) {
//     echo 'I completed! ' . $response->getBody();
// });

// $promise->wait();
        //     $url = $this->baseUrl.'DireccionamientoXPrescripcion/'.$this->nit.'/_0hZFuEPhyPIbwAowjiePR8TMae8cIdhF4MCV5Dh7CA=/'.$prescription;
        // $httpClient = new HttpClient(['base_uri' => $url]);
        // $this->generateToken();
        
        
        // $res = (string)$res->getBody();
        // dd($res->getBody());

        // $request = new \GuzzleHttp\Psr7\Request('GET', $url);
        // $promise = $client->sendAsync($request)->then(function ($response) {
        //     echo 'I completed! ' . $response->getBody();
        //     // return response()->json([ 
        //     //     "object" => $response->getBody()
        //     // ], 200);
        // });

        // $promise->wait();

        // try {

        //     $client = new Client();
        //     $url = $this->baseUrl.'DireccionamientoXPrescripcion/'.$this->nit.'/_0hZFuEPhyPIbwAowjiePR8TMae8cIdhF4MCV5Dh7CA=/'.$prescription;
        //     $res = $client->request('GET', $url);
                
        //     // Here the code for successful request
        
        // } catch (RequestException $e) {
        
        //     // Catch all 4XX errors 
            
        //     // To catch exactly error 400 use 
        //     if ($e->hasResponse()){
        //         if ($e->getResponse()->getStatusCode() == '400') {
        //                 echo $e;
        //         }
        //     }
        
        //     // You can check for whatever error status code you need 
            
        // } catch (\Exception $e) {
        //     dd($e);
        //     // There was another exception.
        
        // }
        
    }
    public function prescriptionProgramming(Request $request, $token, $prescription)
    {   

        try{
            $client = new \GuzzleHttp\Client();
            $headers = ['Accept' => 'application/json'];
            $url = $this->baseUrl.'ProgramacionXPrescripcion/'.$this->nit.'/'.$token.'/'.$prescription;
            $response = $client->request('GET', $url, $headers);
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
    public function prescriptionDelivery(Request $request, $token, $prescription)
    {   

        try{
            $client = new \GuzzleHttp\Client();
            $headers = ['Accept' => 'application/json'];
            $url = $this->baseUrl.'EntregaXPrescripcion/'.$this->nit.'/'.$token.'/'.$prescription;
            $response = $client->request('GET', $url, $headers);
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
    public function prescriptionDeliveryReport(Request $request, $token, $prescription)
    {   

        try{
            $client = new \GuzzleHttp\Client();
            $headers = ['Accept' => 'application/json'];
            $url = $this->baseUrl.'ReporteEntregaXPrescripcion/'.$this->nit.'/'.$token.'/'.$prescription;
            $response = $client->request('GET', $url, $headers);
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
    public function prescriptionBilled(Request $request, $token, $prescription)
    {   

        // try{
        //     $client = new \GuzzleHttp\Client();
        //     $headers = ['Accept' => 'application/json'];
        //     $url = $this->baseUrl.'DireccionamientoXPrescripcion/'.$this->nit.'/'.$token.'/'.$prescription;
        //     $response = $client->request('GET', $url, $headers);
        //     $body = $response->getBody();
        //     $status = 'true';
        //     $message = 'Data found!';
        //     $data = json_decode($body);
        // }catch(ClientException $ce){
        //     $status = 'false';
        //     $message = $ce->getMessage();
        //     $data = [];
        // }catch(RequestException $re){
        //    $status = 'false';
        //    $message = $re->getMessage();
        //    $data = [];
        // }catch(Exception $e){
        //    $this->status = 'false';
        //    $this->message = $e->getMessage();
        //    $data = [];
        // }
        // return ['status'=>$status,'message'=>$message,'data'=>$data];        
    }
    public function prescription(Request $request, $token, $prescription)
    {   
        $keys = ['addressing', 'programming', 'delivery', 'delivery-report'];
        $finalData = ['addressing' => '', 'programming' => '', 'delivery' => '', 'delivery-report' => ''];
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
    public function getPrescriptions(Request $request, $token)
    {   
        //There are 3 cases, we just cover to fetch one prescription without details given a prescription number.
        //Next step, is to add 2 more cases to fetch all prescription in date range without details, 
        //and last case to fetch prescriptions by patient ID wihtout details.
        if(isset($request->prescriptionNumber)){
            try {
            $client = new \GuzzleHttp\Client();
            $headers = ['Accept' => 'application/json'];
            $endpoint = 'DireccionamientoXPrescripcion';
            $url = $this->baseUrl.$endpoint.'/'.$this->nit.'/'.$token.'/'.$prescriptionNumber;
            $response = $client->request('GET', $url, $headers);
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
        }else{
            $status = 'false';
            $message = 'Prescription not found!';
            $data = [];
        }
        return ['status'=>$status,'message'=>$message,'data'=>$data]; 
    }
    public function getPrescriptionStatusByNumber(Request $request, $token, $prescription)
    {   
        $keys = ['addressing', 'programming', 'delivery', 'delivery-report'];
        $finalData = ['addressing' => '', 'programming' => '', 'delivery' => '', 'delivery-report' => ''];
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
}
