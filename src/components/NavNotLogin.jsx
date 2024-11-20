import { Link, useNavigate } from 'react-router-dom';
import '../styles/navStyle.css';

export default function NavNotLogin() {
  const nav = useNavigate();
    
  function handleLogIn(e) {
      nav('/allrecipe')
  }
  
  return (
      <>
      
      <nav className='navNotLogin'>
        <Link to={'/'}>Home</Link>
        {' | '}
        <Link to={'/about'}>About</Link>
      </nav>
      <button onClick={handleLogIn} className='login'> Login / SignUp</button>
      </>
    );
  }
  