import React, { useState } from 'react';
import './css/login.css';
import { Link } from 'react-router-dom';

function Signup() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const loginGo = (event) => {
    event.preventDefault();

    var dataForSignup = {
      login: login,
      password: password
    }
  
    fetch(`http://127.0.0.1:8000/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataForSignup)

    })
      .then(response => response.json())
      .then(data => {
          window.alert("Cadastro bem sucedido");
          window.location.href = '/Home'
      })
      .catch(error => {
        window.alert("Cadastro mal sucedido");
      });
  }
  return (
    <div className='login'>
      <div className='login_box'>
      <h1>Cadastro</h1>
        <form onSubmit={loginGo}>
          <div>
            <h2>Login</h2>
            <input type='login' value={login} onChange={(e) => { setLogin(e.target.value) }} />
            <h2>Senha</h2>
            <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <button id='login_button' type='submit'>Fazer cadastro</button>
        </form>
        </div>
      </div>
  );
  
}

export default Signup;
