import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { globalStyles } from '../Theme';

import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import '../App.css';
import bgd from '../assets/bgd.png';
import resume from "../assets/M73_Srimanth_Agastyaraju_Resume.pdf";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: -15,
        backgroundImage: `url(${bgd})`,
        height: '105vh',
        /* Center and scale the image nicely */
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    grid: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    hr_div: {
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    navLinks : {
        color: 'white',
        textDecoration: 'none',
    },
}
));

export default function MLZealotHome() {
    const classes = useStyles();
    const globalCSS = globalStyles();
    return (
        <div className={classes.root}>
            <Grid container className={classes.grid}>
                <Grid item xs sm={12} md={12}>
                    <Typography style={{ fontWeight: 400 }} gutterBottom variant="h2" component="h2" color="textSecondary">
                        MLZealot
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h5" color="textSecondary">
                        Machine Learning and Data Science simplified.
                    </Typography>
                    <div className={classes.hr_div}>
                        <hr/>
                        <br/>
                    </div>
                    <AnchorLink className="btn btn-white navLinks" href="#projects">
                    <Button className={globalCSS.btnGradientOutlineTransparent}
                        target="_blank" href="#projects" 
                        size="large"
                        startIcon={<ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>}>
                            Explore
                    </Button>
                    </AnchorLink>
                    <Button className={globalCSS.btnGradientOutlineTransparent}
                        target="_blank" href={resume} 
                        size="large"
                        endIcon={<PostAddRoundedIcon></PostAddRoundedIcon>}>
                        Resume
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}
