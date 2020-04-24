import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import './CSS/styles.css';
import { AuthProvider } from './Auth';
import Home from './Components/Home';
import PrivateRoute from './PrivateRoute';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/login" exact component={LoginPage} />
      </Router>
    </AuthProvider>
  );
};

export default App;
