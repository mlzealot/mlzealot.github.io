import { createTheme } from '@mui/material';
import { purple } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

export const darkTheme = createTheme(({
    palette: {
      mode: 'dark',
      primary: {
        main: purple[500],
      },
      secondary: {
        main: '#11cb5f',
      },
      text: {
          primary: '#000000',
          secondary: '#d2d6dd',
      },
      background: {
          default: '#22252c',
          paper: '#333842'
      },
    },
}));

export const globalStyles = makeStyles((theme) => ({
  btnGradient: {
    marginLeft: 20,
    minWidth: 150,
    minHeight: 50,
    maxHeight: 80,
    borderRadius: 25,
    background: 'linear-gradient(90deg, rgba(30, 136, 229, 0.9), rgba(186, 104, 200, 0.9) 80%)',
    color: 'white',
  },
  btnGradientOutlineTransparent: {
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    marginLeft: 30,
    minWidth: 140,
    minHeight: 50,
    maxHeight: 80,
    borderRadius: 25,
    color: 'white',
    textDecoration: 'none',
    padding: '5px 10px',
    border: '2px solid transparent',
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), linear-gradient(90deg, #1e88e5, #ba68c8 80%)",
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
  },
  btnGradientOutline : {
    minWidth: 100,
    minHeight: 40,
    maxHeight: 80,
    fontSize: 10,
    color: 'white',
    padding: '5px 10px',
    border: '2px solid transparent',
    borderRadius: 20,
    backgroundImage: "linear-gradient(#333842, #333842),linear-gradient(90deg, #1e88e5, #ba68c8 80%)",
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
  },
  sectionMargin : {
    marginTop: 30,
  },
  navbar: {
    borderRadius: '0px 0px 25px 25px',
    background: 'linear-gradient(90deg, #1963a5 0%, #6a1b9a 80%)',
    color: 'white',
    opacity: '0.85',
    // maxHeight: '10vh',
  },
  footer: {
    borderRadius: '25px 25px 0px 0px',
    background: 'linear-gradient(90deg, #1963a5 0%, #6a1b9a 80%)',
    color: 'white',
    padding: theme.spacing(2, 2),
    marginTop: 'auto',
    maxHeight: '8vh',
  },
}));

// Some Gradients:
// Dark blue to dark green
// linear-gradient(90deg, rgba(40,53,147,1) 0%, rgba(18,122,105,1) 80%)

// Dark blue to dark purple
// linear-gradient(90deg, #1963a5 0%, #6a1b9a 80%)
// Lighter version of the above gradient
// linear-gradient(90deg, #1e88e5, #ba68c8 80%)