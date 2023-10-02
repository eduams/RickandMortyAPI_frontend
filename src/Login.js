import React, { useState } from 'react';
import './css/login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const loginGo = (event) => {
    event.preventDefault();
    console.log(login);
    console.log(password);

    var dataForLogin = {
      login: login,
      password: password
    }
  
    fetch(`http://127.0.0.1:8000/api/autentication`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataForLogin)

    })
      .then(response => response.json())
      .then(data => {
        if (data == true){
          window.alert("Autenticação bem sucedida");
          localStorage.setItem('auth',true);
          window.location.href = '/Login'
        }
        else{
          window.alert("Autenticação falhou");
        }
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }
  if(!localStorage.getItem('auth')){
  return (
    <div className='login'>
      <div className='login_box'>
        <form onSubmit={loginGo}>
          <div>
            <h2>Login</h2>
            <input type='login' value={login} onChange={(e) => { setLogin(e.target.value) }} />
            <h2>Senha</h2>
            <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <button id='login_button' type='submit'>Login</button>
        </form>
        <Link to="/Signup">Cadastrar</Link>
        </div>
      </div>
  );}
  else{
    return (
    <div className='login'>
      <div className='login_box'>
        <h1>Você já está logado!</h1>
      </div>
    </div>
    )
  }
  
}

export default Login;
