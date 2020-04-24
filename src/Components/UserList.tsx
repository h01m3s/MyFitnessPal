import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import SearchBar from './SearchBar';
import axios from 'axios';

interface Props {}

interface User {
  name: any;
  picture: any;
}

const UserList: React.FC<Props> = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getFakeUser = async () => {
    const res = await axios.get(
      'https://randomuser.me/api/?inc=name,picture,id'
    );
    return res.data.results[0];
  };

  useEffect(() => {
    (async (num: number) => {
      const newUsers = [];
      for (let i = 0; i < num; i++) {
        const fakeUser = await getFakeUser();
        newUsers.push(fakeUser);
      }
      await setUsers(newUsers);
    })(8);
  }, []);

  return (
    <>
      <h1 className="subtitle">Users:</h1>
      <SearchBar />
      <div style={styles.userList}>
        {users.map((user) => (
          <UserInfo key={Math.random()} user={user} />
        ))}
      </div>
    </>
  );
};

const styles = {
  userList: {
    marginTop: '24px'
  }
};

export default UserList;
