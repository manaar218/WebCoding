import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

      <Grid item xs={12} lg={4}>
          The logo, spanning 1 of 3
      </Grid>

      <Grid item xs={12} lg={8}>
          The navigation, spanning 2 of 3
      </Grid>

      <Grid item xs={12} lg={12}>
          The carousel, spanning 3 of 3
      </Grid>

      <Grid item xs={12} lg={4}>
          Feature, spanning 1 of 3
      </Grid>

      <Hidden xsDown>

      <Grid item xs={12} lg={4}>
          Feature, spanning 1 of 3
      </Grid>
      
      <Grid item xs={12} lg={4}>
          Feature, spanning 1 of 3
      </Grid>

      <Grid item xs={12} lg={12}>
          The footer, spanning 3 of 3
      </Grid>

      </Hidden>
      
      </Grid>
    </div>
  );
}
