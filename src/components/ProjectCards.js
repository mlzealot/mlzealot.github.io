import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { projectJsonArray } from '../data/ProjectData';
import { globalStyles } from '../Theme';
import { Icon } from '@mui/material';

library.add(fab);

const useStyles = makeStyles((theme) => ({
  root : {
    flexGrow: 1,
    alignContent: 'center',
    overflowX: 'hidden',
    overflowY: 'hidden',
    color: 'white',
  },
  btnCenter: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  grid: {
    marginTop: 20,
    marginBottom: 20,
  },
  icons: {
    position: 'absolute',
    top: '27%',
    left: '15px',
  },
  card: {
    minWidth: '40vh',
    maxWidth: '50vh',
    minHeight: 100,
    borderRadius : 15,
    margin: theme.spacing(3),
    textAlign: 'justify',
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
}));

const ProjectCard = ({classes, globalCSS, project}) => {
    return (
        <Card key={project.id} className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Image not found!"
                image={project.image}
                title={project.title}
                width="320px"
                height="240px"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2" color="textSecondary" style={{'text-align': 'center'}}>
                    {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                    {project.description}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.btnCenter}>
                {project.links.map((link) => (
                  <Button key={link.id} className={globalCSS.btnGradientOutline}
                    target="_blank" href={link.url} 
                    startIcon={<Icon><FontAwesomeIcon className={classes.icons} size="sm" icon={["fab", link.icon]} /></Icon>}>
                      {link.button_text}
                  </Button>
                ))}
            </CardActions>
            </Card>
    )
}

export default function ProjectCards() {
  const classes = useStyles();
  const globalCSS = globalStyles();

  return (
    <div className={classes.root}>
        <Typography variant="h4" className={globalCSS.sectionMargin}>
          My Projects
        </Typography>
        <Grid container spacing={3} className={classes.grid}
            alignItems="center"
            justifyContent="center">
        {projectJsonArray.map((project) => (
            <ProjectCard classes={classes} globalCSS={globalCSS} project={project}></ProjectCard>
        ))}
        </Grid>
    </div>
  );
}
