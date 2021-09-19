import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Button variant="outlined">Default</Button> */}

      <Button variant="contained" color="primary">
        Season 1
      </Button>

      <Button variant="outlined" color="primary">
        Season 2
      </Button>

      <Button variant="outlined" color="primary">
      
        Season 3
      </Button>

      {/* <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" color="primary" href="#outlined-buttons">
        Link
      </Button> */}
    </div>
  );
}
