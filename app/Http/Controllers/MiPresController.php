<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

class MiPresController extends Controller
{
    private $baseUrl = 'https://wsmipres.sispro.gov.co/WSSUMMIPRESNOPBS/api/';
    private $mainToken = '525FE1ED-00E2-4364-9F5D-7612B8B1E21E';
    private $nit = '802024817';
    private $secondToken = '_0hZFuEPhyPIbwAowjiePR8TMae8cIdhF4MCV5Dh7CA%3D';
    // private $client;

    // public function __construct() {
    //     $client = new Client();
    // }

    public function generateToken()
    {
        $client = new Client();
        $this->secondToken = $client->request('GET', $this->baseUrl.'GenerarToken/'.$this->nit.'/'.$this->mainToken);
    }
    public function direccionamientoXPrescripcion(Request $request, $prescription)
    {
        // $this->generateToken();
        
        
        // $res = (string)$res->getBody();
        dd($res->getBody());

        // $request = new \GuzzleHttp\Psr7\Request('GET', $url);
        // $promise = $client->sendAsync($request)->then(function ($response) {
        //     echo 'I completed! ' . $response->getBody();
        //     // return response()->json([ 
        //     //     "object" => $response->getBody()
        //     // ], 200);
        // });

        // $promise->wait();

        try {

            $client = new Client();
            $url = $this->baseUrl.'DireccionamientoXPrescripcion/'.$this->nit.'/_0hZFuEPhyPIbwAowjiePR8TMae8cIdhF4MCV5Dh7CA=/'.$prescription;
            $res = $client->request('GET', $url);
                
            // Here the code for successful request
        
        } catch (RequestException $e) {
        
            // Catch all 4XX errors 
            
            // To catch exactly error 400 use 
            if ($e->hasResponse()){
                if ($e->getResponse()->getStatusCode() == '400') {
                        echo "Got response 400";
                }
            }
        
            // You can check for whatever error status code you need 
            
        } catch (\Exception $e) {
            dd($e);
            // There was another exception.
        
        }
        
    }
}
