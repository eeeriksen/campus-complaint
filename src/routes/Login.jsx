import { useRef } from 'react'
import './login.css'

// eslint-disable-next-line react/prop-types
function Login({ login, errorLogin }) {

    const usernameRef = useRef()
    const passwordRef = useRef()

    const handleLogin = (e) => {
        e.preventDefault()
        login(usernameRef, passwordRef)
    }

    return (
        <div>
            <h2>TSU CAMPUSCOMPLAINT LOGIN</h2>
            <form>
                <label>Username</label>
                <input ref={usernameRef} type="text" placeholder="Enter Username" />
                <label>Password</label>
                <input ref={passwordRef} type="password" placeholder="Enter Password" />
                <button type='text' onClick={handleLogin}>Login</button>
                <p className={errorLogin ? "error display" : "error"}>wrong password or username</p>
                <p>Do not have an account? <a href="#">Register</a></p>
            </form>
        </div>
    )
}

export default Login