import React from 'react';
import Container from '@material-ui/core/Container';
import Types from '../Components/NameOfSerial';
import FreeSoloCreateOption from '../Components/SearchBar';
import OutlinedButtons from '../Components/Season3Buttons';
import SimpleAccordion from '../Components/LatestOldestEpisode';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import S3Ep1Card from '../Components/S3Ep1Card';
import S3Ep2Card from '../Components/S3Ep2Card';
import S3Ep3Card from '../Components/S3Ep3Card';
import S3Ep4Card from '../Components/S3Ep4Card';
import S3Ep5Card from '../Components/S3Ep5Card';
import S3Ep6Card from '../Components/S3Ep6Card';
import S3Ep7Card from '../Components/S3Ep7Card';
import S3Ep8Card from '../Components/S3Ep8Card';
import S3Ep9Card from '../Components/S3Ep9Card';
import S3Ep10Card from '../Components/S3Ep10Card';


export default function Season3Page() {
  return (
    <React.Fragment>
        <Container fixed>

          <ArrowBackIosIcon/>        {/* 'Back' icon */}
          <Types/>                   {/*  Name of the serial */}
          <FreeSoloCreateOption/>    {/*  Search Bar */}
          <OutlinedButtons/>         {/*  Season 1, 2, 3 buttons */}
          <SimpleAccordion/>         {/*  Latest episode/ Oldest episode */}
          <S3Ep1Card/>               {/*          ''     Episode 1 */}
          <S3Ep2Card/>               {/*          ''     Episode 2 */}
          <S3Ep3Card/>               {/*          ''     Episode 3 */}
          <S3Ep4Card/>               {/*          ''     Episode 4 */}
          <S3Ep5Card/>               {/*          ''     Episode 5 */}
          <S3Ep6Card/>               {/*          ''     Episode 6 */}
          <S3Ep7Card/>               {/*          ''     Episode 7 */}
          <S3Ep8Card/>               {/*          ''     Episode 8 */}
          <S3Ep9Card/>               {/*          ''     Episode 9 */}
          <S3Ep10Card/>              {/*          ''     Episode 10 */}
       
        </Container>
    </React.Fragment>
  );
}