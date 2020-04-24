/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

interface Props {
  event: Event;
}

interface Routine {
  name: string;
  description: string;
}

interface User {
  name: string;
}

interface Event {
  title: string;
  routine: Routine[];
  location: string;
  time: string;
  Participant: User[];
  user: User;
}

const EventItem: React.FC<Props> = ({ event }) => {
  const [hideContent, setHideContent] = useState(false);

  return (
    <div className="card" style={{ marginBottom: '12px' }}>
      <header className="card-header">
        <p className="card-header-title">
          <a href="#">{`@${event.user.name}`}</a>
          {`: ${event.title}`}
        </p>
        <a
          href="#"
          className="card-header-icon"
          aria-label="more options"
          onClick={(e) => {
            e.preventDefault();
            setHideContent(!hideContent);
          }}
        >
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div className="card-content" hidden={hideContent}>
        <div className="content">
          <ol>
            {event.routine.map((routine) => {
              return (
                <div key={Math.random()}>
                  <li>{routine.name}</li>
                  {routine.description}
                </div>
              );
            })}
          </ol>
          <div className="location">
            <span className="icon">
              <i className="fas fa-location-arrow" aria-hidden="true"></i>
            </span>
            <a href="#">@{event.location}</a>
            <strong style={{ marginLeft: '4px' }}>{event.time}</strong>
          </div>

          <br />
        </div>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item">
          Join
        </a>
        <a href="#" className="card-footer-item">
          Participant
        </a>
      </footer>
    </div>
  );
};
export default EventItem;
