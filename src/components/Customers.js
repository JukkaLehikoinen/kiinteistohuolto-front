import React, { useEffect, useState } from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import AddCustomer from './AddCustomer';
import AddService from './AddService';
import Button from '@material-ui/core/Button';
import moment from 'moment';

export default function CustomersList(props) {

    const [customers, setCustomers] = useState();
    const [customer, setCustomer] = useState();
    const [display, setDisplay] = useState(0);
    const [customerid, setCustomerid] = useState();

    const [services, setServices] = useState('');

    useEffect(() => {
        Fetching();
    }, [])

    const Fetching = () => {
        fetch('https://kiinteistohuolto.herokuapp.com/customers', {
            headers: { 'Access-Control-Allow-Origin': '*' }
        })
            //fetch('https://kiinteistohuolto.herokuapp.com/api/customers')
            .then(response => response.json())
            .then(data => setCustomers(data))
            .catch(err => console.error(err))

    }

    const columns = [

        {
            Header: 'Nimi',
            accessor: 'name'
        },
        {
            Header: 'Osoite',
            accessor: 'address'
        },
        {
            Header: 'y-tunnus',
            accessor: 'ycode'
        },
        {
            Header: 'Yhteyshenkilö',
            accessor: 'person'
        },
        {
            Header: 'Puhelin',
            accessor: 'telephone'
        },
        {
            Header: 'Sähköposti',
            accessor: 'email'
        },
        {
            Cell: row => (<Button size="small" color="secondary" onClick={() => showActivity(row.original)}>Näytä huoltotyöt</Button>)
        }

    ]

    const addCusto = (customer) => {
        fetch('https://kiinteistohuolto.herokuapp.com/addcustomer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(customer)
        }

        )
            .then(_ => Fetching())
            .catch(err => console.error(err))
    }

    const addService = (customer, custoId, customero, mechId, mechName, mechEmail, mechPhone) => {



        let dateConv = new Date(customer.date + " " + customer.time).toISOString();
        let service = {
            time: dateConv, duration: customer.duration, task: customer.task, comment: customer.comment,
            customer: {
                customerid: customero.customerid, name: customero.name, address: customero.address,
                ycode: customero.ycode, person: customero.person, telephone: customero.telephone, email: customero.email
            },
            mechanic: { mechanicid: mechId, name: mechName, email: mechEmail, phone: mechPhone }
        }
        //    console.log(service)
        fetch('https://kiinteistohuolto.herokuapp.com/addservice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(service)
        }

        )
            .then(_ => showActivity(customero))
            .catch(err => console.error(err))
    }

    const showActivity = (link) => {

        setCustomerid(link.customerid)
        /* console.log(link._links.services.href) */
        fetch('https://kiinteistohuolto.herokuapp.com/customers/' + link.customerid
            , {
                headers: { 'Access-Control-Allow-Origin': '*' }
            })
            //fetch(props.customer.links[2].href)
            .then(response => response.json())
            .then(data => setCustomer(data))
            .catch(err => console.error(err))

        fetch('https://kiinteistohuolto.herokuapp.com/services/', {
            headers: { 'Access-Control-Allow-Origin': '*' }
        })
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(err => console.error(err))

        setDisplay(1);
    }
    let customerList = [];
    if (services !== '') {
        for (let i = 0; i < services.length; i++) {
            if (services[i].customer.customerid === customerid) {
                customerList = [...customerList, services[i]]
            }
        }
    }

    const showFilteredFormat = (row) => {
        return (
            <div>
                {moment(row.time).format("DD.MM.YYYY HH:mm:ss")}
            </div>
        )
    }



    if (display !== 1) {
        return (
            <div>
                <AddCustomer addCusto={addCusto} />
                <ReactTable defaultPageSize={10} filterable={true} data={customers} columns={columns} />
            </div>
        )
    } else {
        const columns = [

            {
                Header: 'Päivä',
                accessor: 'time',
                Cell: row => (showFilteredFormat(row.original))
            },

            {
                Header: 'Työnkuvaus',
                accessor: 'task'
            },
            {
                Header: 'Kesto',
                accessor: 'duration'
            },
            {
                Header: 'Kommentit',
                accessor: 'comment'
            }
        ]

        return (
            <div>
                <AddService customerid={customerid} addService={addService} />
                {/* <ReactTable defaultPageSize={10} filterable={true} data={custoservice} columns={columns}/> */}
                <ReactTable defaultPageSize={10} filterable={true} data={customerList} columns={columns} />
            </div>
        )
    }
}