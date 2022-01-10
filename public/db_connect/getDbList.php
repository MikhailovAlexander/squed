<?php
    $json_file = file_get_contents('config.json');
    $dbList = json_decode($json_file, true)["dbList"];
    $dataBaseNames = array();
    foreach ($dbList as $c) {
        array_push($dataBaseNames, $c["name"]);
    }
    echo json_encode($dataBaseNames);
?>