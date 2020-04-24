import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { signOut } from '../API/firebase';
import ProfileForm from './ProfileForm';

interface Props {}

const Hero: React.FC<Props> = () => {
  const [showEventModal, setShowEventModal] = useState(false);

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
              onClick={() => setShowEventModal(true)}
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
      <div className={'modal ' + (showEventModal ? 'is-active' : '')}>
        <div className="modal-background">
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Profile</p>
              <button
                className="delete"
                aria-label="close"
                onClick={() => setShowEventModal(false)}
              ></button>
            </header>
            <section className="modal-card-body">
              <ProfileForm />
            </section>
            <footer className="modal-card-foot">
              <button
                className="button is-success"
                onClick={() => setShowEventModal(false)}
              >
                Save changes
              </button>
              <button
                className="button"
                onClick={() => setShowEventModal(false)}
              >
                Cancel
              </button>
            </footer>
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
