<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class MiPresController extends Controller
{
    public function generateToken(Request $request)
    {
        $baseUrl = 'https://wsmipres.sispro.gov.co/WSSUMMIPRESNOPBS/api/';
        $mainToken = '';
        $nit = '802024817';
        $secondToken = '';
        $client = new Client();
        $res = $client->request('GET', $baseUrl.'GenerarToken/'.$nit.'/'.$mainToken);
        return $res;
    }
}
