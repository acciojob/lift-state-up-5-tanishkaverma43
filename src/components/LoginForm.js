
import React from 'react';
import "./../styles/App.css";
const LoginForm = ({ isLoggedIn, setLoggedIn }) => {
  

    return (
      <>
      {idLoggedIn ? (
        <p className="logged-in-heading">Yor Are Logged in!</p>
        ) : (
        <div className="Form-container">
      <form className="login-form">
        <input type="text" placeholder="Name" className="form-input"/>
        <input type="password" placeholder="Password" className="form-input"/>
        <button onClick={() =>  setLoggedIn(true)} className="form-button">
      Login
      </button>
      </form>
      </div>
  )}
  </>
    );
};

export default LoginForm;
