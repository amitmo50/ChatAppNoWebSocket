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
    const handleChange = e => setMessage(e.target.value);
    const handleClick = e => sendMessage(e.target.value);
    const handlePress = e => e.key === 'Enter'? sendMessage(e): null;
    return (
        <form className="form">
            <TextField variant="outlined" type="text" className={classes.input} placeholder="Type a message..." value={message} onChange={handleChange} onKeyPress={handlePress}/>
            <Button className={classes.sendButton} onClick={handleClick}><SendIcon/></Button>
        </form>
    );
}

export default Input;