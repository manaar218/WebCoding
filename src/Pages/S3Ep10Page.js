import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/S3Ep10Page/UA13+';
import S3Ep10Title from '../Components/S3Ep10Page/S3Ep10Title';
import ButtonBases from '../Components/S3Ep10Page/GoPremiumButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShareIcon from '@material-ui/icons/Share';
import AddIcon from '@material-ui/icons/Add';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Link, Router } from "react-router-dom";
import { Grid } from '@material-ui/core';
import S3Ep10 from '../Assets/S3Ep10thumbnail1.jpg';
import KBCad from '../Assets/KBCad.jpg';

export default function S3Ep10Page() {
  return (
    <React.Fragment>
      <Container fixed>

        <Grid container spacing={0}>

          <Grid item xs={4}>
            <Link to={process.env.PUBLIC_URL + '/kuch-rang-pyaar-ke-aise-bhi-season-1'}>
              <ArrowBackIosIcon />        {/* 'Back' */}
            </Link>
          </Grid>

          <Grid item xs={4}>
            <ContainedButtons />        {/* U/A 13+ */}
          </Grid>

          <Grid item xs={4}>
            <FullscreenIcon />          {/* 'Full Screen' */}
          </Grid>

          <Grid item xs={4}>
            <SkipPreviousIcon />        {/* 'Skip Previous' */}
          </Grid>

          <Grid item xs={4}>
            <PlayArrowIcon />           {/* 'Play' */}
          </Grid>

          <Grid item xs={4}>
            <SkipNextIcon />            {/* 'Skip Next' */}
          </Grid>

          <Grid item xs={12} >
            <img src={S3Ep10} className="Season - 3 Episode - 10" alt="Season - 3 Episode - 10" height='100%' width='100%' />
          </Grid>

          <Grid item xs={4}>
            <ShareIcon /> Share         {/* 'Share' */}
          </Grid>

          <Grid item xs={4}>
            <AddIcon /> Add to List     {/* 'Add to List' */}
          </Grid>

          <Grid item xs={4}>
            <GetAppIcon /> Download     {/* 'Download' */}
          </Grid>

          <S3Ep10Title />               {/* Title of Episode 100 */}

          <ButtonBases />               {/* 'Go Premium' */}
          <img src={KBCad} className="Advertisement" alt="Advertisement" height='100%' width='100%' />

        </Grid>
      </Container>
    </React.Fragment>
  );
}