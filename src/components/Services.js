import React, { useEffect, useState } from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import moment from 'moment';



export default function ServicesList() {

    const [services, setServices] = useState();


    useEffect(() => {
        Fetching();
    }, [])

    const Fetching = () => {
        fetch('https://kiinteistohuolto.herokuapp.com/services', {
            headers: { 'Access-Control-Allow-Origin': '*' }
        })
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(err => console.error(err))
    }

    const columns = [
        {
            Header: 'Päivä',
            accessor: 'time',
            Cell: row => (showFilteredFormat(row.original))
        },
        {
            Header: 'Asiakas',
            accessor: 'customer.name'
        },
        {
            Header: 'Osoite',
            accessor: 'customer.address'
        },
        {
            Header: 'Työnkuvaus',
            accessor: 'task'
        },
        {
            Header: 'Yhteyshenkilö',
            accessor: 'customer.person'
        },
        {
            Header: 'Puhelin',
            accessor: 'customer.telephone'
        },
        {
            Header: 'Email',
            accessor: 'customer.email'
        },
        {
            Header: 'Mekaanikko',
            accessor: 'mechanic.name'
        }


    ]

    const showFilteredFormat = (row) => {
        return (
            <div>
                {moment(row.time).format("DD.MM.YYYY HH:mm:ss")}
            </div>
        )

    }


    return (
        <div>
            <h5> </h5>
            <ReactTable defaultPageSize={10} filterable={true} data={services} columns={columns} />

        </div>
    )
}