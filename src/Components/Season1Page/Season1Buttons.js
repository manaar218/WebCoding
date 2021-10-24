import React from 'react';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import {
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      textAlign: 'center'
    },
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[600],
    '&:hover': {
      backgroundColor: yellow[700],
    },
  },
}))(Button);

const ComplexButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(grey[500]),
    color: grey[600],
    '&:hover': {
      color: grey[700],
    },
  },
}))(Button);

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container spacing={1}>

        <Grid item xs={4}>
          <Link to={process.env.PUBLIC_URL + '/kuch-rang-pyaar-ke-aise-bhi-season-1'}>
            <ColorButton variant="contained" color="primary" className={classes.margin}>
              Season 1
            </ColorButton>
          </Link>
        </Grid>

        <Grid item xs={4}>
          <Link to={process.env.PUBLIC_URL + '/kuch-rang-pyaar-ke-aise-bhi-season-2'}>
            <ComplexButton variant="outlined" color="primary" className={classes.margin}>
              Season 2
            </ComplexButton>
          </Link>
        </Grid>

        <Grid item xs={4}>
          <Link to={process.env.PUBLIC_URL + '/kuch-rang-pyaar-ke-aise-bhi-season-3'}>
            <ComplexButton variant="outlined" color="primary" className={classes.margin}>
              Season 3
            </ComplexButton>
          </Link>
        </Grid>
      </Grid>

    </div>
  );
}
