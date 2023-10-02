import React, { useState, useEffect } from 'react';
import './css/home.css';
import { Link } from 'react-router-dom';
import placeholder from './img/placeholder.png'
import { useLocation } from 'react-router-dom';

const allBox = document.getElementById("characters");

var charimg1 = placeholder;
var charimg2 = placeholder;
var charimg3 = placeholder;


function Characters() {
  const [charObj, setcharObj]   = useState([]);

  useEffect(()=>{
  fetch(`http://127.0.0.1:8000/api/dados`, {
    method: 'GET'})
    .then(response => response.json())
    .then(data => {
      for (let x = 0; x <= 29; x++) {
      charObj[x] = data[x];
      const json = data[x];
    }
    })
    .catch(error => {
      });

    fetch(`http://127.0.0.1:8000/api/dados`, {
      method: 'GET'})
      .then(response => response.json())
      .then(data => {
        for (let x = 0; x <= 2; x++) {
          var img = document.getElementById('img'+x);
          img.setAttribute("src", data[x].image);
        }
      })
      .catch(error => {
      });
 }, [])

  const [charNoOne, setcharNoOne]   = useState(0);
  const [charNoTwo, setcharNoTwo]   = useState(1);
  const [charNoThree, setcharNoThree]   = useState(2);

  function updt (pageNo){
    setcharNoOne(pageNo*3);
    setcharNoTwo(1+pageNo*3);
    setcharNoThree(2+pageNo*3);

    fetch(`http://127.0.0.1:8000/api/dados`, {
      method: 'GET'})
      .then(response => response.json())
      .then(data => {
        var count;
        for (let x = 0 + (pageNo*3); x <= 2 + (pageNo*3); x++) {
          count ++;
          var img = document.getElementById('img'+[x-pageNo*3] );
          var btn = document.getElementById('bt'+[(x-pageNo*3)+1] );
          btn.style.display = '';
          try{
            img.setAttribute("src", data[x].image);
          }
          catch{
            var btn = document.getElementById('bt'+[(x-pageNo*3)+1] );
            btn.style.display = 'none';
            img.setAttribute("src", placeholder);
          }
        }
        })
      .catch(error => {
          console.error('Erro:', error);
    });
  }

  return (
    <div id='characters'>
      <div className='box'>
        <img src={charimg1} id='img0'>
        </img>
        
          <Link to="/Details" state={{character: charNoOne, array: charObj, hideButton: true}}>
          <button id='bt1'><h2 >
            Detalhes</h2></button></Link>
        
      </div>
      <div className='box'>
        <img src={charimg2} id='img1'>
        </img>
          <Link to="/Details" state={{character: charNoTwo, array: charObj, hideButton: true}}>
          <button id='bt2'> <h2>
            Detalhes</h2></button></Link>

      </div>
      <div className='box'>
        <img src={charimg3} id='img2'>
        </img>
          <Link to="/Details" state={{character: charNoThree, array: charObj, hideButton: true}}>
          <button id='bt3'><h2>
            Detalhes</h2></button></Link>
      </div>
      <div id='pages'>
        <ul className='pageno'>
          <li>Páginas:</li>
          <li><Link onClick={() => updt(0)}>1</Link></li>
          <li><Link onClick={() => updt(1)}>2</Link></li>
          <li><Link onClick={() => updt(2)}>3</Link></li>
          <li><Link onClick={() => updt(3)}>4</Link></li>
          <li><Link onClick={() => updt(4)}>5</Link></li>
          <li><Link onClick={() => updt(5)}>6</Link></li>
          <li><Link onClick={() => updt(6)}>7</Link></li>
          <li><Link onClick={() => updt(7)}>8</Link></li>
          <li><Link onClick={() => updt(8)}>9</Link></li>
        </ul>
      </div>
    </div>
    
  );
}
export default Characters;