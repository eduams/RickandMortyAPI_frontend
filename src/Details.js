import React, { useState, useEffect } from 'react';
import './css/details.css';
import { useLocation } from 'react-router-dom';


function Details() {
  const location = useLocation();
  const data = location.state.array[location.state.character];
  console.log(data)

  useEffect(() => {    
    var avatar = document.getElementById('avatar');
    avatar.setAttribute('src', data.image)    
  });

    return (
    <div className='details'>
      <h1 className='boxDetails'>
      <img id='avatar' src=''></img>
      <div>
        <ul>
          <li>Nome: {data.name}</li>
          <li>Espécie: {data.species}</li>
          <li>Gênero: {data.gender}</li>
          <li>Localização: {data.location.name}</li>
          <li>Imagem: {data.image}</li>
          <li>Url: {data.url}</li>
        </ul>
      </div>
      </h1>
    </div>
  );

}

export default Details;
