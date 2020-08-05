import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { NativeSelect } from '@material-ui/core';
import moment from 'moment';

export default function AddService({ addService, customerid }) {
  const [open, setOpen] = React.useState(false);
  const [service, setService] = React.useState({ date: '', time: '', duration: 0.0, task: '', comment: '', mechanic: '' })
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [person, setPerson] = useState();
  const [mechanics, setMechanics] = useState([])
  const [customer, setCustomer] = useState();


  useEffect(() => {
    Fetching();
    FetchMechs();
  }, [])

  const Fetching = () => {
    fetch('https://kiinteistohuolto.herokuapp.com/customers/' + customerid, {
      headers: { 'Access-Control-Allow-Origin': '*' }
    })
      .then(response => response.json())
      .then(data => {
        setName(data.name)
        setAddress(data.address)
        setPerson(data.person)
        setCustomer(data)
      })
      .catch(err => console.error(err))
  }
  const FetchMechs = () => {

    let time = moment().format("HH:mm")
    let date = moment().format("YYYY-MM-DD")

    fetch('https://kiinteistohuolto.herokuapp.com/mechanics', {
      headers: { 'Access-Control-Allow-Origin': '*' }
    })
      .then(response => response.json())
      .then(data => {
        setMechanics(data)
        setService({ ...service, mechanic: data[0].mechanicid, date: date, time: time })
      })
      .catch(err => console.error(err))

  }

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    //date:'',time:'',duration: '',task:'',comment:'', mechanic:''

    if (service.date === '' || service.time === '' || service.task === '') {
      alert("Täytä pakolliset kentät")
    } else {

      const isMechanicNumber = (element) => element === service.mechanic;
      let mIndex = mechId.findIndex(isMechanicNumber);


      addService(service, customerid, customer, mechId[mIndex], mechName[mIndex], mechEmail[mIndex], mechPhone[mIndex]);
      setOpen(false);
    }
  }


  const handleCancel = () => {
    setOpen(false);
  }

  const inputChanged = (event) => {
    setService({ ...service, [event.target.name]: event.target.value });
  }

  const durationChanged = (event) => {
    let firstNumber = event.target.value.charAt(0);
    let secondNumber = event.target.value.charAt(1);
    if (firstNumber === '0' && secondNumber !== '') {
      event.target.value = event.target.value.substr(1);
    }
    if (event.target.value < 1) {
      event.target.value = 0;
    }
    setService({ ...service, [event.target.name]: event.target.value });
  }



  let mechName = [];
  let mechId = [];
  let mechEmail = [];
  let mechPhone = [];

  for (let i = 0; i < mechanics.length; i++) {
    mechName = [...mechName, mechanics[i].name]
    mechId = [...mechId, mechanics[i].mechanicid]
    mechEmail = [...mechEmail, mechanics[i].email]
    mechPhone = [...mechPhone, mechanics[i].phone]

  }

  const mechs = mechName.map((mech) =>
    <option value={mech}>{mech}</option>
  )


  const mechChanged = (event) => {
    for (let i = 0; i < mechanics.length; i++) {
      if (event.target.value === mechanics[i].name) {
        setService({ ...service, [event.target.name]: mechanics[i].mechanicid });
      }

    }
  }


  return (
    <div>
      <h1> </h1>
      <Button style={{ margin: 10 }} variant="outlined" color="primary" onClick={handleClickOpen}>
        Lisää uusi huoltotyö
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">uusi huoltotyö</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            type="date"
            margin="dense"
            id="date"
            name="date"
            value={service.date}
            onChange={inputChanged}
            label=""
            fullWidth

          />
          <TextField
            required
            type="time"
            margin="dense"
            id="time"
            name="time"
            value={service.time}
            onChange={inputChanged}
            label=""
            fullWidth
          />
          <TextField
            required
            type="number"
            step={0.1}
            min={0.0}
            margin="dense"
            id="duration"
            name="duration"
            value={service.duration}
            onChange={durationChanged}
            label="Työnkesto"
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="task"
            name="task"
            value={service.task}
            onChange={inputChanged}
            label="Työnkuvaus"
            fullWidth
          />
          <TextField
            margin="dense"
            id="comment"
            name="comment"
            value={service.comment}
            onChange={inputChanged}
            label="Kommentit"
            fullWidth
          />
          <FormControl >
            <InputLabel id="inputLabel">Asentaja</InputLabel>
            <NativeSelect
              id="mechanic"
              onChange={mechChanged}
              inputProps={{
                name: 'mechanic'
              }}
            >
              {mechs}

            </NativeSelect>

          </FormControl>
          <TextField
            disabled
            margin="dense"
            id="name"
            name="name"
            value=''
            label={name}
            fullWidth
          />
          <TextField
            disabled
            margin="dense"
            id="address"
            name="address"
            value=''
            label={address}
            fullWidth
          />
          <TextField
            disabled
            margin="dense"
            id="person"
            name="person"
            value=''
            label={person}
            fullWidth
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Keskeytä
          </Button>
          <Button onClick={handleClose} color="primary">
            Tallenna
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}