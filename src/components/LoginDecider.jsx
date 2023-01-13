import React, {useState} from 'react';
import Login from './Login';
import Signup from './Signup';

function LoginDecider(){
    const [currentForm, setCurrentForm] = useState("Login");
    

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return(
        <div>
            {currentForm === "Login" ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />}
        </div>
    )
}

export default LoginDecider;