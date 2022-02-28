<?php
    require "config.php";
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    $dbName = "";
    $query = "";
    if(isset($_POST["dbName"])){
        $dbName = $_POST["dbName"];
    }
    if(isset($_POST["query"])){
        $query = $_POST["query"];
    }
    $dbList = json_decode($config, true)["dbList"];
    $dbConf = null;
    $hasErrors = false;
    $errorMessage = "";
    $header = array();
    $values = array();
    $result = null;

    foreach ($dbList as $db) {
        if($db["name"] == $dbName){
            $dbConf = $db;
        }
    }

    if($dbConf == null){
        $hasErrors = true;
        $errorMessage = 'Выбранная база данных '.$dbName.' не найдена';
        $result = (object)['hasErrors' => $hasErrors, 'errorMessage' => $errorMessage, 'header' => $header, 'values' => $values];
        echo json_encode($result);
        return;
    }

    try{
        $db = new PDO(
            'mysql:host='.$dbConf["host"].';port='.$dbConf["port"].';dbname='.$dbConf["dbname"].';charset=utf8',
            $dbConf["user"],
            $dbConf["password"]);
        $db->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
    } catch (PDOException $e) {
        $hasErrors = true;
        $errorMessage = 'Не удалось подключиться к базе данных '.$dbName
            .': '.$e->getMessage();
        $result = (object)['hasErrors' => $hasErrors, 'errorMessage' => $errorMessage, 'header' => $header, 'values' => $values];
        echo json_encode($result);
        return;
    }

    try{
        $stmt = $db->query($query);
        $i = 0;
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        if($i == 0){
            $header = array_keys($row);
        }
        array_push($values, array_values($row));
        $i++;
        }
        $result = (object)['hasErrors' => $hasErrors, 'errorMessage' => $errorMessage, 'header' => $header, 'values' => $values];
        echo json_encode($result);

    } catch(PDOException $e) {
        $hasErrors = true;
        $errorMessage = 'Ошибка выполнения запроса к базе данных '.$dbName
            .': '.$e->getMessage();
        $result = (object)['hasErrors' => $hasErrors, 'errorMessage' => $errorMessage, 'header' => $header, 'values' => $values];
        echo json_encode($result);
        return;
    }
?>