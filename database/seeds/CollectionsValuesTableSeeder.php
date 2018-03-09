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

            //PACKAGING_UNIT
            /*29*/['collection_id' => '22', 'parent_id' => 0, 'code' => 'caja', 'value' => 'Caja (Cj)'],

            //PRODUCT_TYPE
            /*30*/['collection_id' => '24', 'parent_id' => 0, 'code' => 'medicamento', 'value' => 'Medicamento'],
            /*31*/['collection_id' => '24', 'parent_id' => 0, 'code' => 'otro', 'value' => 'Otro'],

            /*PHARMACEUTICAL_FORM*/
            /*32*/['collection_id' => '23', 'parent_id' => 0, 'code' => 'sobre', 'value' => 'Sobre'],
            /*33*/['collection_id' => '23', 'parent_id' => 0, 'code' => 'capsulas', 'value' => 'Cápsulas'],
            /*34*/['collection_id' => '23', 'parent_id' => 0, 'code' => 'frasco', 'value' => 'Frasco'],
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

            // AUTH_CHAR_TYPE
            /*75*/["collection_id" => 31, "parent_id" => 0, "code" => "numerico", "value" => "Numérico"],
            /*76*/["collection_id" => 31, "parent_id" => 0, "code" => "alfabetico", "value" => "Alfabetico"],
            /*77*/["collection_id" => 31, "parent_id" => 0, "code" => "alfanumerico", "value" => "Alfanumérico"],

            // continue: PACKAGING_UNIT
            /*78*/['collection_id' => 22, 'parent_id' => 0, 'code' => 'bolsa', 'value' => 'Bolsa (Bj)'],
            /*79*/['collection_id' => 22, 'parent_id' => 0, 'code' => 'paquete', 'value' => 'Paquete (Pqte)'],

            /* continue: ROUTES_ADMINISTRATION*/
            /*80*/['collection_id' => 25, 'parent_id' => 0, 'code' => 'sublingual', 'value' => 'Sublingual'],
            /*81*/['collection_id' => 25, 'parent_id' => 0, 'code' => 'rectal', 'value' => 'Rectal'],
            /*82*/['collection_id' => 25, 'parent_id' => 0, 'code' => 'instramuscular', 'value' => 'Instramuscular'],   
            /*83*/['collection_id' => 25, 'parent_id' => 0, 'code' => 'subcutanea', 'value' => 'Subcutánea'],   
            /*84*/['collection_id' => 25, 'parent_id' => 0, 'code' => 'intradermica', 'value' => 'Intradérmica'],   
            /*85*/['collection_id' => 25, 'parent_id' => 0, 'code' => 'inhalador', 'value' => 'Inhalador'],   
            /*86*/['collection_id' => 25, 'parent_id' => 0, 'code' => 'topico', 'value' => 'Tópico'],   
            /*87*/['collection_id' => 25, 'parent_id' => 0, 'code' => 'vaginal', 'value' => 'Vaginal'],   
            /*88*/['collection_id' => 25, 'parent_id' => 0, 'code' => 'ocular', 'value' => 'Ocular'],   
            /*89*/['collection_id' => 25, 'parent_id' => 0, 'code' => 'nasal', 'value' => 'Nasal'],  
            
            /* continue: PHARMACEUTICAL_FORM*/
            /*90*/['collection_id' => 23, 'parent_id' => 0, 'code' => 'tableta', 'value' => 'Sobre'],
            /*91*/['collection_id' => 23, 'parent_id' => 0, 'code' => 'tabletaprolongada', 'value' => 'Tableta de acción prolongada'],
            /*92*/['collection_id' => 23, 'parent_id' => 0, 'code' => 'grageas', 'value' => 'Grageas'],
            /*93*/['collection_id' => 23, 'parent_id' => 0, 'code' => 'supositorios', 'value' => 'Supositorios'],
            /*94*/['collection_id' => 23, 'parent_id' => 0, 'code' => 'ovulos', 'value' => 'Óvulos'],
            /*95*/['collection_id' => 23, 'parent_id' => 0, 'code' => 'crema', 'value' => 'Crema'],
            /*96*/['collection_id' => 23, 'parent_id' => 0, 'code' => 'unguento', 'value' => 'Ungüento'],
            /*97*/['collection_id' => 23, 'parent_id' => 0, 'code' => 'ampolla', 'value' => 'Ampolla'],
            /*98*/['collection_id' => 23, 'parent_id' => 0, 'code' => 'jarabe', 'value' => 'Jarabe'],
            /*99*/['collection_id' => 23, 'parent_id' => 0, 'code' => 'gota', 'value' => 'Gota'],
            /*100*/['collection_id' => 23, 'parent_id' => 0, 'code' => 'aerosol', 'value' => 'Aerosol'],

            /* MEASUREMENT_UNIT*/
            /*101*/['collection_id' => 21, 'parent_id' => 0, 'code' => 'und', 'value' => 'Unidad (und)'],
            /*102*/['collection_id' => 21, 'parent_id' => 0, 'code' => 'kg', 'value' => 'Kilogramo (kg)'],
            /*103*/['collection_id' => 21, 'parent_id' => 0, 'code' => 'g', 'value' => 'Gramo (g)'],
            /*104*/['collection_id' => 21, 'parent_id' => 0, 'code' => 'mg', 'value' => 'Miligramo (mg)'],
            /*105*/['collection_id' => 21, 'parent_id' => 0, 'code' => 'mcg', 'value' => 'Microgramo (mcg)'],
            /*106*/['collection_id' => 21, 'parent_id' => 0, 'code' => 'lt', 'value' => 'Litro (lt)'],
            /*107*/['collection_id' => 21, 'parent_id' => 0, 'code' => 'dl', 'value' => 'Decilitro (dl)'],
            /*108*/['collection_id' => 21, 'parent_id' => 0, 'code' => 'ml', 'value' => 'Mililitro (ml)'],
            /*109*/['collection_id' => 21, 'parent_id' => 0, 'code' => 'cc', 'value' => 'Centímetro cúbico (cc)'],
            /*110*/['collection_id' => 21, 'parent_id' => 0, 'code' => 'm', 'value' => 'Metro (m)'],
            /*111*/['collection_id' => 21, 'parent_id' => 0, 'code' => 'cm', 'value' => 'Centímetro (cm)'],
            /*112*/['collection_id' => 21, 'parent_id' => 0, 'code' => 'mm', 'value' => 'Milímetro (mm)'],
            /*113*/['collection_id' => 21, 'parent_id' => 0, 'code' => 'ui', 'value' => 'U.I.'],
            
            /* continue: STORAGE_CONDITION*/
            /*114*/['collection_id' => 26, 'parent_id' => 0, 'code' => 'norequiere_refrigeración', 'value' => 'No requiere Refrigeración'],

            /* PAYMENT_METHOD */
            /*115*/['collection_id' => 32, 'parent_id' => 0, 'code' => 'efectivo', 'value' => 'Efectivo'],
            /*116*/['collection_id' => 32, 'parent_id' => 0, 'code' => 'cheque', 'value' => 'Cheque'],
            /*117*/['collection_id' => 32, 'parent_id' => 0, 'code' => 'pse', 'value' => 'Pago PSE'],
            /*118*/['collection_id' => 32, 'parent_id' => 0, 'code' => 'transferencia', 'value' => 'Transferencia Electrónica'],
            /*119*/['collection_id' => 32, 'parent_id' => 0, 'code' => 'otros', 'value' => 'Otros'],

            /* CONTENT_UNIT */ 
            /*120*/['collection_id' => 33, 'parent_id' => 0, 'code' => 'blister', 'value' => 'Blister'],
           
            
        ]);
    }
}
