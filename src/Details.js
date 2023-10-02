import React, { useState, useEffect } from 'react';
import './css/details.css';
import { useLocation } from 'react-router-dom';

function Details() {

  const location = useLocation();
  var characterDatabasePosition = location.state.character;
  const data = location.state.array[characterDatabasePosition];
  const hideButton = location.state.hideButton;

  const date = new Date();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  //variável separada para nome, que será editável
  var nameEditable = data.name;

  useEffect(() => {    
    var avatar = document.getElementById('avatar');
    avatar.setAttribute('src', data.image);
    var bt = document.getElementById('bt');
    var bt2 = document.getElementById('bt2');
    var editNameBt = document.getElementById('editNameBt');

    if(hideButton==true){
      bt.style.display = 'none';      
    }
    else{
      editNameBt.style.display = 'none';
      bt2.style.display = 'none';      
    }
  });

  var localizacao;

  if(!data.location.name){
    localizacao = data.location;
  }
  else{
    localizacao = data.location.name;
  }
  //json
  var dataForDatabase = {
    name: nameEditable,
    species: data.species,
    image: data.image,
    url: data.url,
    created_at: data.created,
    updated_at: formattedDate,
    gender: data.gender,
    location: localizacao
  };
  var dataForDelete = {
    url: data.url
  }
  var dataForEdit = {
    url: data.url,
    name: nameEditable
  }

  function editName(){
    let newName = prompt("Digite o novo nome", "test");
    if (newName !== null) {
    dataForEdit.name = newName;
    editDatabase();
    }
  }
  
  //Função POST para editar a database
  function editDatabase(){
    fetch('http://127.0.0.1:8000/api/editar-dados', {
      method: 'POST', 
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataForEdit)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Erro:', error);
    });
    window.alert("Personagem editado com sucesso");
    window.location.href = '/Characters'
  }

  //Função POST
  function savetoDatabase(){
    if(!localStorage.getItem("auth")){
      window.location.href = '/Login'
    }
      else{
      fetch('http://127.0.0.1:8000/api/salvar-dados', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataForDatabase)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
      window.alert("Personagem salvo com sucesso");
      window.location.href = '/Home'
      }
  }

  //Função POST para deletar da database
  function deletefromDatabase(){
    if(!localStorage.getItem("auth")){
      window.location.href = '/Login'
    }
    else{
      fetch('http://127.0.0.1:8000/api/remover-dados', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataForDelete)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
      window.alert("Personagem apagado com sucesso");
      window.location.href = '/Characters'
   }
  }

    return (
    <div className='details'>
      <h1 className='boxDetails'>
      <img id='avatar' src=''></img>
      <div>
        <ul>
          <li><div className='edit'>Nome: {data.name} <button onClick={editName} id='editNameBt'>Editar</button></div></li>
          <li>Espécie: {data.species}</li>
          <li>Gênero: {data.gender}</li>
          <li>Localização: {localizacao}</li>
          <li>Imagem: {data.image}</li>
          <li>Url: {data.url}</li>
        </ul>
        <button onClick={savetoDatabase} id='bt'><h2>Salvar no banco</h2></button>
        <button onClick={deletefromDatabase} id='bt2'><h2>Deletar personagem</h2></button>
      </div>
      </h1>
    </div>
  );

}

export default Details;
