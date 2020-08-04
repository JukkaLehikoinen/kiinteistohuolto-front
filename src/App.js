import React from 'react';
import './App.css';
import Services from './components/Services';
import Customers from './components/Customers';
import Mechanics from './components/Mechanics';
import MainPage from './components/MainPage';
import { BrowserRouter, Route } from "react-router-dom";
import Link from '@material-ui/core/Link';
import { render } from '@testing-library/react';
import Button from '@material-ui/core/Button';


function App() {
  const [task, setTask] = React.useState(1);

  const showInfo = () => {
    setTask(1)
  }

  const showCustomers = () => {
    setTask(2)
    
  }
  const showMechanics = () => {
    setTask(3)
  }
  const showServices = () => {
    setTask(4)
  }

  return (

    <div className="App">

      <h1>Kiinteistöhuoltoa</h1>

      <Button color="primary" onClick={showInfo} >Info</Button>
      <Button color="primary" onClick={showCustomers} >Asiakkaat</Button>
      <Button color="primary" onClick={showMechanics} >Asentajat</Button>
      <Button color="primary" onClick={showServices} >Huollot</Button>

      {task===1 && <MainPage /> ||
      task===2 && <Customers /> ||
      task===3 && <Mechanics /> ||
      task===4 && <Services />}

      {/* <Link color="primary" href="/MainPage" onClick={MainPage}>INFO</Link>{' '}
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
      </BrowserRouter> */}
    </div>
  );
}

export default App;
