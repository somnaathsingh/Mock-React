import React from 'react';
import { useSelector } from 'react-redux';


const CurrentUser = () => {
  const user = useSelector(state => state.user.user);


  return (
    <div>
      {user && (
        <div>
         Hello {user.name}
        </div>
      )}
    </div>
  );
};

export default CurrentUser;
