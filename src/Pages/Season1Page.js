import React from 'react';
import Container from '@material-ui/core/Container';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Types from '../Components/NameOfSerial';
import FreeSoloCreateOption from '../Components/SearchBar';
import OutlinedButtons from '../Components/Season1Buttons';
import SimpleAccordion from '../Components/LatestOldestEpisode';
import S1Ep1Card from '../Components/S1Ep1Card';
import S1Ep2Card from '../Components/S1Ep2Card';
import S1Ep3Card from '../Components/S1Ep3Card';
import S1Ep4Card from '../Components/S1Ep4Card';
import S1Ep5Card from '../Components/S1Ep5Card';
import S1Ep6Card from '../Components/S1Ep6Card';
import S1Ep7Card from '../Components/S1Ep7Card';
import S1Ep8Card from '../Components/S1Ep8Card';
import S1Ep9Card from '../Components/S1Ep9Card';
import S1Ep10Card from '../Components/S1Ep10Card';

export default function Season1Page() {
  return (
    <React.Fragment>
        <Container fixed>

        <ArrowBackIosIcon/>       c
        <Types/>                  {/*  Name of the serial */}
        <FreeSoloCreateOption/>   {/*  Search Bar */}
        <OutlinedButtons/>        {/*  Season 1, 2, 3 buttons */}
        <SimpleAccordion/>        {/*  Latest episode/ Oldest episode */}
        <S1Ep1Card/>              {/*  Media card for Episode 1 */}
        <S1Ep2Card/>              {/*          ''     Episode 2 */}
        <S1Ep3Card/>              {/*          ''     Episode 3 */}
        <S1Ep4Card/>              {/*          ''     Episode 4 */}
        <S1Ep5Card/>              {/*          ''     Episode 5 */}
        <S1Ep6Card/>              {/*          ''     Episode 6 */}
        <S1Ep7Card/>              {/*          ''     Episode 7 */}
        <S1Ep8Card/>              {/*          ''     Episode 8 */}
        <S1Ep9Card/>              {/*          ''     Episode 9 */}
        <S1Ep10Card/>             {/*          ''     Episode 10 */}
            
        </Container>
    </React.Fragment>
  );
}