import React from 'react';
import './App.css';
import Services from './components/Services';
import Customers from './components/Customers';
import Mechanics from './components/Mechanics';
import MainPage from './components/MainPage';
import { BrowserRouter, Route } from "react-router-dom";
import Link from '@material-ui/core/Link';



function App() {

  return (

    <div className="App">

      <h1>Kiinteistöhuoltoa</h1>
      <Link color="primary" href="/MainPage" onClick={MainPage}>INFO</Link>{' '}
      <Link color="primary" href="/Customers" onClick={Customers}>ASIAKKAAT</Link>{' '}
      <Link color="primary" href="/Mechanics" onClick={Mechanics}>ASENTAJAT</Link>{' '}
      <Link color="primary" href="/Services" onClick={Services}>HUOLTOTYÖT</Link>{' '}
      <BrowserRouter>
        <div>
          <Route path="/MainPage" component={MainPage} />
          <Route path="/Mechanics" component={Mechanics} />
          <Route path="/Services" component={Services} />
          <Route path="/Customers" component={Customers} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
