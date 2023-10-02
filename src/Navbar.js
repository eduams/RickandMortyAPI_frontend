import './css/navbar.css';
import { Link } from 'react-router-dom';
import logo from './img/rickmorty.png'

var logovar = logo;

export default function Navbar(){
    return <nav className="nav">
      <section className='innerNav'>
        <div>
            <img id='logo' src={logovar}/>
        </div>
        <div>
            <ul>
              <li className='links'><Link to="/Home">Home</Link></li>
              <li className='links'><Link to="/Characters" state={{runfetch: true}}>Personagens</Link></li>
              <li className='links'><Link to="/About">Sobre</Link></li>
              <li className='links'><Link to="/Login">Login</Link></li>
            </ul>
        </div>
      </section>
    </nav>
}