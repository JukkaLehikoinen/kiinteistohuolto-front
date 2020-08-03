import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddMechanic(props) {
    const [open, setOpen] = React.useState(false);
    const [mechanic, setMechanic] = React.useState({name:'', email:'', phone:''})

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        props.addMech(mechanic);
        setOpen(false);
    }

    const handleCancel = () => {
        setOpen(false);
    }

    const inputChanged = (event) => {
        setMechanic({...mechanic, [event.target.name]: event.target.value});
    }

    return(
        <div>
        <h1> </h1>
        <Button style={{margin:10}} variant="outlined" color="primary" onClick={handleClickOpen}>
        Lisää Asentaja
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Uusi asentaja</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            value={mechanic.name}
            onChange={inputChanged}
            label="Nimi"
            fullWidth
          />
           <TextField
            margin="dense"
            id="email"
            name="email"
            value={mechanic.email}
            onChange={inputChanged}
            label="Sähköposti"
            fullWidth
          />
          <TextField
            margin="dense"
            id="phone"
            name="phone"
            value={mechanic.phone}
            onChange={inputChanged}
            label="Puhelin"
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