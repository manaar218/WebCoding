import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    align: 'center',
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      {/* <Grid container spacing={5}> */}

      <Typography variant="h4" gutterBottom>
        Kuch Rang Pyaar Ke Aise Bhi
      </Typography>

      {/* </Grid> */}
    </div>
  );
}
