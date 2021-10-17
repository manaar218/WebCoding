import React from 'react';
import Container from '@material-ui/core/Container';
import Types from '../Components/NameOfSerial';
import FreeSoloCreateOption from '../Components/SearchBar';
import OutlinedButtons from '../Components/Season2Page/Season2Buttons';
import SimpleAccordion from '../Components/LatestOldestEpisode';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import S2Ep1Card from '../Components/Season2Page/S2Ep1Card';
import S2Ep2Card from '../Components/Season2Page/S2Ep2Card';
import S2Ep3Card from '../Components/Season2Page/S2Ep3Card';
import S2Ep4Card from '../Components/Season2Page/S2Ep4Card';
import S2Ep5Card from '../Components/Season2Page/S2Ep5Card';
import S2Ep6Card from '../Components/Season2Page/S2Ep6Card';
import S2Ep7Card from '../Components/Season2Page/S2Ep7Card';
import S2Ep8Card from '../Components/Season2Page/S2Ep8Card';
import S2Ep9Card from '../Components/Season2Page/S2Ep9Card';
import S2Ep10Card from '../Components/Season2Page/S2Ep10Card';
import { Grid } from '@material-ui/core';

export default function Season2Page() {
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
            <S2Ep1Card />              {/*          ''     Episode 1 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S2Ep2Card />              {/*          ''     Episode 2 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S2Ep3Card />              {/*          ''     Episode 3 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S2Ep4Card />              {/*          ''     Episode 4 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S2Ep5Card />              {/*          ''     Episode 5 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S2Ep6Card />              {/*          ''     Episode 6 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S2Ep7Card />              {/*          ''     Episode 7 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S2Ep8Card />              {/*          ''     Episode 8 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S2Ep9Card />              {/*          ''     Episode 9 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S2Ep10Card />             {/*          ''     Episode 10 */}
          </Grid>
        </Grid>

      </Container>
    </React.Fragment>
  );
}