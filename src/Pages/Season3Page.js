import React from 'react';
import Container from '@material-ui/core/Container';
import Types from '../Components/NameOfSerial';
import FreeSoloCreateOption from '../Components/SearchBar';
import OutlinedButtons from '../Components/Season3Page/Season3Buttons';
import SimpleAccordion from '../Components/LatestOldestEpisode';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import S3Ep1Card from '../Components/Season3Page/S3Ep1Card';
import S3Ep2Card from '../Components/Season3Page/S3Ep2Card';
import S3Ep3Card from '../Components/Season3Page/S3Ep3Card';
import S3Ep4Card from '../Components/Season3Page/S3Ep4Card';
import S3Ep5Card from '../Components/Season3Page/S3Ep5Card';
import S3Ep6Card from '../Components/Season3Page/S3Ep6Card';
import S3Ep7Card from '../Components/Season3Page/S3Ep7Card';
import S3Ep8Card from '../Components/Season3Page/S3Ep8Card';
import S3Ep9Card from '../Components/Season3Page/S3Ep9Card';
import S3Ep10Card from '../Components/Season3Page/S3Ep10Card';
import { Grid } from '@material-ui/core';

export default function Season3Page() {
  return (
    <React.Fragment>
      <Container fixed>
        <Grid container spacing={1}>

          <Grid item xs={1} lg={3}>
            <ArrowBackIosIcon />       {/* 'Back' icon */}
          </Grid>

          <Grid item xs={11} lg={9}>
            <Types />                  {/*  Name of the serial */}
          </Grid>

        </Grid>

        <FreeSoloCreateOption />   {/*  Search Bar */}
        <OutlinedButtons />        {/*  Season 1, 2, 3 buttons */}

        <Grid container spacing={1}>

          <Grid item xs={12} lg={12}>
            <SimpleAccordion />        {/*  Latest episode/ Oldest episode */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S3Ep1Card />              {/*          ''     Episode 1 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S3Ep2Card />              {/*          ''     Episode 2 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S3Ep3Card />              {/*          ''     Episode 3 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S3Ep4Card />              {/*          ''     Episode 4 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S3Ep5Card />              {/*          ''     Episode 5 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S3Ep6Card />              {/*          ''     Episode 6 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S3Ep7Card />              {/*          ''     Episode 7 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S3Ep8Card />              {/*          ''     Episode 8 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S3Ep9Card />              {/*          ''     Episode 9 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S3Ep10Card />             {/*          ''     Episode 10 */}
          </Grid>
        </Grid>

      </Container>
    </React.Fragment>
  );
}