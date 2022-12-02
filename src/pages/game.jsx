import { Button } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase/firestore';

export default function Game() {
  const [room, setRoom] = useState();

  useEffect(() => {
    const roomId = 'vtzcZRnFKNyiGMMgrtOn';
    firestore
      .collection('rooms')
      .doc(roomId)
      .onSnapshot((d) => {
        setRoom({ id: d.id, ...d.data() });
      });
  }, []);

  return (
    <Container>
      <Box style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Button style={{ width: '33%', fontSize: '35px' }}>✊</Button>
        <Button style={{ width: '33%', fontSize: '35px' }}>✌️</Button>
        <Button style={{ width: '33%', fontSize: '35px' }}>🖐</Button>
      </Box>
    </Container>
  );
}

