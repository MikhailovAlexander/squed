<?php
    require "config.php";
    $dbList = json_decode($config, true)["dbList"];
    $dataBaseNames = array();
    foreach ($dbList as $c) {
        array_push($dataBaseNames, $c["name"]);
    }
    echo json_encode($dataBaseNames);
?>