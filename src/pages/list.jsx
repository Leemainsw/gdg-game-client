import AddIcon from '@mui/icons-material/Add';
import { Container, Fab } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RoomCard from '../components/RoomCard';
import { firestore } from '../firebase/firestore';

export default function List() {
  const [rooms, setRooms] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    firestore.collection('rooms').onSnapshot((d) => {
      if (d.docs) {
        setRooms(d.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
    });
  }, []);

  const goCreate = () => {
    navigator('/create');
  };

  return (
    <Container>
      <h1>게임 방 리스트</h1>
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
      <Fab
        color="primary"
        aria-label="add"
        style={{ position: 'absolute', right: '10px', bottom: '10px' }}
        onClick={goCreate}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}

