<?php

 class grapeNote{
    public static $selectQuery;
    public static $insertQuery;
    public static $dbCreds;

    public static function sendGrape($attributes){ //will send the notes
        //print_r($attributes);
        require_once('FirePHPCore/FirePHP.class.php');
        ob_start();
        $firephp = FirePHP::getInstance(true);
        $firephp->trace($attributes);
        $id;
        $children;
        foreach($attributes as $key=>$val){
            $id = $key;
            $val = $children;
        }
                $testArr = array(
                         "312312" => array(
                            "date" => date("Y-m-d H:i(:s)"),
                            "name" => "john",
                            "text" => "asdsad af asf kasf asdf asd asfd asf as.sad asd.as d"
                         ),"23525462" => array(
                            "date" => date("Y-m-d H:i(:s)"),
                            "name" => "Smith",
                            "text" => "asd af asf kasfgwrgwg wsd asdg rg wrgh aehq aethqetjhq rfasdsadgasfdg asdg adsg waqrhgwr hqer hs.sad asd.as d"
                         ),
                           "246436" => array(
                            "date" => date("Y-m-d H:i(:s)"),
                            "name" => "Cadburry Egg",
                            "text" => "asdsad a.sad asd.as d"
                         )
                         );

                echo(json_encode($testArr));
    }
    public static function saveGrape($attributes){ //will save the notes
         $id;
        $children;
        foreach($attributes as $key=>$val){
            $id = $key;
            $val = $children;
        }
    }
    
 }

 grapeNote::$selectQuery = "";
 grapeNote::$insertQuery = "";
 grapeNote::$dbCreds = "";
 
 if(isset($_POST["getGrapeNotes"])){
   grapeNote::sendGrape(json_decode($_POST["getGrapeNotes"]));
 }elseif(isset($_POST["saveGrapeNotes"])){
    grapeNote::saveGrape(json_decode($_POST["saveGrapeNotes"]));
 }
?>