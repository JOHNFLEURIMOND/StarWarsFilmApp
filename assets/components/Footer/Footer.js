import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

import { fleurimondColors } from '../theme';

const useStyles = makeStyles({
  footer: {
    boxSizing: 'border-box',
    fontSize: '20px',
    height: '55px',
    textAlign: 'center',
    width: '100%',
    backgroundColor: fleurimondColors.black,
    minHeight: '8vh',
    display: 'flex',
    padding: '20px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    bottom: 0,
  },

  a: {
    textDecoration: 'none',
    color: fleurimondColors.leapingLemon,
    '&:hover,&:active,&:focus': {
      borderColor: fleurimondColors.white,
      color: fleurimondColors.white,
    },
  },
  ul: {
    width: '52vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: '2%',
    listStyle: 'none',
  },
});

const JFFooter = props => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.footer}>
      <Toolbar>
        <Typography variant="h6" className="Navbar" noWrap>
          <ul className={classes.ul}>
            <li>
              <a href="#about" className={classes.a}>
                {moment().format('llll')}
              </a>
            </li>
            <li>
              <a href="https://twitter.com/TCODEMONGER" className={classes.a}>
                Twitter
              </a>
            </li>
            <li>
              <a href="https://github.com/JOHNFLEURIMOND" className={classes.a}>
                Github
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/john-fleurimond" className={classes.a}>
                Linkedin
              </a>
            </li>
          </ul>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default JFFooter;
