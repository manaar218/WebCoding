import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/Episode100Page/UA13+';
import Episode100BodyText from '../Components/Episode100Page/Episode100BodyText.js';
import Episode100Title from '../Components/Episode100Page/Episode100Title';
import ButtonBases from '../Components/Episode100Page/GoPremiumButton';
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
import S1Ep100 from '../Assets/S1Ep100.jpg';
import KBCad from '../Assets/KBCad.jpg';

export default function Episode100Page() {
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
            <img src={S1Ep100} className="Season - 1 Episode - 100" alt="Season - 1 Episode - 100" height='100%' width='100%' />
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

          <Episode100Title />         {/* Title of Episode 100 */}
          <Episode100BodyText />      {/* Body Text */}
          <ButtonBases />             {/* 'Go Premium' */}
          <img src={KBCad} className="Advertisement" alt="Advertisement" height='100%' width='100%' />

        </Grid>
      </Container>
    </React.Fragment>
  );
}