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

for (let x = 1; x <= 3; x++) {
    fetch(`https://rickandmortyapi.com/api/character/${chars[x - 1]}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        charObj[x - 1] = data;
        charId[x-1] = data.id;
        var img = document.getElementById('img' + x);
        img.setAttribute("src", data.image);
      })
      .catch(error => {
      });
}

  return (
    <div className='home'>
      <div className='box'>
        <img src={charimg1} id='img1'>
        </img>
          <Link to="/Details" state={{character: 0, array: charObj, hideButton: false}}><button><h2>
            Detalhes</h2> </button></Link>
      </div>

      <div className='box'>
        <img src={charimg2} id='img2'>
        </img>
          <Link to="/Details" state={{character: 1, array: charObj, hideButton: false}}><button><h2>
            Detalhes</h2> </button></Link>
      </div>

      <div className='box'>
        <img src={charimg3} id='img3'>
        </img>
          <Link to="/Details" state={{character: 2, array: charObj, hideButton: false}}><button>
          <h2>Detalhes</h2></button></Link>  
      </div>
    </div>

    
  );
}

export default Home;
