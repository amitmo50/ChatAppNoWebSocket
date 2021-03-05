import React from 'react';
import './input.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    input: {
        border: 'none',
        borderRadius: '0',
        width: '100%',
        fontSize: '1.2em',
    },
    sendButton: {
        color: '#fff !important',
        textTransform: 'uppercase',
        textDecoration: 'none',
        background: '#2979FF',
        padding: '10px',
        display: 'inline-block',
        border: 'none',
        width: '20%',
        '&:hover': {
            background: "#1d2be6",
         },
    }
}));


const Input = ({sendMessage, message, setMessage}) => {
    const classes = useStyles();
    
    return (
        <form className="form">
            <TextField variant="outlined" type="text" className={classes.input} placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter'? sendMessage(e): null}/>
            <Button className={classes.sendButton} onClick={(e) => sendMessage(e)}><SendIcon/></Button>
        </form>
    );
}

export default Input;