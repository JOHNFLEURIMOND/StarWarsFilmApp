import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Animated } from 'react-animated-css';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import { fleurimondColors } from '../theme';

const useStyles = makeStyles({
  container: {
    margin: 0,
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

const JFCharacterPage = () => {
  const classes = useStyles();
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const one = 'https://swapi.dev/api/people/';
    const two = 'http://swapi.dev/api/people/?page=2';
    const three = 'http://swapi.dev/api/people/?page=3';
    const four = 'http://swapi.dev/api/people/?page=4';
    const five = 'http://swapi.dev/api/people/?page=5';
    const six = 'http://swapi.dev/api/people/?page=6';
    const seven = 'http://swapi.dev/api/people/?page=7';
    const eight = 'http://swapi.dev/api/people/?page=8';
    await axios.get(one).then(responses => setCharacters(responses.data.results));
    await axios.get(two).then(responses => setCharacters(responses.data.results));
    await axios.get(three).then(responses => setCharacters(responses.data.results));
    await axios.get(four).then(responses => setCharacters(responses.data.results));
    await axios.get(five).then(responses => setCharacters(responses.data.results));
    await axios.get(six).then(responses => setCharacters(responses.data.results));
    await axios.get(seven).then(responses => setCharacters(responses.data.results));
    await axios.get(eight).then(responses => setCharacters(responses.data.results));
  };

  useEffect(() => {
    getCharacters();
  }, []);

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
                    image="http://facetheforce.today/?i=1random/400?r=2"
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
        <button
          onClick={() => history.push("/", { from: "Characters" })}
        >
          HomePage
            </button>
      </Container>
    </div>
  );
};

export default JFCharacterPage;
