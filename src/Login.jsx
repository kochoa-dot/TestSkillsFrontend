import React, {useState} from "react";
import axios from "axios";
export const Login = (props) =>{
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/users/login', {
                usuario: user,
                contrasena: pass
            });if (response.status === 200) {
                console.log(response.data);
            } else {
                console.log(response.data);
            }
        } catch (error) {

            console.error(error);

        }
    };
    return (
        <div className= "auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="user">User</label>
                <input value={user} type="text"  onChange={(e) =>setUser(e.target.value)} placeholder="user" id="user" name="user"/>
                <label htmlFor="password">password</label>
                <input  value={pass} type="password" onChange={(e) =>setPass(e.target.value)}  placeholder="*****" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </div>
    )
}