import React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { globalStyles } from '../Theme';

import { portfolioLinkArray } from '../data/NavBarData';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import ResponsiveDrawer from "./ResponsiveDrawer";
import DefaultNavBar from "./DefaultNavBar";
import useMediaQuery from '@mui/material/useMediaQuery';
import { darkTheme } from "../Theme";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab);


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(-5),
    color: 'white'
  },
  iconBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    position: 'absolute',
    top: '30%',
    left: 15,
  },
  smallIcons : {
    fontSize: 16,
    marginLeft: theme.spacing(2),
  },
  navLinks : {
    color: 'white',
    textDecoration: 'none',
  },
}));



export default function NavBar() {
  const classes = useStyles();
  const globalCSS = globalStyles();
  const theme = darkTheme
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMobile)

  return (
    <div className={classes.root}>
      {isMobile ? (<ResponsiveDrawer/>) : 
        (<DefaultNavBar/>)
        }
    </div>
  );
}
