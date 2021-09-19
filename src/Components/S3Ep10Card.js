import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import HdIcon from '@material-ui/icons/Hd';
import S3Ep10 from '../Assets/S3Ep10.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 610,
  },
  media: {
    height: 120,
  },
});

export default function S3Ep10Card() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          
        />
        <CardContent>
          <img src = {S3Ep10} className= "Episode 10 - Mutual Misunderstanding" alt= "Episode 10 - Mutual Misunderstanding"/>

          <HdIcon/>

          <Typography variant="body3" color="textSecondary" component="p">
            29 mins 
          </Typography>

          <Typography variant="body3" color="textSecondary" component="p">
            29 Feb 2016 
          </Typography>

          <Typography gutterBottom variant="h6" component="h3">
            10. Mutual Misunderstanding
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
          Suhana gets upset when Ayush breaks her favourite mug. Sonakshi 
          tries to open up in front of Dev, but will he understand her feelings?

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
