import React from 'react';
import logo from '../assets/logo.png';
import { signOut } from '../API/firebase';

interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <div className="hero" style={styles.hero}>
      <div className="level">
        <div className="level-left">
          <img
            src={logo}
            alt="logo"
            style={{ margin: 'auto', display: 'block' }}
          />
        </div>
        <div className="level-right">
          <div className="level-item">
            <button
              className="button is-info"
              onClick={() => console.log('Profile Clicked...')}
            >
              Profile
            </button>
          </div>
          <div className="level-item">
            <button className="button is-danger" onClick={() => signOut()}>
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  hero: {
    background: 'white'
  }
};
export default Hero;
