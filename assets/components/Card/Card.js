import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';
import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { fleurimondColors } from '../theme';

const useStyles = makeStyles({
  container: {
    boxSizing: 'border-box',
    fontSize: '1rem',
    color: fleurimondColors.leapingLemon,
    lineHeight: 'normal',
    fontWeight: 600,
    padding: '64px 20px 48px',
    width: '100%',
    backgroundColor: fleurimondColors.white,
    textAlign: 'center',
    display: 'block',
  },

  cardImage: {
    paddingTop: '59%',
  },

  h2: {
    textAlign: 'center',
    padding: '23px 2px 13px 0 !important',
  },
});

const JFCharactersCard = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  console.log(history);

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters();
    console.log(match);
  }, []);

  const getCharacters = async () => {
    const one = 'https://swapi.dev/api/people/';
    const requestOne = await axios.get(one);
    requestOne.then(responses => setCharacters(responses.data.results));
  };

  const findCharactersName = characters => {
    const charactersKeys = Object.entries(characters).forEach(value => {
      const characterKeyValues = [value[1].name, value[1].films];
      console.log('Character Key Value', characterKeyValues);

      return characterKeyValues;
    });

    return charactersKeys;
  };

  findCharactersName(characters);

  return (
    <div className={classes.container}>
      <Navbar />
      <Hero />
      {/* Hero unit */}
      <Container maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {characters.map((characters, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Animated
                animationInDelay={0}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                isVisible
              >
                <Card>
                  <CardMedia
                    image="https://source.unsplash.com/random"
                    title="Image title"
                    className={classes.cardImage}
                  />
                  <CardContent className={classes.h2}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {characters.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Animated>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default JFCharactersCard;
