import React from 'react';
import {Alert, Snackbar} from "@mui/material";

export const Snack = ({isOpen, handleClose = Function.prototype}) => {
    return (
        <Snackbar
            open={isOpen}
            onClose={handleClose}
            autoHideDuration={3000}
            severity="success"
        >
            <Alert>
                The product has been added to the cart
            </Alert>
        </Snackbar>
    );
};