import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';
import Poster1 from '../../Assets/chalo koi baat nahi.jpeg';
import Poster2 from '../../Assets/scam 1982.jpeg';
import Poster3 from '../../Assets/Gullak.jpeg';
import Poster4 from '../../Assets/Your Honor.jpeg';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'black',
  },

  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    width: 800,
    height: 180,
    // position: 'absolute',

  },

  title: {
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: '550%',
    left: '-55%',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const itemData = [
  {
    img: Poster1,
  },
  {
    img: Poster2,
  },
  {
    img: Poster3,
  },
  {
    img: Poster4,
  },
];

export default function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`bookmark ${item.title}`}>
                  <BookmarkRoundedIcon className={classes.title} style={{ color: grey[900] }} />
                </IconButton>

              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}