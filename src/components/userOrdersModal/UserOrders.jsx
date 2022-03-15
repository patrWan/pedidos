import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useForm, } from "react-hook-form";

import Alert from '../alert/Alert';
import { ListItemIcon, MenuItem } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';

import TableOrders from '../tableOrders/TableOrders';

export default function UserOrders() {
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [message, setMessage] = React.useState('');

    const { register, handleSubmit, watch, formState: { errors }, control } = useForm();

    const onSubmit = data => {
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setMessage('');
        setError(false);
    };

    return (
        <div>
            <MenuItem variant="text" color='warning' onClick={handleClickOpen}>
                <ListItemIcon>
                    <ShoppingBag />
                </ListItemIcon>
                Mis Pedidos
            </MenuItem>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Mis Pedidos</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        En esta seccion puede ver el estado y administrar de sus pedidos.
                    </DialogContentText>
                    <TableOrders/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}