import './App.css';
import ButtonAppBar from './Components/AppBar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Gallery from './Pages/Gallery.js'
import Hotels from './Pages/Hotels.js'
import PrimarySearchAppBar from './Components/AppBarSearch';
import SeasonsPage from './Pages/SeasonsPage';
import Episode100 from './Pages/Episode100';


function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
      
      <PrimarySearchAppBar/>
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/gallery'}  > <Gallery/> </Route>
            <Route path={process.env.PUBLIC_URL + '/hotels'}  > <Hotels/> </Route>
            <Route path={process.env.PUBLIC_URL + '/kuch-rang-pyaar-ke-aise-bhi-seasons'}  > <SeasonsPage/> </Route>
            <Route path={process.env.PUBLIC_URL + '/kuch-rang-pyaar-ke-aise-bhi-season-1-episode-100'}  > <Episode100/> </Route>
          </Switch>

      <footer className="App-footer">
        This is a footer
      </footer>
    </div>
  );
  }

export default App;
