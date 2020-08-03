import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import Services from './components/Services';
import Customers from './components/Customers';
import Mechanics from './components/Mechanics';
import MainPage from './components/MainPage';


function App() {

  const [task, setTask] = React.useState(3);

  
  
  const showMechanics = () => {
    setTask(1);
  }

  const showCustomers = () => {
    setTask(2);     
  }

  function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

  const showServices = () => {
    setTask(0);
  }

  const showInfo = () => {
    setTask(3);
  }
  return (
   
    <div className="App">
      
      <h1>Kiinteistöhuoltoa</h1>
      <Button color="primary" onClick={showCustomers}>Asiakkaat</Button>
      <Button color="primary" onClick={showMechanics}>Asentajat</Button>
      <Button color="primary" onClick={showServices}>Huoltotyöt</Button>
      {task ===0 && <Services /> ||
      task === 1 && <Mechanics /> ||
      task === 2 && <Customers /> ||
      task === 3 && <MainPage />
      }
      <br></br><Button color="primary" onClick={showInfo}>Info</Button>
    </div>
  );
}

export default App;
