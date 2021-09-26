import React, { createContext } from "react";
import database from '../../database'

const AuthContext = createContext({});

const AuthProvider = (props) => {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [isRegistered, setIsRegistered] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState([]);


    React.useEffect(() => {
        (localStorage.getItem('loggined') === 'true') ? setLoggedIn(true) : setLoggedIn(false)
        // localStorage.getItem('login') ? setLoggedIn(true) : setLoggedIn(false)
    }, [])



    const login = async (user) => {


        try {
            const getUserData = await database.get('users')
            const result = getUserData.data.find((value) => value.login === user.login && value.password === user.password)


            if (result) {


                setCurrentUser(result)
                localStorage.setItem('login', result.login)
                localStorage.setItem('loggined', 'true')
                setIsRegistered(true)
                setLoggedIn(true)

            } else {

                alert('User not found!Sign up or write correct login or password')


            }

        } catch (error) {
            alert('Error! Login Error!')
            console.log(error)
        }


    };

    const logout = async (user) => {

        try {
            const getLoginData = localStorage.getItem('login')

            if (getLoginData) {
                setLoggedIn(false)
                setCurrentUser([])
                localStorage.removeItem('loggined')
                localStorage.removeItem('login')

            } else {

                alert('why here alert???')
                alert('Not Logout!')
            }


        } catch (error) {
            alert('Not Logout!Catch Error!')
            console.log(error)
        }


    };

    const signup = async (user) => {


        try {

            const getUserData = await database.get('users')

            const userSignedUp = getUserData.data.some((value) => value.login === user.login && value.email === user.email)
            console.log(userSignedUp, 'userSignedUp')
            if (userSignedUp) {

                alert('User is registered yet! Use another e-mail or login!')

            } else {

                await database.post('users', user)

                localStorage.setItem('loggined', 'true')
                localStorage.setItem('login', user.login)

                setLoggedIn(true)
                setIsRegistered(true)
                setCurrentUser(user)


            }

        } catch (error) {
            alert('Error! U not SIGN UP!')

            console.log(error)
        }


    };

    const isAdmin = (user) => {

        try {

                if (localStorage.getItem('login') === 'admin') {
                    return true

                } else {
                    alert('not admin')
                    console.log('not admin not admin 123123')

                    return false;
                }

        } catch (error) {

            console.log('isAdmin false')
            console.log(error)
        }

    }


    const authContextValue = {
        signup,

        login,
        loggedIn,
        isRegistered,
        logout,
        isAdmin,
    };


    return <AuthContext.Provider value={authContextValue} {...props} />
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };