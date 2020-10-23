<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;

class MiPresController extends Controller
{
    private $baseUrl = 'https://wsmipres.sispro.gov.co/WSSUMMIPRESNOPBS/api';
    private $mainToken = '525FE1ED-00E2-4364-9F5D-7612B8B1E21E';
    private $nit = '802024817';
    private $secondToken = '';

    public function generateToken()
    {
        $client = new Client(['base_uri' => $this->baseUrl]);
        $this->secondToken = $client->request('GET', 'GenerarToken/'.$this->nit.'/'.$this->mainToken);
        return $this->secondToken;
    }
    public function direccionamientoXFecha(Request $request)
    {
        $client = new Client();
        $res = $client->request('GET', 'GenerarToken/'.$this->nit.'/'.$mainToken);
        return $res;
    }
    public function direccionamientoXPrescripcion(Request $request, $prescription)
    {
        $this->generateToken();
        $r = new Client(['base_uri' => $this->baseUrl]);
        $res = $client->request('GET', $this->baseUrl.'DireccionamientoXPrescripcion/'.$this->nit.'/'.$this->secondToken.'/'.$prescription);
        // $res = (string)$res->getBody();
        dd($res);
        // return response()->json([ 
        //     "object" => $res 
        // ], 200);
    }
}
