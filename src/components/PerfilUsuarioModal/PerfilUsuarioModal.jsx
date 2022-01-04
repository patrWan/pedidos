import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useForm } from "react-hook-form";
//Firebase
import { auth } from '../../firebase/firebaseConfig';
import { updateProfile } from "firebase/auth";

export default function PerfilUsuarioModal(props) {
    const { user } = props;
    const [open, setOpen] = useState(false);

    const { register, handleSubmit, watch, formState: { errors }, control } = useForm();

    const onSubmit = data => { 
        updateProfile(auth.currentUser, {
            displayName: data.userDisplayName,
        }).then(() => {
            // Profile updated!
            alert("Perfil actualizado!!", auth.currentUser.displayName);
            
        }).catch((error) => {
            // An error occurred
            alert(error);
        });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Button variant="text" color='warning' onClick={handleClickOpen}>
                Mi Perfil
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Mi Perfil</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Gestiona tu información.
                    </DialogContentText>
                    <form onSubmit={handleSubmit(onSubmit)} id="profileForm">


                        <TextField
                            autoFocus
                            margin="dense"
                            id="uid"
                            name='uid'
                            label="UID"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={user.uid}
                            disabled={true}
                            {...register("uid")}
                        />

                        <TextField
                            margin="dense"
                            id="userEmail"
                            label="Correo Electronico"
                            type="userEmail"
                            fullWidth
                            variant="standard"
                            name='userEmail'
                            defaultValue={user.email}
                            {...register("userEmail")}
                        />

                        <TextField
                            margin="dense"
                            id="userDisplayName"
                            label="Nombre"
                            type="userDisplayName"
                            fullWidth
                            variant="standard"
                            name='userDisplayName'
                            defaultValue={user.displayName}
                            
                            {...register("userDisplayName")}
                        />
                        <p>photoUrl : {user.photoURL}</p>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={() => { }} form="profileForm" type='submit'>Aceptar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
