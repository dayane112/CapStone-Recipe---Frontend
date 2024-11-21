import React, { useState, createContext, useContext, useMemo, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const LoginContext = createContext();

export default function LoginContextProvider({ children }) {
    const [islogin, setIsLogin] = useState(false);
    const [cookies, setCookies, removeCookies] = useCookies(['islogin']);

    useEffect(() => {
        if (cookies.islogin === 'true') {
            setIsLogin(true)
        }
    }, [cookies.islogin])

    function login() {
        setIsLogin(true)
        setCookies('islogin', 'true', { path: '/' })
    };

    function logOut() {
        setIsLogin(false)
        removeCookies('islogin', { path: '/' })
    };

    const value = useMemo(() => ({
        islogin,
        login,
        logOut
    }),
        [islogin]
    );


    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
};

export function useLogin() {
    return useContext(LoginContext);
};