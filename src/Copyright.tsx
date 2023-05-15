import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { css, styled } from '@mui/material';

export default function Copyright() {
  return (
    <Typography
      css={css`
        margin-top: 8px;
      `}
      variant="body2"
      color="text.secondary"
      align="center"
    >
      {'Copyright © '}
      <MuiLink color="inherit" href="https://mui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
