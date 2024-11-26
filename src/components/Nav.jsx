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
                {/* <Link to={'/'}>Home</Link>
                {' | '} */}
                {isLogin ? (
                    <>
                        <div className='navContent'>
                            <Link to={'/'}>Home</Link> {/* Home link */}
                            {' | '}
                            <Link to={'/allrecipe'}>Recipe</Link>
                            {' | '}
                            <Link to={'/about'}>About</Link>
                            {' | '}

                            <div className='searchAndLogo'>
                                <span className='searchBar'>
                                    <SearchBar />
                                </span>
                                <img width="98" height="68" src="https://i.imgur.com/vmRvYF1.png" alt="Logo" />
                            </div>
                        </div>
                        <button onClick={logout} className='login'> LogOut</button>
                    </>
                ) : (
                    <>


                        <div className='navContent'>
                            <Link to={'/'}>Home</Link> {/* Home link */}
                            {' | '}
                            <Link to={'/about'}>About</Link>
                            {' | '}

                            <div className='searchAndLogo'>
                                <span className='searchBar'>
                                    <SearchBar />
                                </span>
                                <img width="98" height="68" src="https://i.imgur.com/vmRvYF1.png" alt="Logo" />
                            </div>
                        </div>
                        <br />

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