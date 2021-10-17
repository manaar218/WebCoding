import React from 'react';
import Container from '@material-ui/core/Container';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Types from '../Components/NameOfSerial';
import FreeSoloCreateOption from '../Components/SearchBar';
import OutlinedButtons from '../Components/Season1Page/Season1Buttons';
import SimpleAccordion from '../Components/LatestOldestEpisode';
import S1Ep1Card from '../Components/Season1Page/S1Ep1Card';
import S1Ep2Card from '../Components/Season1Page/S1Ep2Card';
import S1Ep3Card from '../Components/Season1Page/S1Ep3Card';
import S1Ep4Card from '../Components/Season1Page/S1Ep4Card';
import S1Ep5Card from '../Components/Season1Page/S1Ep5Card';
import S1Ep6Card from '../Components/Season1Page/S1Ep6Card';
import S1Ep7Card from '../Components/Season1Page/S1Ep7Card';
import S1Ep8Card from '../Components/Season1Page/S1Ep8Card';
import S1Ep9Card from '../Components/Season1Page/S1Ep9Card';
import S1Ep10Card from '../Components/Season1Page/S1Ep10Card';
import { Grid } from '@material-ui/core';
import Arrow1 from '../Assets/Arrow1.svg';


export default function Season1Page() {
  return (
    <React.Fragment>
      <Container fixed>
        <Grid container spacing={0} justifyContent="center" alignItems="center" >


          <Grid item xs={1} lg={3}>
            <ArrowBackIosIcon />         {/*  'Back'' */}
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
            <S1Ep1Card />              {/* Media card for Episode 1*/}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S1Ep2Card />              {/*         ''     Episode 2*/}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S1Ep3Card />              {/*         ''     Episode 3*/}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S1Ep4Card />              {/*          ''     Episode 4 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S1Ep5Card />              {/*          ''     Episode 5 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S1Ep6Card />              {/*          ''     Episode 6 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S1Ep7Card />              {/*          ''     Episode 7 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S1Ep8Card />              {/*          ''     Episode 8 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S1Ep9Card />              {/*          ''     Episode 9 */}
          </Grid>

          <Grid item xs={12} lg={6}>
            <S1Ep10Card />             {/*          ''     Episode 10 */}
          </Grid>
        </Grid>

      </Container>
    </React.Fragment>
  );
}