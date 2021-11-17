import React, { useState } from "react";
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
    navLinks : {
      color: 'white',
      textDecoration: 'none',
    },
  }));

export default function ResponsiveDrawer() {
    const classes = useStyles();
    return (
        <Drawer>
            <List>
            <ListItem>
                <ListItemText>
                    <Typography edge="start" variant="h6" className={classes.menuButton}>
                        <AnchorLink href="#projects" className={classes.navLinks}>
                            Projects
                        </AnchorLink>
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                <Typography edge="start" variant="h6" className={classes.menuButton}>
                        <AnchorLink href="#aboutme" className={classes.navLinks}>
                            About Me
                        </AnchorLink>
                    </Typography>
                </ListItemText>
            </ListItem>
            </List>
        </Drawer>
    )
};