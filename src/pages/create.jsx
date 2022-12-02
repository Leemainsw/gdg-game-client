import React from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
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

export default function Create() {
  return (
    <Container maxWidth="sm" sx={ContainerStyles}>
      <Header />
      <Stack direction="column" justifyContent="space-evenly" sx={{ height: '100vh' }}>
        <Stack spacing={4}>
          <Typography variant="h4" sx={TitleStyles}>
            방 생성하기
          </Typography>
          <div>
            <Typography variant="subtitle2">방 이름</Typography>
            <TextField id="title" variant="standard" fullWidth />
          </div>
          <div>
            <Typography variant="subtitle2">최대 인원 수</Typography>
            <TextField id="limit" variant="standard" fullWidth />
          </div>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="subtitle2">친구와 함께 하기</Typography>
            <Button startIcon={<LinkIcon />}>링크 복사하기</Button>
          </Stack>
        </Stack>
        <Button
          variant="contained"
          fullWidth
          sx={{ padding: '1rem 0', fontSize: '1rem', borderRadius: '1rem' }}
        >
          생성하기
        </Button>
      </Stack>
    </Container>
  );
}

