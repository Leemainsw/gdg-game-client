import React from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import LinkIcon from '@mui/icons-material/Link';

import Header from '../components/Header';

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
  return (
    <Container maxWidth="sm" sx={ContainerStyles}>
      <Header />
      <Stack direction="column" justifyContent="space-evenly" sx={{ height: '100vh' }}>
        <Stack spacing={4}>
          <Typography variant="h4" sx={TitleStyles}>
            [방 이름]
          </Typography>
          <div>
            <Typography variant="subtitle2">현재 입장 인원 : n / n명</Typography>
            <Box height="5rem" />
          </div>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="subtitle2">친구와 함께 하기</Typography>
            <Button startIcon={<LinkIcon />}>링크 복사하기</Button>
          </Stack>
        </Stack>
        {/* 방장은 시작, 유저들 준비하기, 대기 중 */}
        {true ? (
          <Button variant="contained" fullWidth sx={ButtonStyles}>
            준비하기
          </Button>
        ) : (
          <Button variant="contained" disabled fullWidth sx={ButtonStyles}>
            대기 중
          </Button>
        )}
      </Stack>
    </Container>
  );
}

