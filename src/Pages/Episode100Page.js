import React from 'react';
import Container from '@material-ui/core/Container';
import ContainedButtons from '../Components/UA13+';
import Episode100BodyText from '../Components/Episode100BodyText.js';
import Episode100Title from '../Components/Episode100Title';
import ButtonBases from '../Components/GoPremiumButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShareIcon from '@material-ui/icons/Share';
import AddIcon from '@material-ui/icons/Add';
import GetAppIcon from '@material-ui/icons/GetApp';


export default function Episode100Page() {
  return (
    <React.Fragment>
        <Container fixed>

            <ContainedButtons/>        {/* U/A 13+ */}
            <ArrowBackIosIcon/>        {/* 'Back' */}
            <FullscreenIcon/>          {/* 'Full Screen' */}
            <SkipPreviousIcon/>        {/* 'Skip Previous' */}
            <PlayArrowIcon/>           {/* 'Play' */}
            <SkipNextIcon/>            {/* 'Skip Next' */}
            <ShareIcon/> Share         {/* 'Share' */}
            <AddIcon/> Add to List     {/* 'Add to List' */}
            <GetAppIcon/> Download     {/* 'Download' */}
            <Episode100Title/>         {/* Title of Episode 100 */}
            <Episode100BodyText/>      {/* Body Text */}
            <ButtonBases/>             {/* 'Go Premium' */}

        </Container>
    </React.Fragment>
  );
}