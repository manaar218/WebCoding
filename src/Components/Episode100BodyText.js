import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 880,
  },
});

export default function Episode100BodyText() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Typography variant="subtitle1" gutterBottom>
      Neha comes to meet her family members for the first time, 
      after her marriage with Ranveer. She becomes emotional 
      thinking about her day's at Ishwari Niwas. Dev feels that 
      his sister is in tension and she needs some kind of financial help.
      </Typography>

      <Typography variant="subtitle2" gutterBottom>
      Cast: Shaheer Sheikh, Erica Fernandes, Supriya Pil Gaonkar
      Genre: Drama, Romance
      Language: Hindi
      </Typography>
      
    </div>
  );
}
