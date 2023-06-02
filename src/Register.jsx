import React, {useState} from "react";
export const Register = (props) =>{
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(user)
    }

    return (
        <div className= "auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="user">User</label>
                <input value={user} type="text"  onChange={(e) =>setUser(e.target.value)} placeholder="user" id="user" name="user"/>
                <label htmlFor="password">password</label>
                <input  value={pass} type="password" onChange={(e) =>setPass(e.target.value)}  placeholder="*****" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an account? Log in here</button>
        </div>
    )
}