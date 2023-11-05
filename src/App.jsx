import './App.css'
import Header from './components/Header.jsx'
import { users } from './database/users.js'
import { useState } from 'react'
import Login from './layouts/login'

function App() {

    const [errorLogin, setErrorLogin] = useState(false)
    const [userAuthenticated, setUserAuthenticated] = useState(false)

    const handleLogin = (usernameRef, passwordRef) => {
        const username = usernameRef.current.value
        const password = passwordRef.current.value

        const user = users.find(user => user.username === username && user.password === password)

        if (user) {
            setErrorLogin(false)
            setUserAuthenticated(true)
        } else {
            setErrorLogin(true)
        }
    }

    return (
        <>
            <Header />
            {
                userAuthenticated
                    ? <h1>Authenticated</h1>
                    : <Login login={handleLogin} errorLogin={errorLogin} />
            }

        </>
    )
}

export default App
