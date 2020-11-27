import React from "react";
import {Link} from 'react-router-dom';

import './SignUp.scss';

const Login = () => {

    const content = (
        <div class='login__page'>
            <Link to = "./" className="exit"></Link>
            <h1 className="headline headline_login">Log In</h1>
           <div className="login__link"> 
                <span>New to this site?</span>
                <Link to="/sign-up">Log In</Link>
            </div>
            <button className="login__btn login__btn_fb">Log in with Facebook</button>
            <button className="login__btn login__btn_g">Log in with Google</button>
 
            <span className="login__or">or</span>

            <button className="login__btn login__btn_email">Log in with email</button>
        </div>
    );

    return (
        <div className="login">{content}</div>
        
    )
}

export default Login;