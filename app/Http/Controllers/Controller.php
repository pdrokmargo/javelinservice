<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function CreateLog($user_id,$view,$action,$description)
    {
        $view_id = \App\Models\View::where('link',$view)->first()->id;
        $user = \App\Models\User::find($user_id);

        $log = new \App\Models\ActivityLog();

        $log->view_id = $view_id;
        $log->user_id = $user_id;
        $log->action = $action;
        $log->description = $description;
        $log->company_id = $user->company_default_id;
        $log->created_at = date('Ymd');
        
        $log->save();
    }
}
