import React, { useContext } from 'react';
import UserContext from '../context/user/UserContext';

function Profile() {
  const { selectedUser } = useContext(UserContext);
  return (
    <div className="w-full h-100 flex flex-col justify-center items-center">
      {selectedUser ? (
        <>
          <img
            src={selectedUser.avatar}
            alt={`${selectedUser.first_name} ${selectedUser.last_name}`}
            className="w-48 rounded-full shadow-2xl m-4 "
          />
          <h1 className="text-gray-700 text-5xl font-bold tracking-wider">{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
        </>
      ) : (<h1 className="text-gray-700 text-5xl font-bold tracking-wider">No user selected</h1>)}
    </div>
  );
}

export default Profile;
