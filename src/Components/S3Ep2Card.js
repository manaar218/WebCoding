import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import HdIcon from '@material-ui/icons/Hd';
import S3Ep2 from '../Assets/S3Ep2.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 610,
  },
  media: {
    height: 120,
  },
});

export default function S3Ep2Card() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          
        />
        <CardContent>
          <img src = {S3Ep2} className= "Episode 02 - Ayush Ki Asliyat" alt= "Episode 02 - Ayush Ki Asliyat"/>

          <HdIcon/>

          <Typography variant="body3" color="textSecondary" component="p">
            29 mins 
          </Typography>

          <Typography variant="body3" color="textSecondary" component="p">
            29 Feb 2016 
          </Typography>

          <Typography gutterBottom variant="h6" component="h3">
            02. Ayush Ki Asliyat
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
          Dev finds out that Ayush is his real son and that Suhana is not his 
          daughter. Will he be able to tell Sonakshi the truth?
          </Typography>

        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}
