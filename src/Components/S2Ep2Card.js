import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import HdIcon from '@material-ui/icons/Hd';
import S2Ep2 from '../Assets/S2Ep2.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 610,
  },
  media: {
    height: 120,
  },
});

export default function S2Ep2Card() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          
        />
        <CardContent>
          <img src = {S2Ep2} className= "Episode 02 - Suhana Goes Missing" alt= "Episode 02 - Suhana Goes Missing"/>

          <HdIcon/>

          <Typography variant="body3" color="textSecondary" component="p">
            29 mins 
          </Typography>

          <Typography variant="body3" color="textSecondary" component="p">
            29 Feb 2016 
          </Typography>

          <Typography gutterBottom variant="h6" component="h3">
            02. Suhana Goes Missing
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
