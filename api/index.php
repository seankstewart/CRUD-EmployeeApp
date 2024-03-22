<?php

/* resolve localhost CORS issue */
if (isset($_SERVER['HTTP_ORIGIN'])) { 
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); 
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
}


/* database connection */
include "dbconfig.php";
$dbObject = new dbconfig;
$conn = $dbObject->connect();

/* constants */
$method = $_SERVER['REQUEST_METHOD'];
$uriBasename = basename($_SERVER['REQUEST_URI']);
$pathinfo = pathinfo($_SERVER['REQUEST_URI'], PATHINFO_DIRNAME);
$pathinfo = array_filter( explode('/', $pathinfo) );


/* API */

function executeStatement($statement) {
    if ($statement->execute()) {
        $response = ['status' => 1, 'message' => 'Record was created successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to create record.'];
    }
}

/* Employee API calls */
if ($uriBasename === "employees") {
    switch($method) {
    /* get all employees */
    case "GET":
        $sql = "SELECT * FROM employees";
        $statement = $conn->prepare($sql);
        if ($statement->execute());
        $employees = $statement->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($employees);
        break;
    /* add new employees */
    case "POST":
        /* INSERT new employee query */
        $user = json_decode(file_get_contents('php://input')); /* this allows data to be read as json */
        $sql = "INSERT INTO employees(fname, lname, employee_id) VALUES (:fname, :lname, :employee_id)";
        $statement = $conn->prepare($sql);
        $statement->bindParam(':fname', $user->fname);
        $statement->bindParam(':lname', $user->lname);
        $statement->bindParam(':employee_id', $user->employee_id);
        executeStatement($statement);
        echo json_encode($response);

        /* INSERT employee/manager relationship query */
        $sql2 = "INSERT INTO employeeManagers(manager_id, employee_id) VALUES (:manager_id, :employee_id)";
        $emptyManager = (isset($user->manager_id)) ? $user->manager_id : 0;
        $statement = $conn->prepare($sql2);
        $statement->bindParam(':employee_id', $user->employee_id);
        $statement->bindParam(':manager_id', $emptyManager);
        executeStatement($statement);
        echo json_encode($response);

        /* INSERT employee/role relationship query */
        $sql3 = "INSERT INTO employeeRoles(role_id, employee_id) VALUES (:role_id, :employee_id)";
        $statement = $conn->prepare($sql3);
        $statement->bindParam(':employee_id', $user->employee_id);
        $roles = array($user->role1, $user->role2, $user->role3, $user->role4, $user->role5, $user->role6);
        $x = 0;
        foreach ($roles as $role) {
            if ($role) {
                $statement->bindParam(':role_id', $roles[$x]);
                executeStatement($statement);
            }
            $x++;
        }
        echo json_encode($response);

        break;
    }
}

if ($uriBasename === "managers") {
    $sql = "SELECT employees.id, employees.employee_id, employees.fname, employees.lname
            FROM employees
            INNER JOIN employeeRoles
            ON employees.employee_id = employeeRoles.employee_id
            WHERE (employeeRoles.role_id = 1);
            ";
    $statement = $conn->prepare($sql);
    $statement->execute();
    $employees = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($employees);
}
    
if ($uriBasename === "getEmployeesByManager") {
    $sql = "SELECT employees.id, employees.employee_id, employees.fname, employees.lname
            FROM employees
            INNER JOIN employeeManagers
            ON employees.employee_id = employeeManagers.employee_id
            WHERE (employees.employee_id = employeeManagers.employee_id && employeeManagers.manager_id = " . end($pathinfo) . ")";
    $statement = $conn->prepare($sql);
    $statement->execute();
    $employees = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($employees);
}


if ($uriBasename === "roles") {
    $sql = "SELECT * FROM roles";
    $statement = $conn->prepare($sql);
    if ($statement->execute());
    $employees = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($employees);
}

?>