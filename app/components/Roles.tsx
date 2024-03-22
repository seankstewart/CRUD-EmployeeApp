import React, { useEffect, useState } from 'react'

function Roles({ handleChange }) {

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const data = getRoles();
    console.log(data)
    // setEmployees(data);
  }, []);

  const getRoles = async () => {
    await fetch('http://localhost:9001/tylerTech-reactCRUD/api/roles', {
      method: "GET"
    }).then(response => {
        return response.json();
    }).then(data => {
      console.log(data);
      setRoles(data);
    }).catch((error) => {
			console.log(error);
		});
  }

  return (
    <p className='see-checkbox-container'>
      <span>Roles:</span>
      
      {roles.map((role, key) => (
        <label key={`rol-${key}`} style={{display: 'grid', gridTemplateColumns: '3rem 1fr'}}>
            <input type="checkbox" name={`role${role.role_id}`} value={role.role_id} onChange={handleChange} /><span>{role.role_name}</span>
        </label>
      ))}
    </p>
  )
}

export default Roles