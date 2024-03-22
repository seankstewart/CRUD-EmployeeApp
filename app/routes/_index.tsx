import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import Managers from "~/components/Managers";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const data = getEmployees();
    console.log(data);
  }, []);

  const getEmployees = async () => {
    await fetch('http://localhost:9001/tylerTech-reactCRUD/api/employees', {
      method: "GET"
    }).then(response => {
        return response.json();
    }).then(data => {
      setEmployees(data);
    }).catch((error) => {
			console.log(error);
		});
  }

  const getEmployeesByManager = async (id: number) => {
    await fetch(`http://localhost:9001/tylerTech-reactCRUD/api/${id}/getEmployeesByManager`, {
      method: "GET"
    }).then(response => {
        return response.json();
    }).then(data => {
      console.log(data);
      setEmployees(data);
    }).catch((error) => {
			console.log(error);
		});
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }} className="container">
      <h1 className="center">S-Squared Enterprises</h1>
      <Managers setInputs={null} getEmployeesByManager={getEmployeesByManager} employees={employees} setEmployees={setEmployees} getEmployees={getEmployees} />
      <table className="sse-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee: Array<string> | Array<number>) => (
            <tr key={`employee-${employee?.id}`}>
              <td>{employee?.employee_id}</td>
              <td>{employee?.fname}</td>
              <td>{employee?.lname}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="center">
        <Link to="./add" className="sse-button">Add Employee</Link>
      </p>
    </div>
  );
}
