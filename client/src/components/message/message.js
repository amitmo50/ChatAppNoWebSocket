import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import './message.css';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ReactEmoji from 'react-emoji';

const useStyles = makeStyles(theme => ({
  sentText: {
    color: '#262626',
    margin: '10px 0',
  }
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&:after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const Message = ({message: {id, from, message}, currentUser}) => {

  let isSentByCurrentUser = false;

  if(currentUser.id === id) {
    isSentByCurrentUser = true;
  }
  
  const classes = useStyles();
  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <div className={classes.sentText}>
                <StyledBadge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}
                  variant="dot"
                >
                  <Avatar alt={currentUser.userName} src="/broken-image.jpg"/>
                </StyledBadge>
            </div>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(message)}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(message)}</p>
            </div>
            <div className={classes.sentText}>
                <StyledBadge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                  }}
                  variant="dot"
                >
                  <Avatar alt={from} src="/broken-image.jpg"/>
                </StyledBadge>
            </div>
          </div>
        )
  );
}

export default Message;