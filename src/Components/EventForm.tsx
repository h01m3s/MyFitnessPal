import React from 'react';

interface Props {}

// interface Event {
//   title: string;
//   routine: Routine[];
//   location: string;
//   time: string;
//   Participant: User[];
//   user: User;
// }

const EventForm: React.FC<Props> = () => {
  return (
    <div>
      <div className="field">
        <div className="control has-icons-left">
          <input
            type="text"
            className="input"
            placeholder="Title"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <div className="control has-icons-left">
          <input
            type="text"
            className="input"
            placeholder="Routine"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-dumbbell"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <div className="control has-icons-left">
          <input
            type="text"
            className="input"
            placeholder="Location"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-location-arrow"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <div className="control has-icons-left">
          <input
            type="text"
            className="input"
            placeholder="Time"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-calendar-alt"></i>
          </span>
        </div>
      </div>
    </div>
  );
};
export default EventForm;
