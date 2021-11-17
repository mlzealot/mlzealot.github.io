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
    justifySelf: 'center',
    marginRight: theme.spacing(3),
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



export default function DefaultNavBar() {
  const classes = useStyles();
  const globalCSS = globalStyles();

  return (
    <div className={classes.root}>
      <AppBar className={globalCSS.navbar} position="fixed">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            size="large">
            <MenuIcon />
          </IconButton> */}
          
          <AnchorLink href="#projects" className={classes.navLinks}>
            <Typography edge="start" variant="h6" className={classes.menuButton}>
                  Projects
            </Typography>
          </AnchorLink>
          <Typography edge="start" variant="h6" className={classes.menuButton}>
            <AnchorLink href="#aboutme" className={classes.navLinks}>
                About Me
            </AnchorLink>
          </Typography>
          <Typography variant="h5" className={classes.title}>
            <AnchorLink href="#home" className={classes.navLinks}>
                MLZealot
            </AnchorLink>
          </Typography>
          {portfolioLinkArray.map((link) => (
            <a id={link.id} className={classes.navLinks} href={link.portfolio_url}
              target="_blank" rel="noreferrer" size="small">
                <FontAwesomeIcon id={link.id} className={classes.smallIcons} icon={["fab", link.portfolio_icon]} size="xs"/>
            </a>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}
