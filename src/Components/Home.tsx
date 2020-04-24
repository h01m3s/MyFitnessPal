import React, { useContext } from 'react';
import { AuthContext } from '../Auth';
import { signOut } from '../API/firebase';

const Home: React.FC = () => {
  const currentUser = useContext(AuthContext);

  return (
    <>
      <h1>Home Page</h1>
      <h2>User: {currentUser ? currentUser.email : ''}</h2>
      <button className="button is-danger" onClick={() => signOut()}>
        Log out
      </button>
    </>
  );
};
export default Home;
