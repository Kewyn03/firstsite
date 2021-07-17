import React, { createContext, useState, useEffect } from "react";
import database from '../../database'

const AuthContext = createContext({});

const AuthProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        // Pull saved login state from localStorage / AsyncStorage
    }, []);

    const login = () => {
       setLoggedIn(true)
    };

    const logout = () => {
        setLoggedIn(false)
    };

    const signin = () => {
        setLoggedIn(false)
    };


    const isAdmin = (data) => {
        async function getData()  {
            await database.get('login', data)
            if (data.login === 'admin' && data.password === 'admin') {
                return true;
            } else {
                console.log('not admin')
            }
        }
        getData()
    };



    const authContextValue = {
        login,
        loggedIn,
        logout,
        signin,
        isAdmin,
    };


    return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };