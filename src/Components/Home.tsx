import React, { useContext } from 'react';
import { AuthContext } from '../Auth';
import UserCard from './UserCard';
import Hero from './Hero';
import EventList from './EventList';
import UserList from './UserList';

const Home: React.FC = () => {
  const currentUser = useContext(AuthContext);

  return (
    <div className="container">
      <Hero />
      <div className="columns">
        <div className="column is-one-quarter">
          <UserCard
            user={{
              name: 'John Appleseed',
              id: 'johnapple',
              friends: [
                { name: 'John Appleseed', id: 'johnapple', friends: [] }
              ]
            }}
          />
        </div>
        <div className="column is-half" style={{ background: 'white' }}>
          <EventList />
        </div>
        <div className="column">
          <UserList />
        </div>
      </div>
    </div>
  );
};
export default Home;
