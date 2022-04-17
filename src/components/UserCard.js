import React from 'react';
import { useParams } from 'react-router-dom';

const UserCard = (props) => {
    const params = useParams();
    const username = params.username;
  return (
    <div
      className='ui raised very padded text container segment'
      style={{ marginTop: '80px' }}
    >
      <h3 className='ui header'>{username}</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        reiciendis temporibus dolorum odit rem consequatur consequuntur quaerat
        facere deleniti, natus, dolore eius iusto adipisci, modi repudiandae
        maxime illo ipsa. Labore?
      </p>
    </div>
  );
};

export default UserCard;
