import React from 'react';
import { Animated } from 'react-animated-css';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { fleurimondColors } from '../theme';

const useStyles = makeStyles({
  nav: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    boxSizing: 'border-box',
    minWidth: 0,
    fontSize: '1rem',
    color: fleurimondColors.leapingLemon,
    lineHeight: 'normal',
    fontWeight: 600,
    margin: 0,
    padding: '',
    height: '4rem',
    width: '100%',
    backgroundColor: fleurimondColors.black,
  },

  li: {
    listStyle: 'none',
  },
  ul: {
    width: '52vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 0,
    padding: '1rem',
  },

  a: {
    color: fleurimondColors.leapingLemon,
    textDecoration: 'none',
  },
});

const JFHeader = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative" className={classes.nav}>
      <Toolbar>
        <Typography variant="h6" className="Navbar" noWrap>
          <ul className={classes.ul}>
            <li className={classes.li}>
              <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <Link to="/" className={classes.a}>
                  Marvel
                </Link>
              </Animated>
            </li>
            <li className={classes.li}>
              <Link to="/CharacterPage" className={classes.a}>
                Characters
                </Link>
            </li>
          </ul>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default JFHeader;
