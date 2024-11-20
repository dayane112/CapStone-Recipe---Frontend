import { Link, useNavigate } from 'react-router-dom';
import '../styles/navStyle.css';

export default function NavLogin() {
    const nav = useNavigate();
    
  function handleLogOut(e) {
      nav('/')
  }
    return (
        <>
            <nav className='navLogin'>
                <Link to={'/home'}>Home</Link>
                {' | '}
                <Link to={'/allrecipe'}>All Recipe</Link>
                {' | '}
                <Link to={'/about'}>About</Link>
            </nav>
            <button onClick={handleLogOut} className='login'> LogOut</button>
        </>
    );
}
