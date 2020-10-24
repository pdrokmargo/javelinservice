<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class MiPresController extends Controller
{
    private $baseUrl = 'https://wsmipres.sispro.gov.co/WSSUMMIPRESNOPBS/api/';
    private $mainToken = '525FE1ED-00E2-4364-9F5D-7612B8B1E21E';
    private $nit = '802024817';
    private $secondToken = '_0hZFuEPhyPIbwAowjiePR8TMae8cIdhF4MCV5Dh7CA=';
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
        $client = new Client();
        $url = $this->baseUrl.'DireccionamientoXPrescripcion/'.$this->nit.'/_0hZFuEPhyPIbwAowjiePR8TMae8cIdhF4MCV5Dh7CA=/'.$prescription;
        // echo $url;
        // $url = $this->baseUrl.'GenerarToken/'.$this->nit.'/'.$this->mainToken;
        // echo $url;
        $res = $client->request('GET', $url);
        
        // $res = (string)$res->getBody();
        // dd($res);
        return response()->json([ 
            "object" => $url
        ], 200);
    }
}
