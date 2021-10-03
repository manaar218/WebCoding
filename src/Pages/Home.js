import React from 'react';
import Container from '@material-ui/core/Container';
import SimpleTabs from '../Components/HomePage/Tabs';
import ResponsiveFontSizes from '../Components/HomePage/MostWatched';
// import Poster1 from '../Assets/chalo koi baat nahi.jpeg';
// import Poster2 from '../Assets/scam 1982.jpeg';
// import Poster3 from '../Assets/Gullak.jpeg';
// import Poster4 from '../Assets/Your Honor.jpeg';
import TrendingTrailers from '../Components/HomePage/TrendingTrailers';
import SwipeableTextMobileStepper from '../Components/HomePage/Carousel';
import Trending from '../Components/HomePage/Trending';
import SingleLineImageList from '../Components/HomePage/Most';
 
export default function Home() {
  return (
 
    <React.Fragment>
        <Container fixed>
       
        <SimpleTabs/>
        <SwipeableTextMobileStepper/>
        <ResponsiveFontSizes/>
        <SingleLineImageList/>
        <TrendingTrailers/>
        
        <Trending/>
        </Container>
    </React.Fragment>
 );
}
