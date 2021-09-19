import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
        <Grid item xs={12}>
          1
        </Grid>
        <Grid item xs={6}>
          2
        </Grid>
        <Grid item xs={6}>
          3
        </Grid>
        <Grid item xs={3}>
          4
        </Grid>
        <Grid item xs={3}>
          5
        </Grid>
        <Grid item xs={3}>
          6
        </Grid>
        <Grid item xs={3}>
          7
        </Grid>
      </Grid>
    </div>
  );
}
