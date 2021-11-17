import React from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { darkTheme, globalStyles } from '../Theme';

function Copyright() {
  return (
    <Typography variant="body2">
      {'Copyright © '}
      <Link color="inherit" href="https://mlzealot.github.io/">
        MLZealot
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '0vh',
  },
  main: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(2),
  },
}));


export default function StickyFooter() {
  const classes = useStyles(darkTheme);
  const globalCSS = globalStyles();

  return (
    <div className={classes.root}>
      <footer className={globalCSS.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
