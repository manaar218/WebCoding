import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import HdIcon from '@material-ui/icons/Hd';
import S1Ep4 from '../Assets/S1Ep4.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 610,
  },
  media: {
    height: 120,
  },
});

export default function S1Ep4Card() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          
        />
        <CardContent>
          <img src = {S1Ep4} className= "Episode 04 - Neha And Sameer's Engagement" alt= "Episode 04 - Neha And Sameer's Engagement"/>

          <HdIcon/>

          <Typography variant="body3" color="textSecondary" component="p">
            29 mins 
          </Typography>

          <Typography variant="body3" color="textSecondary" component="p">
            29 Feb 2016 
          </Typography>

          <Typography gutterBottom variant="h6" component="h3">
            04. Neha And Sameer's Engagement
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
          Many years into their married life, Dev and Sonakshi feel that the 
          love they once had, is slowly fading. Can they rekindle their relationship?
          </Typography>

        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
