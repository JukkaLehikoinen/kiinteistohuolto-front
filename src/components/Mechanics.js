import React, { useEffect, useState } from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import Button from '@material-ui/core/Button';
import AddMechanic from './AddMechanic';


export default function MechanicsList() {

    const [mechanics, setMechanics] = useState();
    
  
    useEffect(() => {
        Fetching();
    }, []) 
  
    const Fetching = () =>{
      fetch('https://kiinteistohuolto.herokuapp.com/mechanics')
        .then(response => response.json())
        .then(data => setMechanics(data))
        .catch(err => console.error(err))  
    }

    const columns = [
        {
            Header: 'Nimi',
            accessor: 'name'
        },
        {
            Header: 'puhelin',
            accessor: 'phone'
        },
        {
            Header: 'sähköposti',
            accessor: 'email'
        }
        
    ]


    const addMech = (mechanic) => {

        
            
            fetch('http://kiinteistohuolto.herokuapp.com/addmechanic', {method: 'POST',
            headers:{'Content-Type':'application/json'
            }, 
            body:JSON.stringify(mechanic)
            
            
    }
    
    )
    .then(_ => Fetching())
   
      .catch(err => console.error(err))  
    }


    

    return (
        <div>
            <AddMechanic addMech={addMech}/>
            
              <ReactTable defaultPageSize={10} filterable={true} data={mechanics} columns={columns}/>
              
        </div>
    )
}