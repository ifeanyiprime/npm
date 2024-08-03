import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
    const [role, setRole] = useState("dev");
    const showEmployees = true;
    return (
        <div className='App bg-red-300'>
            {console.log("Inside the return")}
            {showEmployees ? (
                <>
                    <input
                        type='text'
                        onChange={(e) => {
                            console.log(e.target.value);
                            setRole(e.target.value);
                        }}
                    />
                    <Employee name='David' role='Intern' />
                    <Employee name='Kelvin' role={role} />
                    <Employee name='Abby' />
                </>
            ) : (
                <p>You cannot see the employees</p>
            )}
        </div>
    );
}

export default App;
