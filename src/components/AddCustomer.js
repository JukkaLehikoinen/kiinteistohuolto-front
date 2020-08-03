import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddCustomer(props) {
    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({name:'',address:'',ycode:'',person:'', telephone:'', email:'' })

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        props.addCusto(customer);
        setOpen(false);
    }

    const handleCancel = () => {
        setOpen(false);
    }

    const inputChanged = (event) => {
        setCustomer({...customer, [event.target.name]: event.target.value});
    }

    return(
        <div>
        <h1> </h1>
        <Button style={{margin:10}} variant="outlined" color="primary" onClick={handleClickOpen}>
        Lisää Asiakas
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Uusi asiakas</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            value={customer.name}
            onChange={inputChanged}
            label="Nimi"
            fullWidth
            
          />
           <TextField
            margin="dense"
            id="address"
            name="address"
            value={customer.address}
            onChange={inputChanged}
            label="Osoite"
            fullWidth
          />
          <TextField
            margin="dense"
            id="ycode"
            name="ycode"
            value={customer.ycode}
            onChange={inputChanged}
            label="Y-tunnus"
            fullWidth
          />
           <TextField
            margin="dense"
            id="person"
            name="person"
            value={customer.person}
            onChange={inputChanged}
            label="Yhteyshenkilö"
            fullWidth
          />
           <TextField
            margin="dense"
            id="telephone"
            name="telephone"
            value={customer.telephone}
            onChange={inputChanged}
            label="Puhelin"
            fullWidth
          />
           <TextField
            margin="dense"
            id="email"
            name="email"
            value={customer.email}
            onChange={inputChanged}
            label="Sähköposti"
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