import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import Season3Page from './Pages/Season3Page';
import Season1Page from './Pages/Season1Page';
import Season2Page from './Pages/Season2Page';
import S3Ep10Page from './Pages/S3Ep10Page';
import SimpleBottomNavigation from './Components/HomePage/BottomNavigation';
import PrimarySearchAppBar from './Components/SearchAppBar';

function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
        <PrimarySearchAppBar />

      </header>

      {/* Router - Pages */}
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/'} exact > <Home /> </Route>
        <Route path={process.env.PUBLIC_URL + '/home'} > <Home /> </Route>
        <Route path={process.env.PUBLIC_URL + '/kuch-rang-pyaar-ke-aise-bhi-season-3'}  > <Season3Page /> </Route>
        <Route path={process.env.PUBLIC_URL + '/kuch-rang-pyaar-ke-aise-bhi-season-1'}  > <Season1Page /> </Route>
        <Route path={process.env.PUBLIC_URL + '/kuch-rang-pyaar-ke-aise-bhi-season-2'}  > <Season2Page /> </Route>
        <Route path={process.env.PUBLIC_URL + '/kuch-rang-pyaar-ke-aise-bhi-season-3-episode-10'}  > <S3Ep10Page /> </Route>
      </Switch>

      <footer className="App-footer">
        <SimpleBottomNavigation />
      </footer>
    </div>
  );
}

export default App;
