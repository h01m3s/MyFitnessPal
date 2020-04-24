/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import EventForm from './EventForm';

interface Props {
  user: User;
}

interface User {
  name: string;
  id: string;
  friends: User[];
}

const UserCard: React.FC<Props> = ({ user }) => {
  const [showEventModal, setShowEventModal] = useState(false);

  return (
    <div className="card">
      {/* Background Image */}
      {/* <div className="card-image">
        <div className="image is-4by3">
          <img
            src="https://images.unsplash.com/photo-1468971050039-be99497410af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1780&q=80"
            alt="Placeholder"
          />
        </div>
      </div> */}

      {/* Profile */}
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <div className="image is-64x64">
              <img
                className="is-rounded"
                src="https://randomuser.me/api/portraits/men/78.jpg"
                alt="Placeholder"
              />
            </div>
          </div>
          <div className="media-content">
            <p className="title is-4">{user.name}</p>
            <p className="subtitle is-6">@{user.id}</p>
          </div>
        </div>

        <div className="content">
          <strong>Bio: </strong>
          Just like in bodybuilding, failure is also a necessary experience for
          growth in our own lives, for if we’re never tested to our limits, how
          will we know how strong we really are? How will we ever grow?{' '}
          <a href="#">#ChestManiac</a> <a href="#">#NoLimit</a>
          <br />
        </div>

        <div className="content">
          <div className="level">
            <div className="level-left">
              <strong style={{ marginRight: '4px' }}>13</strong>
              <button
                className="button is-text is-paddingless"
                onClick={() => console.log('Friends Clicked...')}
              >
                Friends
              </button>
            </div>
            |
            <div className="level-right">
              <button
                className="button is-text is-paddingless"
                onClick={() => setShowEventModal(true)}
              >
                New Event
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={'modal ' + (showEventModal ? 'is-active' : '')}>
        <div className="modal-background">
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">New Event</p>
              <button
                className="delete"
                aria-label="close"
                onClick={() => setShowEventModal(false)}
              ></button>
            </header>
            <section className="modal-card-body">
              <EventForm />
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
export default UserCard;
