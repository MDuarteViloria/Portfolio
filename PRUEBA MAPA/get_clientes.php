<?php
$serverName = "DESKTOP-HD4M46B";
$connectionOptions = array(
    "Database" => "PRUEBAS",
    "Uid" => "admin",
    "PWD" => "1234"
);

// Establishes the connection
$conn = sqlsrv_connect($serverName, $connectionOptions);
if ($conn === false) {
    die(print_r(sqlsrv_errors(), true));
}

$sql = "SELECT id, codigo_cliente, nombre, latitud, longitud, google_maps_url FROM Clientes";
$stmt = sqlsrv_query($conn, $sql);

$clientes = array();
while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
    $clientes[] = $row;
}

sqlsrv_free_stmt($stmt);
sqlsrv_close($conn);

header('Content-Type: application/json');
echo json_encode($clientes);
?>
