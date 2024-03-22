import React, { useEffect, useState } from 'react'

const Managers = ({ setInputs, getEmployeesByManager, employees, getEmployees }) => {

  const [managers, setManagers] = useState([]);
  
  useEffect(() => {
    getManagers();
  }, []);

  const getManagers = async () => {
    await fetch('http://localhost:9001/tylerTech-reactCRUD/api/managers', {
      method: "GET"
    }).then(response => {
        return response.json();
    }).then(data => {
      console.log(`Managers data -------`);
      console.log(data);
      setManagers(data);
    }).catch((error) => {
			console.log(error);
		});
  }

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    console.log(event.target.value);
    if(!employees) {
      setInputs(values => ({...values, ['manager_id']: event.target.value}));
    } else {
      console.log(employees);
      if (event.target.value !== "0") {
        getEmployeesByManager(event.target.value);
      } else {
        getEmployees();
      }
    }
  }


  if (managers.length === 0) {
    return null;
  }

  return (
    <div style={{padding: '1.5rem 0'}}>
        <select className='sse-select' name={`managers`} onChange={handleChange}>
            <option key={`manager-0`} value="0">{(!employees) ? 'Select a Manager...' : 'All Employees'}</option>
            {managers.map((manager, key) => {
              return (
                <option
                  key={`manager-${key}`}
                  value={`${manager.id}`}
                >
                  {manager.fname} {manager.lname}
                </option>)
            })}
        </select>
    </div>
  )
}

export default Managers



/* 
TODO: add prop-types correctly
Manager PropTypes
getEmployeesByManager
handleFormChange
*/ 