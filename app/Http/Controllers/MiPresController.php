<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class MiPresController extends Controller
{
    public function generateToken(Request $request)
    {
        $baseUrl = 'https://wsmipres.sispro.gov.co/WSSUMMIPRESNOPBS/api/';
        $mainToken = '525FE1ED-00E2-4364-9F5D-7612B8B1E21E';
        $nit = '802024817';
        $secondToken = '';
        $client = new Client();
        $res = $client->request('GET', $baseUrl.'GenerarToken/'.$nit.'/'.$mainToken);
        return $res;
    }
}
