import { useNavigate } from "@remix-run/react";
import { useState } from "react";
import Managers from "~/components/Managers";
import Roles from "~/components/Roles";

export default function AddEmployee() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const navigateTo = (path: string) => {
        navigate(path);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event?.target.name;
        const value = event?.target.value;

        setInputs(values => ({ ...values, [name]: value }));

    }

    const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log('submit form');
        console.log(inputs);

        navigateTo('/');

        await fetch('http://localhost:9001/tylerTech-reactCRUD/api/add/employees', {
            method: "POST",
            body: JSON.stringify(inputs),
            headers: {
                'Content-Type': 'application/text'
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(inputs);
                navigateTo('/');

            }).catch((error) => {
                console.log(error);
            });
    }

    const handleCancel = (e) => {
        e.preventDefault();
        navigateTo('/');
    }

    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }} className="container">
            <h1 className="center">Add New Employee</h1>
            <form className="sse-form">
                <Managers setInputs={setInputs} />
                <p>
                    <label>
                        <span>Employee ID:</span>
                        <input type="text" name="employee_id" onChange={handleChange} />
                    </label>
                </p>
                <p>
                    <label>
                        <span>First Name:</span>
                        <input type="text" name="fname" onChange={handleChange} />
                    </label>
                </p>
                <p>
                    <label>
                        <span>Last Name:</span>
                        <input type="text" name="lname" onChange={handleChange} />
                    </label>
                </p>

                <Roles handleChange={handleChange} />

                <p className="flex center">
                    <button className="sse-button" onClick={handleSubmit}>Save</button>
                    <button className="sse-button" onClick={handleCancel}>Cancel</button>
                </p>
            </form>
        </div>
    );
}
