import React from 'react';
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const SpeechBubble = () => {
  const classes = useStyles();

  return (
    <div className={classes.speechBubble}>
      <Typography variant='subtitle1'>Jerry</Typography>
      <Typography variant='subtitle1'>Hello!</Typography>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  speechBubble: {
    width: 300,
    background: '#00bfb6',
    padding: 5,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'arial',
    position: 'relative',

    '&:before': {
      content: "''",
      width: 0,
      height: 0,
      position: 'absolute',
      borderLeft: '10px solid transparent',
      borderRight: '10px solid #00bfb6',
      borderTop: '10px solid #00bfb6',
      borderBottom: '10px solid transparent',
      right: 24,
      //bottom: '-13px',
      bottom: '-20px'


/*      width: 40,
      height: 40,
      bottom: '-100px',
      background: 'rgba(0,0,0,0.1)',
      transform: 'rotate(45deg)'*/
    }
  }
}));

export default SpeechBubble;