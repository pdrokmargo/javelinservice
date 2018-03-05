<?php

use Illuminate\Database\Seeder;

class CollectionsValuesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('collections_values')->insert([
            //Privileges
                /*1*/['collection_id' => '1', 'parent_id' => 0,'code' => 'crear', 'value' => 'Crear'],
                /*2*/['collection_id' => '1', 'parent_id' => 0,'code' => 'leer', 'value' => 'Leer'],
                /*3*/['collection_id' => '1', 'parent_id' => 0,'code' => 'actualizar', 'value' => 'Actualizar'],
                /*4*/['collection_id' => '1', 'parent_id' => 0,'code' => 'borrar', 'value' => 'Borrar'],
            //Genres
                /*5*/['collection_id' => '2', 'parent_id' => 0,'code' => 'masculino', 'value' => 'Masculino'],
                /*6*/['collection_id' => '2', 'parent_id' => 0,'code' => 'femenino', 'value' => 'Femenino'],
            //Countries
                /*7*/['collection_id' => '3', 'parent_id' => 0, 'code' => 'colombia', 'value' => 'Colombia'],
            //Departaments
                /*8*/['collection_id' => '4', 'parent_id' => 7, 'code' => 'atlantico', 'value' => 'Atlántico'],
                /*9*/['collection_id' => '4', 'parent_id' => 7,'code' => 'magdalena', 'value' => 'Magdalena'],
                /*10*/['collection_id' => '4', 'parent_id' => 7,'code' => 'bolivar', 'value' => 'Bolívar'],
            //Cities, Towns, etc
                /*11*/['collection_id' => '5', 'parent_id' => 8, 'code' => 'barranquilla', 'value' => 'Barranquilla'],
            //Document Types
                /*12*/['collection_id' => '6', 'parent_id' => 0, 'code' => 'CC', 'value' => 'Cédula de ciudadanía'],
                /*13*/['collection_id' => '6', 'parent_id' => 0, 'code' => 'CE', 'value' => 'Cédula de extranjería'],
                /*14*/['collection_id' => '6', 'parent_id' => 0, 'code' => 'NIT', 'value' => 'NIT'],
            //Tax regime
                /*15*/['collection_id' => '7', 'parent_id' => 0, 'code' => 'comun', 'value' => 'Común'],
                /*16*/['collection_id' => '7', 'parent_id' => 0, 'code' => 'simplificado', 'value' => 'Simplificado'],
            //Debt type
                /*17*/['collection_id' => '8', 'parent_id' => 0, 'code' => 'contado', 'value' => 'Contado'],
                /*18*/['collection_id' => '8', 'parent_id' => 0, 'code' => 'credito', 'value' => 'Crédito'],
            //WAREHOUSE_TYPE
                /*19*/['collection_id' => '9', 'parent_id' => 0, 'code' => 'main', 'value' => 'Principal'],
                /*20*/['collection_id' => '9', 'parent_id' => 0, 'code' => 'secondary', 'value' => 'Secundaria'],
            //WITHHOLDING_TYPE
                /*21*/['collection_id' => '10', 'parent_id' => 0, 'code' => 'no_liquida', 'value' => 'No liquida'],
                /*22*/['collection_id' => '10', 'parent_id' => 0, 'code' => 'liquida_no_contabiliza', 'value' => 'Liquida y no contabiliza'],
                /*23*/['collection_id' => '10', 'parent_id' => 0, 'code' => 'liquida_y_contabiliza', 'value' => 'Liquida y contabiliza'],
                /*24*/['collection_id' => '10', 'parent_id' => 0, 'code' => 'autorretenedor', 'value' => 'Autorretenedor'], //Reterenta en ventas, Reteica en ventas

            //OPERATION_CENTRE_GROUPS
                /*25*/['collection_id' => '11', 'parent_id' => 0, 'code' => 'default_group', 'value' => 'Grupo por defecto'],
            
            //COSTS_CENTRE_GROUPS
                /*26*/['collection_id' => '12', 'parent_id' => 0, 'code' => 'administrativo', 'value' => 'Administrativo'],
                   
            //COSTS_CENTRE_TYPES
            /*27*/['collection_id' => '13', 'parent_id' => 0, 'code' => 'titulo', 'value' => 'Titulo'],
            /*28*/['collection_id' => '13', 'parent_id' => 0, 'code' => 'detalle', 'value' => 'Detalle'],

            //COSTS_CENTRE_TYPES
            /*29*/['collection_id' => '22', 'parent_id' => 0, 'code' => 'caja', 'value' => 'Caja'],

            //PRODUCT_TYPE
            /*30*/['collection_id' => '24', 'parent_id' => 0, 'code' => 'medicamento', 'value' => 'Medicamento'],
            /*31*/['collection_id' => '24', 'parent_id' => 0, 'code' => 'otro', 'value' => 'Otro'],

            /*PHARMACEUTICAL_FORM*/
            /*32*/['collection_id' => '23', 'parent_id' => 0, 'code' => 'tableta', 'value' => 'Tableta'],
            /*33*/['collection_id' => '23', 'parent_id' => 0, 'code' => 'pastillas', 'value' => 'Pastillas'],
            /*34*/['collection_id' => '23', 'parent_id' => 0, 'code' => 'capsulas', 'value' => 'Capsulas'],
            /*ROUTES_ADMINISTRATION*/
            /*35*/['collection_id' => '25', 'parent_id' => 0, 'code' => 'oral', 'value' => 'Oral'],
            /*36*/['collection_id' => '25', 'parent_id' => 0, 'code' => 'intravenosa', 'value' => 'Intravenosa'],
            /*STORAGE_CONDITION*/
            /*37*/['collection_id' => '26', 'parent_id' => 0, 'code' => 'requiere_refrigeración', 'value' => 'Requiere Refrigeración'],

            //person type
            /*38*/['collection_id' => '16', 'parent_id' => 0, 'code' => 'natural', 'value' => 'Natural'],
            /*39*/['collection_id' => '16', 'parent_id' => 0, 'code' => 'juridica', 'value' => 'Juridica'],

            /*banks*/
            /*40*/["collection_id" => 18, "parent_id" => 0, "code" => "banco_agrario", "value" => "BANCO AGRARIO"],
            /*41*/["collection_id" => 18, "parent_id" => 0, "code" => "banco_av_villas", "value" => "BANCO AV VILLAS"],
            /*42*/["collection_id" => 18, "parent_id" => 0, "code" => "banco_bbva_colombia_s.a.", "value" => "BANCO BBVA COLOMBIA S.A."],
            /*43*/["collection_id" => 18, "parent_id" => 0, "code" => "banco_caja_social", "value" => "BANCO CAJA SOCIAL"],
            /*44*/["collection_id" => 18, "parent_id" => 0, "code" => "banco_colpatria", "value" => "BANCO COLPATRIA"],
            /*45*/["collection_id" => 18, "parent_id" => 0, "code" => "banco_cooperativo_coopcentral", "value" => "BANCO COOPERATIVO COOPCENTRAL"],
            /*46*/["collection_id" => 18, "parent_id" => 0, "code" => "banco_corpbanca_s.a", "value" => "BANCO CORPBANCA S.A"],
            /*47*/["collection_id" => 18, "parent_id" => 0, "code" => "banco_davivienda", "value" => "BANCO DAVIVIENDA"],
            /*48*/["collection_id" => 18, "parent_id" => 0, "code" => "banco_de_bogota", "value" => "BANCO DE BOGOTA"],
            /*49*/["collection_id" => 18, "parent_id" => 0, "code" => "banco_de_occidente", "value" => "BANCO DE OCCIDENTE"],
            /*50*/["collection_id" => 18, "parent_id" => 0, "code" => "banco_falabella_", "value" => "BANCO FALABELLA "],
            /*51*/["collection_id" => 18, "parent_id" => 0, "code" => "banco_gnb_sudameris", "value" => "BANCO GNB SUDAMERIS"],
            /*52*/["collection_id" => 18, "parent_id" => 0, "code" => "banco_pichincha_s.a.", "value" => "BANCO PICHINCHA S.A."],
            /*53*/["collection_id" => 18, "parent_id" => 0, "code" => "banco_popular", "value" => "BANCO POPULAR"],
            /*54*/["collection_id" => 18, "parent_id" => 0, "code" => "banco_procredit", "value" => "BANCO PROCREDIT"],
            /*55*/["collection_id" => 18, "parent_id" => 0, "code" => "bancolombia", "value" => "BANCOLOMBIA"],
            /*56*/["collection_id" => 18, "parent_id" => 0, "code" => "bancoomeva_s.a.", "value" => "BANCOOMEVA S.A."],
            /*57*/["collection_id" => 18, "parent_id" => 0, "code" => "citibank", "value" => "CITIBANK"],
            /*58*/["collection_id" => 18, "parent_id" => 0, "code" => "helm_bank_s.a.", "value" => "HELM BANK S.A."],
            /*58*/["collection_id" => 18, "parent_id" => 0, "code" => "helm_bank_s.a.", "value" => "HELM BANK S.A."],

            /*bank_account_type*/
            /*59*/["collection_id" => 19, "parent_id" => 0, "code" => "ahorro", "value" => "AHORRO"],
            /*60*/["collection_id" => 19, "parent_id" => 0, "code" => "corriente", "value" => "CORRIENTE"],

            // PAYMENT_CONDITION
            /*61*/["collection_id" => 27, "parent_id" => 0, "code" => "15 dias", "value" => "15 Días"],
            /*62*/["collection_id" => 27, "parent_id" => 0, "code" => "30 dias", "value" => "30 Días"],
            /*63*/["collection_id" => 27, "parent_id" => 0, "code" => "45 dias", "value" => "45 Días"],
            /*64*/["collection_id" => 27, "parent_id" => 0, "code" => "60 dias", "value" => "60 Días"],
            /*65*/["collection_id" => 27, "parent_id" => 0, "code" => "90 dias", "value" => "90 Días"],
            /*66*/["collection_id" => 27, "parent_id" => 0, "code" => "120 dias", "value" => "120 Días"],

            // SUPPLIERS_CLASS    
            /*67*/["collection_id" => 14, "parent_id" => 0, "code" => "clase 1", "value" => "Clase 1"],
            // CUSTOMERS_CLASS
            /*68*/["collection_id" => 15, "parent_id" => 0, "code" => "clase 1", "value" => "Clase 1"],

            // IPS_NETWORK
            /*69*/["collection_id" => 28, "parent_id" => 0, "code" => "hospitalnazareth", "value" => "Hospital Nazareth"],
            /*70*/["collection_id" => 28, "parent_id" => 0, "code" => "hospitalbarranquilla", "value" => "Hospital Barranquilla"],
            /*71*/["collection_id" => 28, "parent_id" => 0, "code" => "hospitaluniversitario", "value" => "Hospital Universitario"],

            // POPULATION_TYPE
            /*72*/["collection_id" => 29, "parent_id" => 0, "code" => "subsidiado", "value" => "Subsidiado"],
            /*73*/["collection_id" => 29, "parent_id" => 0, "code" => "contributivo", "value" => "Contributivo"],

            // DELIVERY_POINTS_GROUPS
            /*74*/["collection_id" => 30, "parent_id" => 0, "code" => "zonaatlantico", "value" => "Zona Atlántico"],
            
        ]);
    }
}
