import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router';
import { createUser, signIn } from '../API/firebase';
import { AuthContext } from '../Auth';
import logo from '../assets/logo.png';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const currentUser = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  console.log(`current user from context: ${JSON.stringify(currentUser)}`);

  const isValidEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleCreateUser = () => {
    createUser(email, password);
  };

  const handleSignIn = () => {
    signIn(email, password);
  };

  return (
    <div id="loginView" style={styles.loginView}>
      <div id="leftView" style={styles.leftView}>
        {/* Title */}
        {/* <h1 className="title has-text-centered" style={styles.title}> */}
        {/* My Fitness Pal
        </h1> */}
        <img
          src={logo}
          alt="logo"
          style={{ margin: '34px auto', display: 'block' }}
        />
        {/* Form fields */}
        <div id="loginForm" style={styles.loginForm}>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input
                type="email"
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input
                type="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-key"></i>
              </span>
            </div>
          </div>
          {/* bottom button */}
          <button
            className="button is-info is-fullwidth"
            onClick={handleSignIn}
            disabled={!isValidEmail() || password.length < 6}
          >
            Login
          </button>
          <div className="level" style={{ marginTop: '12px' }}>
            <div className="level-left">
              <button
                className="button is-text"
                style={{ padding: 0 }}
                onClick={handleCreateUser}
              >
                Register
              </button>
            </div>
            <div className="level-right">
              {/* TODO: Add handler */}
              <button className="button is-text" style={{ padding: 0 }}>
                Forgot Password?
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="rightView" style={styles.rightView}>
        <img
          src="https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt="loginimage"
          style={styles.rightImage}
        />
      </div>
    </div>
  );
};

const styles = {
  title: {
    marginTop: '34px'
  },
  loginView: {
    height: '100vh',
    width: '100vw',
    display: 'flex'
  },
  leftView: {
    background: 'white',
    width: '50%'
  },
  loginForm: {
    margin: '140px auto 24px auto',
    width: '300px'
  },
  rightView: {
    // background: 'red',
    width: '50%'
  },
  rightImage: {
    width: '100%',
    height: '100%'
  }
};

export default LoginPage;
