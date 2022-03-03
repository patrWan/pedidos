import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import AlertTitle from '@mui/material/AlertTitle';

export default function TransitionAlerts(props) {
    const { open, setOpen, message } = props;

    return (
        <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
                <Alert severity="error">
                    <AlertTitle><strong>Error</strong></AlertTitle>
                    {message}
                </Alert>
            </Collapse>
        </Box>
    );
}
