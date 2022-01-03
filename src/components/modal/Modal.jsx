import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Iniciar Sesión
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Inicia Sesión</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ingrese su correo registrado y contraseña para poder acceder a las opciones de pedidos.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Correo Electronico"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Contraseña"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Iniciar Sesión</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}