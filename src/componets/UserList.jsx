import React, { useEffect, useContext } from 'react';
import UserContext from '../context/user/UserContext';

function UserList() {
  const { users, getUsers, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="">
      {users.map((user, key) => (
        <span
          href="#!"
          key={key}
          onClick={() => getProfile(user.id)}
          className="flex items-center px-4 py-2 mb-2 cursor-pointer border-b-4 hover:opacity-90 hover:shadow-inner transform hover:scale-110 transition-all duration-300"
        >
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="rounded-md shadow-md" />
          <p className="pl-4 text-xl font-semibold tracking-wide text-gray-700">{`${user.first_name} ${user.last_name}`}</p>
        </span>
      ))}
    </div>
  );
}

export default UserList;
