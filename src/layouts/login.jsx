import './login.css'

function Login() {
    return (
        <div>
            <h2>TSU CAMPUSCOMPLAINT LOGIN</h2>
            <form>
                <label>Username</label>
                <input type="text" placeholder="Enter Username" />
                <label>Password</label>
                <input type="password" placeholder="Enter Password" />
                <button type="submit">Login</button>
                <p>Do not have an account? <a href="#">Register</a></p>
            </form>
        </div>
    )
}

export default Login