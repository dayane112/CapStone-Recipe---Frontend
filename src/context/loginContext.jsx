import { useState, createContext, useContext, useMemo, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


const LoginContext = createContext();

export default function LoginContextProvider({ children }) {
    const [isLogin, setisLogin] = useState(false);
    const [cookies, setCookies, removeCookies] = useCookies(['isLogin']);
    const nav = useNavigate();


    useEffect(() => {
        if (cookies.isLogin === 'true') {
            setisLogin(true)
        }
    }, [cookies.isLogin])

    function login() {
        setisLogin(true)
        setCookies('isLogin', 'true', { path: '/' })
    };

    function logout() {
        setisLogin(false)
        removeCookies('isLogin', { path: '/' })
        nav('/')
    };

    const value = useMemo(() => ({
        isLogin,
        login,
        logout
    }),
        [isLogin]
    );


    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
};

export function useLogin() {
    return useContext(LoginContext);
};