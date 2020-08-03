import React from 'react';
import Button from '@material-ui/core/Button';
import moment from 'moment';


export default function Main() {


    return (
        <div>
            <h4>Hei, tämä on demosivusto.<br></br>Sivustolla on käytetty API kutsuja itsetehdystä BackEndistä.
            <br></br>mm osoitteesta:</h4>
            <a href="https://kiinteistohuolto.herokuapp.com/services" target="_blank">kiinteistohuolto.herokuapp.com/services</a><br></br>
            <a href="https://kiinteistohuolto.herokuapp.com/customers" target="_blank">kiinteistohuolto.herokuapp.com/customers</a><br></br>
            <a href="https://kiinteistohuolto.herokuapp.com/mechanics" target="_blank">kiinteistohuolto.herokuapp.com/mechanics</a><br></br>

            <h4>BackEnd on tehty H2consolella joka tyhjenee kun serveri uinahtaa.<br></br>
            BackEnd on toteutettu Maven Projektina Spring boot, kielenä Java. FrontEnd tehty Reactilla</h4>
        </div>
    )

}