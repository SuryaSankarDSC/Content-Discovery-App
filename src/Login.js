import React, {useState}from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const handleLogin = () => {
      if (username === 'suryasankar321@gmail.com' && password === 'Surya12345678') {
        setIsLoggedIn(true);
        setErrorMessage('');
      } else {
        setIsLoggedIn(false);
        setErrorMessage('Invalid username or password');
      }
    };
    const navigate=useNavigate();
    const signup=()=>{navigate("/signup")}
    return(
        <div class="container">
            <div class="login">
                <form>
                    <h1>Login</h1>
                    <hr/>
                    <br></br>
                    <h2><marquee>HURRAY!! WELCOME</marquee></h2>
                    <div>
                    <label className='text' >Email</label>
                    <input type='mail' placeholder="Enter your Email id" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <label className='text'>Password</label>
                    <input type='Password' placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <p>
                      <a>
                        <button class="sign" onClick={signup} >Not have an account? </button>
                      </a>
                        <a href="#">Forgot Password?</a>
                        </p>
                    <button onClick={handleLogin}>Submit</button>
                    </div>
                    <button class='google'>Continue with Google</button>
                    <button class='google'>Continue with Facebook</button>
                    <button class='google'>Continue with Github</button>
                    
                    {errorMessage &&  (
                        <p className="error-message">{errorMessage}</p>
                    )}
                  </form>
            </div>
        </div>
    );
};
export default Login;