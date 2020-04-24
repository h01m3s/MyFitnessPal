/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

interface Props {
  user: User;
}

interface User {
  name: any;
  picture: any;
}

const UserInfo: React.FC<Props> = ({ user }) => {
  const [followed, setFollowed] = useState(false);
  return (
    <div className="box">
      <div className="media">
        <div className="media-left">
          <div className="image is-48x48">
            <img
              className="is-rounded"
              src={user.picture.thumbnail}
              alt="Placeholder"
            />
          </div>
        </div>
        <div className="media-content">
          <p className="title is-4">{`${user.name.first} ${user.name.last}`}</p>
          <a href="#">@{user.name.first}</a>
          {/* <p className="subtitle is-6">@{user.name.first}</p> */}
        </div>
        <div className="media-content ">
          <button
            // className="button is-info is-pulled-right"
            className={
              `button is-pulled-right ` + (followed ? 'is-danger' : 'is-info')
            }
            onClick={() => setFollowed(!followed)}
          >
            {followed ? 'Unfollow' : 'Follow'}
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserInfo;
