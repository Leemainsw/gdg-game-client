import React, { useEffect, useState } from 'react';
import RoomCard from '../components/RoomCard';
import { firestore } from '../firebase/firestore';

export default function Wait() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    firestore.collection('rooms').onSnapshot((d) => {
      if (d.docs) {
        setRooms(d.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
    });
  }, []);

  return (
    <Container>
      <h1>대기방</h1>
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </Container>
  );
}

