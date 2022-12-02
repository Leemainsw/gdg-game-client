import React from 'react';
import GameAvatar from '../components/GameAvatar';
import { Container, Grid, Stack, Button, Typography } from '@mui/material';

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
  return (
    <>
      <Container maxWidth="sm" sx={ContainerStyles}>
        <Stack direction="column" justifyContent="space-evenly" sx={{ height: '100vh' }}>
          <Typography variant="h4" sx={TitleStyles}>
            방 제목
          </Typography>
          {/* ✅ 🤔 아바타 아이콘에 쓰면 좋을만한 아이콘? */}
          <Grid container spacing={3} columns={4}>
            {Array.from(Array(6)).map((_, index) => (
              <Grid xs={2} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                <GameAvatar uuid={index} />
              </Grid>
            ))}
          </Grid>
          <Typography variant="body1" sx={TitleStyles}>
            [게임 상태] n / n 남았습니다.
          </Typography>
          <Stack direction="row" justifyContent="space-around" alignItems="center" spacing={3}>
            {false ? (
              <>
                <Button sx={{ fontSize: '3rem', padding: '0 2rem' }}>✌️</Button>
                <Button sx={{ fontSize: '3rem', padding: '0 2rem' }}>✊</Button>
                <Button sx={{ fontSize: '3rem', padding: '0 2rem' }}>🖐️</Button>
              </>
            ) : (
              <>
                <Typography variant="body1" sx={TitleStyles}>
                  다른 유저들을 기다리는 중...
                </Typography>
              </>
            )}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

