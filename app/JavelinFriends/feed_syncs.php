<?php
namespace App\JavelinFriends;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class feed_syncs
{
    public static function save_sync($id, $table_name)
    {

      try{
        $sync['table_name'] = $table_name;
            $sync['id'] = $id;
            $sync['date'] = \Carbon\Carbon::now();
            $sync['key'] = $table_name.$id;
            \DB::table('syncs')->insert($sync);
      } catch(\Illuminate\Database\QueryException $ex){
          
      }

    }
    public static function update_sync($id, $table_name){
        try{
            $sync_af = \DB::table('syncs')->where('key', $table_name.$id)->first();
            if($sync_af != null){
                \DB::table('syncs')->where('key', $table_name.$id)->update(['date' => \Carbon\Carbon::now()]);
            }else{
                echo 'it seems the sync record is already created and we are running over the update.';
            }
        } catch(\Illuminate\Database\QueryException $ex){

        }
        
    }
}