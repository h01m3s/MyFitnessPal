import React from 'react';

interface Props {}

const ProfileForm: React.FC<Props> = () => {
  return (
    <div>
      <div className="field">
        <div className="control has-icons-left">
          <input
            type="text"
            className="input"
            placeholder="Name"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <div className="control has-icons-left">
          <input
            type="text"
            className="input"
            placeholder="Bio"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-book"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <div className="control has-icons-left">
          <input
            type="email"
            className="input"
            placeholder="Email"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <div className="control has-icons-left">
          <input
            type="password"
            className="input"
            placeholder="Password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-key"></i>
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProfileForm;
