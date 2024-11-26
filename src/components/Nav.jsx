import { Link } from 'react-router-dom';
import { useLogin } from '../context/loginContext';
import { useState } from 'react';
import '../styles/navStyle.css';
import SearchBar from './SearchBar';

function NavBar() {
    const { isLogin, login, logout } = useLogin()

    return (
        <>
            <nav className='navLogin'>
                <Link to={'/'}>Home</Link>
                {' | '}
                {isLogin ? (
                    <>
                        <Link to={'/allrecipe'}>All Recipe</Link>
                        {' | '}

                        <SearchBar />
                        {' | '}
                        <Link to={'/about'}>About</Link>
                        <button onClick={logout} className='login'> LogOut</button>
                    </>
                ) : (
                    <>
                        <SearchBar />
                        {' | '}
                        <Link to={'/about'}>About</Link>
                        <button onClick={login} className='login'> Login / SignUp</button>
                    </>
                )}
            </nav>

        </>
    );
}

export default NavBar;  


// const nav = useNavigate();

    //   function handleLogOut(e) {
    //       nav('/')
    //   }