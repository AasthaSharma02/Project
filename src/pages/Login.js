import React, { useState } from 'react';
import LoginForm from './LoginForm';

function Login() {
  const adminUser = {
    email: "admin@admin.com",
    password: "123#456"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in!")
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not match!")
      setError("Details do not match!");
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
  }

  return (
    // <Router>
      <div className="Login">
        {(user.email !== "") ? (
          <div className="welcome">
            <h2>Welcome {user.name}!</h2>
          <button onClick={Logout}>Logout</button> 
          {/*logged in and ready to fill the cart*/}
          
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      </div>
      /* <Routes>
        <Route path='/' element={<App/>} />
      </Routes>
    </Router> */
  );
}

export default Login;
