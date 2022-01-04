import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useForm, Controller } from "react-hook-form";

import { auth } from '../../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const { register, handleSubmit, watch, formState: { errors }, control } = useForm();
  const onSubmit = data => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  console.log(watch("email"));

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
          <form onSubmit={handleSubmit(onSubmit)} id="loginForm">


            <TextField
              autoFocus
              margin="dense"
              id="email"
              name='email'
              label="Correo Electronico"
              type="email"
              fullWidth
              variant="standard"
              {...register("email")}
            />

            <TextField
              margin="dense"
              id="password"
              label="Contraseña"
              type="password"
              fullWidth
              variant="standard"
              name='password'
              {...register("password")}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={() => { }} form="loginForm" type='submit'>Iniciar Sesión</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}