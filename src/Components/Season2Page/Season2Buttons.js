import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link, Router} from "react-router-dom";
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      // padding: theme.spacing(1),
      textAlign: 'center'

    }, 
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Button variant="outlined">Default</Button> */}

      <Grid container spacing={1}>


      <Grid item xs={4}>
      <Link to={process.env.PUBLIC_URL + '/kuch-rang-pyaar-ke-aise-bhi-season-1'}>
 
      <Button variant="outlined" color='primary'>
        Season 1
      </Button>
      
      </Link>
      </Grid>
      <Grid item xs={4}>
      <Link to={process.env.PUBLIC_URL + '/kuch-rang-pyaar-ke-aise-bhi-season-2'}>
   
      <Button variant="contained" color='yellow'>
        Season 2
      </Button>
    
      </Link>
</Grid>
<Grid item xs={4}>
      <Link to={process.env.PUBLIC_URL + '/kuch-rang-pyaar-ke-aise-bhi-season-3'}>
 
      <Button variant="outlined" color='primary'>
        Season 3
      </Button>
   
      </Link>
      </Grid>
      </Grid>

      {/* <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" color="primary" href="#outlined-buttons">
        Link
      </Button> */}
    </div>
  );
}
