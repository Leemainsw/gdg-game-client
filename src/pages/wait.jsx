import LinkIcon from '@mui/icons-material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import qs from 'query-string';
import Header from '../components/Header';
import { firestore } from '../firebase/firestore';

const ContainerStyles = {
  width: '100%',
  height: '100vh',
  position: 'fixed',
  zIndex: '10',
};

const TitleStyles = {
  paddingBottom: '3rem',
  textAlign: 'center',
  fontWeight: 'bold',
};

const ButtonStyles = {
  padding: '1rem 0',
  fontSize: '1rem',
  borderRadius: '1rem',
};

export default function Wait() {
  const navigator = useNavigate();
  const [room, setRoom] = useState();
  const searchParams = useLocation().search;

  const isHost = () => {
    return localStorage.getItem('isHost') === 'true';
  };

  useEffect(() => {
    const query = qs.parse(searchParams);
    const roomId = query.roomId;

    firestore
      .collection(`rooms`)
      .doc(roomId)
      .onSnapshot((d) => {
        const tmp = { id: d.id, ...d.data() };
        setRoom(tmp);
        if (tmp && tmp.isStart) {
          navigator(`/game?roomId=${tmp.id}`);
        }
      });
  }, []);

  const copyLink = () => {
    const query = qs.parse(searchParams);
    const roomId = query.roomId;
    const url = process.env.REACT_APP_DEFAULT_URL + `?roomId=${roomId}`;
    navigator.clipboard.writeText(url);
  };

  const startHandler = () => {
    const query = qs.parse(searchParams);
    const roomId = query.roomId;

    firestore.collection(`rooms`).doc(roomId).update({
      isStart: true,
    });
  };

  if (!room) return null;

  return (
    <Container maxWidth="sm" sx={ContainerStyles}>
      <Header />
      <Stack direction="column" justifyContent="space-evenly" sx={{ height: '100vh' }}>
        <Stack spacing={4}>
          <Typography variant="h4" sx={TitleStyles}>
            {room.name}
          </Typography>
          <div>
            <Typography variant="subtitle2">
              현재 입장 인원 : {`${room.users.length || 0} / ${room.peopleCount}`}명
            </Typography>
            <Box height="5rem" />
          </div>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="subtitle2">친구와 함께 하기</Typography>
            <Button startIcon={<LinkIcon />} onClick={copyLink}>
              링크 복사하기
            </Button>
          </Stack>
        </Stack>
        {/* 방장은 시작, 유저들 준비하기, 대기 중 */}
        {isHost() ? (
          <Button variant="contained" fullWidth sx={ButtonStyles} onClick={startHandler}>
            시작하기
          </Button>
        ) : (
          <Button variant="contained" fullWidth sx={ButtonStyles} disabled>
            대기중입니다
          </Button>
        )}
      </Stack>
    </Container>
  );
}

