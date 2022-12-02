import Badge from '@mui/material/Badge';
import Avatar from 'boring-avatars';
import React from 'react';

const AvataColor = ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'];

const GameAvatar = ({ uuid, user }) => {
  return (
    <>
      {/* badgeContent 값  */}
      <Badge
        badgeContent={user.value ? '💚' : '...'}
        color="primary"
        sx={{
          margin: '1rem 0',
          '.MuiBadge-badge': {
            height: '2rem',
            width: '2rem',
            borderRadius: '50%',
            backgroundColor: '#222',
          },
        }}
      >
        <Avatar size={56} name={uuid} variant="beam" colors={AvataColor} />
      </Badge>
    </>
  );
};
export default GameAvatar;

