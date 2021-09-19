import React from 'react';
import Container from '@material-ui/core/Container';
import Types from '../Components/NameOfSerial';
import FreeSoloCreateOption from '../Components/SearchBar';
import OutlinedButtons from '../Components/Season2Buttons';
import SimpleAccordion from '../Components/LatestOldestEpisode';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import S2Ep1Card from '../Components/S2Ep1Card';
import S2Ep2Card from '../Components/S2Ep2Card';
import S2Ep3Card from '../Components/S2Ep3Card';
import S2Ep4Card from '../Components/S2Ep4Card';
import S2Ep5Card from '../Components/S2Ep5Card';
import S2Ep6Card from '../Components/S2Ep6Card';
import S2Ep7Card from '../Components/S2Ep7Card';
import S2Ep8Card from '../Components/S2Ep8Card';
import S2Ep9Card from '../Components/S2Ep9Card';
import S2Ep10Card from '../Components/S2Ep10Card';

export default function Season2Page() {
  return (
    <React.Fragment>
        <Container fixed>

          <ArrowBackIosIcon/>       {/* 'Back' icon */}
          <Types/>                  {/*  Name of the serial */}
          <FreeSoloCreateOption/>   {/*  Search Bar */}
          <OutlinedButtons/>        {/*  Season 1, 2, 3 buttons */}
          <SimpleAccordion/>        {/*  Latest episode/ Oldest episode */}
          <S2Ep1Card/>              {/*          ''     Episode 1 */}
          <S2Ep2Card/>              {/*          ''     Episode 2 */}
          <S2Ep3Card/>              {/*          ''     Episode 3 */}
          <S2Ep4Card/>              {/*          ''     Episode 4 */}
          <S2Ep5Card/>              {/*          ''     Episode 5 */}
          <S2Ep6Card/>              {/*          ''     Episode 6 */}
          <S2Ep7Card/>              {/*          ''     Episode 7 */}
          <S2Ep8Card/>              {/*          ''     Episode 8 */}
          <S2Ep9Card/>              {/*          ''     Episode 9 */}
          <S2Ep10Card/>             {/*          ''     Episode 10 */}
       
        </Container>
    </React.Fragment>
  );
}