import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    // position: 'absolute',
    maxWidth: '100%',
    // bottom: '-20%',
    // left: '1%',
    alignItems: 'left'
  },
});

export default function S3Ep10Title() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Typography variant="h6" gutterBottom>
        Episode 100 Ranveer Ki Manzil
      </Typography>

      <Typography variant="subtitle1" gutterBottom >
        Neha comes to meet her family members for the first time,
        after her marriage with Ranveer. She becomes emotional
        thinking about her day's at Ishwari Niwas. Dev feels that
        his sister is in tension and she needs some kind of financial help.
      </Typography>

      <Typography variant="subtitle2" gutterBottom >
        Cast: Shaheer Sheikh, Erica Fernandes, Supriya Pil Gaonkar
      </Typography>

      <Typography variant="subtitle2" gutterBottom >
        Genre: Drama, Romance
      </Typography>

      <Typography variant="subtitle2" gutterBottom >
        Language: Hindi
      </Typography>

    </div>
  );
}
