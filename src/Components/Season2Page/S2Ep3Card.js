import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import HdIcon from '@material-ui/icons/Hd';
import S2Ep3 from '../../Assets/S2Ep3.jpg';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 20,
  },
});

export default function S2Ep3Card() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          
        />
        <CardContent>

          <Grid container spacing={1}>

          <Grid item xs={6}>
          <img src = {S2Ep3} className= "Episode 03 - Sonakshi's Decision" alt= "Episode 03 - Sonakshi's Decision" height="100%" width="100%"/>
          </Grid>

          <Grid item xs={6}>
          <Typography gutterBottom variant="h6" component="h3">
          03. Sonakshi's Decision
          </Typography>
          </Grid>

          <Grid item xs={4}>
          <HdIcon/>
          </Grid>
      
          <Grid item xs={4}>
          <Typography variant="body3" color="textSecondary" component="p">
            29 mins 
          </Typography>
          </Grid>

          <Grid item xs={4}>
          <Typography variant="body3" color="textSecondary" component="p">
            29 Feb 2016 
          </Typography>
          </Grid>

          </Grid>
          
          <Grid item xs={12}>
          <Typography variant="body2" color="textSecondary" component="p">
          Many years into their married life, Dev and Sonakshi feel that the 
          love they once had, is slowly fading. Can they rekindle their relationship?
          </Typography>
          </Grid>

        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
