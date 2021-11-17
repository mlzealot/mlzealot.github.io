import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Grid, Icon } from '@mui/material';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import { globalStyles } from '../Theme';

import avatar from "../assets/Portrait_1_avatar.png";


import { 
    aboutMeComponentTitle,
    aboutMeComponentDescription,
    aboutMeLinkArray,
    myBio,
} from '../data/AboutMeData';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);
library.add(fas);

const useStyles = makeStyles((theme) => ({
    root: {
        // height: '70vh',
        color: 'white',
    },
    grid: {
        alignItems: "center",
        justifyContent: "center",
    },
    avatarImage: {
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        float: 'center',
        color: theme.palette.text.secondary,
    },
    largeIcons : {
        paddingLeft: '0.5%',
        paddingRight: '0.5%',
        fontSize: 36,
        marginRight: theme.spacing(2),
      },
    bio: {
        padding: '2%',
        textAlign: 'justify'
    },
}));


export default function AboutMe() {
    const classes = useStyles();
    const globalCSS = globalStyles();
  
    return (
        <div className={classes.root}>
            <div>
            <Typography variant="h4" className={globalCSS.sectionMargin}>
                {aboutMeComponentTitle}
            </Typography>
            <Typography variant="h5" className={globalCSS.sectionMargin}>
                {aboutMeComponentDescription}
            </Typography>
            </div>
            
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container className={classes.grid}>
                        <Grid item className={classes.avatarImage} xs={12} sm={12} md={4} >
                            <Avatar sx={{ height: '90%', width: '90%' }} alt="Srimanth Agastyaraju" src={avatar}/>
                            {/* <ul>
                                {aboutMeLinkArray.map((social) => (
                                    <a id={social.id} href={social.social_url}
                                        target="_blank" rel="noreferrer"
                                        style={{'color': social.color}}>
                                        <FontAwesomeIcon id={social.id} className={classes.largeIcons} icon={[social.icon_type, social.social_icon]}/>
                                    </a>
                                ))}
                            </ul> */}
                        </Grid>
                        <Grid item xs={12} sm={12} md={8}>
                            <Typography variant="body1" className={classes.bio}>
                                {myBio}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
  }