import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import GameAvatar from '../components/GameAvatar';
import Header from '../components/Header';

import { updateDoc } from 'firebase/firestore';
import qs from 'query-string';
import { readDoc } from '../firebase';

const ContainerStyles = {
  width: '100%',
  height: '100vh',
  position: 'fixed',
  zIndex: '10',
};

const TitleStyles = {
  textAlign: 'center',
  fontWeight: 'bold',
};

export default function Game() {
  const navigator = useNavigate();
  const [room, setRoom] = useState();
  const searchParams = useLocation().search;
  const [myValue, setMyValue] = useState(null);
  const myId = localStorage.getItem('uid');

  const isHost = () => localStorage.getItem('isHost') === 'true';

  useEffect(() => {
    const query = qs.parse(searchParams);
    const { roomId } = query;

    readDoc(`rooms/${roomId}`).subscribe((data) => {
      setRoom(data);
    });
  }, [searchParams]);

  const isAllChecked = () => {
    return room.users.some((ele) => ele.value == null);
  };

  const onClickHandler = (type) => {
    setMyValue(type);
    const uid = localStorage.getItem('uid');
    const userIndex = room.users.findIndex((ele) => ele.uid === uid);
    const tmp = room.users.slice();
    tmp[userIndex].value = type;
    updateDoc(`rooms/${room.id}`, {
      users: tmp,
    });
  };

  const getResult = () => {
    const values = room.users.map((ele) => ele.value);
    const setValues = new Set(values);
    if (setValues.size !== 2) return '비겼습니다.';
    if (!setValues.has('P')) {
      if (myValue === 'R') {
        return '이겼습니다.';
      }
      return '졌습니다.';
    }
    if (!setValues.has('R')) {
      if (myValue === 'S') {
        return '이겼습니다.';
      }
      return '졌습니다.';
    }
    if (!setValues.has('S')) {
      if (myValue === 'P') {
        return '이겼습니다.';
      }
      return '졌습니다.';
    }
  };

  if (!room) return null;
  return (
    <>
      <Container maxWidth="sm" sx={ContainerStyles}>
        <Header />
        <Stack direction="column" justifyContent="space-evenly" sx={{ height: '100vh' }}>
          <Typography variant="h4" sx={TitleStyles}>
            {room.name}
          </Typography>
          {/* ✅ 🤔 아바타 아이콘에 쓰면 좋을만한 아이콘? */}
          <Grid container spacing={3} columns={4}>
            {room.users.map(
              (user, index) =>
                user.uid !== myId && (
                  <Grid xs={2} key={index} sx={{ display: 'flex', justifyContent: 'center' }} item>
                    <GameAvatar uuid={user.uid} user={user} />
                  </Grid>
                )
            )}
          </Grid>
          <Stack direction="row" justifyContent="space-around" alignItems="center" spacing={3}>
            {!myValue ? (
              <>
                <Button
                  sx={{ fontSize: '3rem', padding: '0 2rem' }}
                  onClick={() => onClickHandler('S')}
                >
                  ✌️
                </Button>
                <Button
                  sx={{ fontSize: '3rem', padding: '0 2rem' }}
                  onClick={() => onClickHandler('R')}
                >
                  ✊
                </Button>
                <Button
                  sx={{ fontSize: '3rem', padding: '0 2rem' }}
                  onClick={() => onClickHandler('P')}
                >
                  🖐️
                </Button>
              </>
            ) : isAllChecked() ? (
              <>
                <Typography variant="body1" sx={TitleStyles}>
                  다른 유저들을 기다리는 중...
                </Typography>
              </>
            ) : (
              <>
                <h1>{getResult()}</h1>
              </>
            )}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

