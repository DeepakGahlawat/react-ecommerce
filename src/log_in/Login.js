import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./login.module.css"; // Import the CSS module


const Login = ({login, setLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

    useEffect(()=>{
      if(login) navigate('/home')
    }, [login, navigate])

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      // Make a request to your authentication API
     let res= await fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username,
    password
    // expiresInMins: 60, // optional
  })
})

res=await res.json();
console.log((res));
      // const res=response.json();
    
      if (res.id) {
        const { token } =  res;

        // Save the token in localStorage
        localStorage.setItem('token', token);

        // Redirect to the home route using navigate
        setLogin(true);
        console.log(login);
        navigate("/home");
         

        console.log('Login successful!');
      } else {
        // Display an alert for unsuccessful login
        window.alert('Login failed. Please check your credentials.');
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className={styles.container}> {/* Apply styles using the imported module */}
      <h1>Login Form</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div classname={styles.btn}>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;