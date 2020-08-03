import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import Services from './components/Services';
import Customers from './components/Customers';
import Mechanics from './components/Mechanics';


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
  return (
   
    <div className="App">
       <div className="Firma">
      <p>Demofirma <br></br> Pariisinkatu 8 <br></br> 00560 HELSINKI</p>
    </div>
      <h1>Kiinteistöhuoltoa</h1>
      <Button color="primary" onClick={showCustomers}>Asiakkaat</Button>
      <Button color="primary" onClick={showMechanics}>Asentajat</Button>
      <Button color="primary" onClick={showServices}>Huoltotyöt</Button>
      {task ===0 && <Services /> ||
      task === 1 && <Mechanics /> ||
      task === 2 && <Customers />
      }
    </div>
  );
}

export default App;
