import { useState } from 'react';
import './Login.css';
import { auth } from "../../src/firebase/config";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState(false)
  const navigate = useNavigate()

  async function signIn(e) {
    e.preventDefault();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        if (userCredential) {
          console.log('hola');
          setErrors(false)
          navigate('/')
        }
      }).catch((error) => {
        console.log(error);
        setErrors(true)
      })
  }

  return (
    <div className='sign-in-container'>
      <form onSubmit={signIn}>
        <h1>Log In</h1>
        <input
          type="email"
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Log In</button>
        <p className={error ? "error display" : "error"}>wrong password or username</p>
        <p>Don't have an account? <Link to="/signup">Register</Link></p>
      </form>
    </div>
  )
}

export default SignIn;