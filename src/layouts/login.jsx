import { useRef } from 'react'
import './login.css'

function Login() {

    const usernameRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = () => {
    }

    return (
        <div>
            <h2>TSU CAMPUSCOMPLAINT LOGIN</h2>
            <form>
                <label>Username</label>
                <input ref={usernameRef} type="text" placeholder="Enter Username" />
                <label>Password</label>
                <input ref={passwordRef} type="password" placeholder="Enter Password" />
                <button onClick={handleSubmit}>Login</button>
                <p>Do not have an account? <a href="#">Register</a></p>
            </form>
        </div>
    )
}

export default Login