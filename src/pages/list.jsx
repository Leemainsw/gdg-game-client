import AddIcon from '@mui/icons-material/Add';
import { Container, Fab } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RoomCard from '../components/RoomCard';
import { readCollection } from '../firebase';

export default function List() {
  const [rooms, setRooms] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    readCollection(`rooms`).subscribe((datas) => {
      setRooms(datas);
    });
  }, []);

  const goCreate = () => {
    navigator('/create');
  };

  return (
    <Container>
      <h1>✌️👊🖐 게임방 리스트</h1>
      {rooms && rooms.map((room) => <RoomCard key={room.id} room={room} />)}
      <Fab
        color="primary"
        aria-label="add"
        style={{ position: 'fixed', right: '1rem', bottom: '2rem' }}
        onClick={goCreate}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}

