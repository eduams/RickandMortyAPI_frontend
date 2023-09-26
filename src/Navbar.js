import './css/navbar.css';
import { Link } from 'react-router-dom';
export default function Navbar(){
    return <nav className="nav">
      <section className='innerNav'>
        <div>
            <img src="null"></img>
        </div>
        <div>
            <ul>
              <li className='links'><Link to="/Home">Home</Link></li>
              <li className='links'><Link to="/Characters">Personagens</Link></li>
              <li className='links'><Link to="/About">Sobre</Link></li>
              <li className='links'><Link to="/Login">Login</Link></li>
            </ul>
        </div>
      </section>
    </nav>
}