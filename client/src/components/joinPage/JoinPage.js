import React, { useState } from "react";
import {Link} from 'react-router-dom';
import './joinPage.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    button: {
        background: '#2979FF',
        color: "#fff !important",
        textTransform: "uppercase",
        textDecoration: 'none',
        padding: '15px',
        borderRadius: '5px',
        display: 'inline-block',
        border: 'none',
        width: '100%',
        marginTop: '20px',
        '&:hover': {
            background: "#1d2be6",
        },
    },
    joinInput: {
        borderRadius: '0',
        background: '#fff',
        width: '100%',
    },
    joinInputSecond: {
        borderRadius: '0',
        background: '#fff',
        width: '100%',
        marginTop: '20px'
    }
}));

const JoinPage = () => {
    const [user, setUser] = useState('');
    const [room, setRoom] = useState('');

    
    const classes = useStyles();
    const handleChange = e => setUser(e.target.value);
    
    return (
      <div className="outerLoginContainer">
          <div className="innerLoginContainer">
              <h1 className="heading">Join Chat App</h1>
              <div><TextField variant="outlined" placeholder="Name" className={classes.joinInput} value={user} type="text" onChange={handleChange}></TextField></div>
              <div>
                <FormControl variant="outlined" className={classes.joinInputSecond}>
                    <InputLabel id="input-label">Room</InputLabel>
                    <Select
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    >
                        <MenuItem value={"Room1"}>Room1</MenuItem>
                        <MenuItem value={"Room2"}>Room2</MenuItem>
                    </Select>
                </FormControl>
              </div>
              <Link onClick={e => (!user || !room)?e.preventDefault():null} to={`/chat?name=${user}&room=${room}`}>
                  <Button variant="contained" className={classes.button} type="submit">Sign In</Button>
              </Link>
          </div>
      </div>
    );
  }
  
  export default JoinPage;