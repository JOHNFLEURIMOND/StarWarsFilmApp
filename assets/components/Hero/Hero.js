import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { fleurimondColors } from '../theme';

const useStyles = makeStyles({
  container: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    boxSizing: 'border-box',
    fontSize: '1rem',
    color: fleurimondColors.leapingLemon,
    lineHeight: 'normal',
    fontWeight: 600,
    padding: '64px 20px 48px',
    height: '550px',
    width: '100%',
    backgroundImage: `url("https://starwarsblog.starwars.com/wp-content/uploads/2015/05/EP3_LIC_1010-3-2400x920.jpg")` ,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    textAlign: 'center',
    display: 'block',
    overflow: 'hidden',
  },
});

const JFHero = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container maxWidth="sm">
   
      </Container>
    </div>
  );
};

export default JFHero;
