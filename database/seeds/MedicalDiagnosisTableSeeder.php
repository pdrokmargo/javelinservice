<?php

use Illuminate\Database\Seeder;
use Webpatser\Uuid\Uuid;

class MedicalDiagnosisTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('medical_diagnosis')->insert([
            ['id' => Uuid::generate()->string, 'code' => 'A000', 'description' => 'COLERA DEBIDO A VIBRIO CHOLERAE O1. BIOTIPO CHOLERAE', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A001', 'description' => 'COLERA DEBIDO A VIBRIO CHOLERAE O1. BIOTIPO EL TOR', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A009', 'description' => 'COLERA NO ESPECIFICADO', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A010', 'description' => 'FIEBRE TIFOIDEA', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A011', 'description' => 'FIEBRE PARATIFOIDEA A', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A012', 'description' => 'FIEBRE PARATIFOIDEA B', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A013', 'description' => 'FIEBRE PARATIFOIDEA C', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A014', 'description' => 'FIEBRE PARATIFOIDEA. NO ESPECIFICADA', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A020', 'description' => 'ENTERITIS DEBIDA A SALMONELLA', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A021', 'description' => 'SEPTICEMIA DEBIDA A SALMONELLA', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A022', 'description' => 'INFECCIONES LOCALIZADAS DEBIDA A SALMONELLA', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A028', 'description' => 'OTRAS INFECCIONES ESPECIFICADAS COMO DEBIDAS A SALMONELLA', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A029', 'description' => 'INFECCIÓN DEBIDA A SALMONELLA NO ESPECIFICADA', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A030', 'description' => 'SHIGELOSIS DEBIDA A SHIGELLA DYSENTERIAE', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A031', 'description' => 'SHIGELOSIS DEBIDA A SHIGELLA FLEXNERI', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A032', 'description' => 'SHIGELOSIS DEBIDA A SHIGELLA BOYDII', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A033', 'description' => 'SHIGELOSIS DEBIDA A SHIGELLA SONNEI', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A038', 'description' => 'OTRAS SHIGELOSIS', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A039', 'description' => 'SHIGELOSIS DE TIPO NO ESPECIFICADO', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A040', 'description' => 'INFECCION DEBIDA A ESCHERICHIA COLI ENTEROPATOGENA', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A041', 'description' => 'INFECCION DEBIDA A ESCHERICHIA COLI ENTEROTOXIGENA', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A042', 'description' => 'INFECCION DEBIDA A ESCHERICHIA COLI ENTEROINVASIVA', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A043', 'description' => 'INFECCION DEBIDA A ESCHERICHIA COLI ENTEROHEMORRAGICA', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A044', 'description' => 'OTRAS INFECCIONES INTESTINALES DEBIDAS A ESCHERICHIA COLI', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A045', 'description' => 'ENTERITIS DEBIDA A CAMPYLOBACTER', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A046', 'description' => 'ENTERITIS DEBIDA A YERSINIA ENTEROCOLITICA', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A047', 'description' => 'ENTEROCOLITIS DEBIDA A CLOSTRIDIUM DIFFICILE', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A048', 'description' => 'OTRAS INFECCIONES INTESTINALES BACTERIANAS ESPECIFICADAS', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A049', 'description' => 'INFECCION INTESTINAL BACTERIANA. NO ESPECIFICADA', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A050', 'description' => 'INTOXICACION ALIMENTARIA ESTAFILOCOCICA', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A051', 'description' => 'BOTULISMO', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A052', 'description' => 'INTOXICACION ALIMENTARIA DEBIDA A CLOSTRIDIUM PERFRINGENS [CLOSTRIDIUM WELCHII]', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A053', 'description' => 'INTOXICACION ALIMENTARIA DEBIDA A VIBRIO PARAHAEMOLYTICUS', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],
            ['id' => Uuid::generate()->string, 'code' => 'A054', 'description' => 'INTOXICACION ALIMENTARIA DEBIDA A BACILLUS CEREUS', 'genre' => 'A', 'inferior_limit' => 0, 'superior_limit' => 0],

        ]);
    }
}
