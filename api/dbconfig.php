<?php

class DBConfig {
    private $servername = "localhost";
    private $dbname = "tylerTech";
    private $username = "root";
    private $password = "root";

    public function connect() {
        try {
            $conn = new PDO('mysql:host=' .$this->servername .';dbname=' . $this->dbname, $this->username, $this->password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (\Exception $e) {
            echo "Database Error: " . $e->getMessage();
        }
    }
}
?>