import React, { useState, useEffect } from 'react';
import './css/home.css';
import placeholder from './img/placeholder.png'
import { Link } from 'react-router-dom';

var chars=[];

var charimg1 = placeholder;
var charimg2 = placeholder;
var charimg3 = placeholder;

function Random_no(){
  chars[0] = Math.floor(Math.random() * 826);
  chars[1] = Math.floor(Math.random() * 826);
  chars[2] = Math.floor(Math.random() * 826);
}

Random_no();

function Home() {

var charId = [];

var charObj = [];

for (var x = 1; x <= 3; x++) {
  (function (x) { //IIFE
    fetch(`https://rickandmortyapi.com/api/character/${chars[x - 1]}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        charObj[x - 1] = data;
        console.log(charObj[x])
        charId[x-1] = data.id;
        var img = document.getElementById('img' + x);
        img.setAttribute("src", data.image);
        console.log(charId[x-1])
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  })(x);
}

  return (
    <div className='home'>
      <div className='box'>
        <img src={charimg1} id='img1'>
        </img>
        <button>
          <h2><Link to="/Details" state={{character: 0, array: charObj}}>
            Detalhes</Link></h2>
        </button>
      </div>

      <div className='box'>
        <img src={charimg2} id='img2'>
        </img>
        <button>
          <h2><Link to="/Details" state={{character: 1, array: charObj}}>
            Detalhes</Link></h2>
        </button>
      </div>

      <div className='box'>
        <img src={charimg3} id='img3'>
        </img>
        <button>
          <h2><Link to="/Details" state={{character: 2, array: charObj}}>
            Detalhes</Link></h2>        
        </button>
      </div>
    </div>

    
  );
}

export default Home;
