import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Animated } from 'react-animated-css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';

import "./../../index.css";

import { fleurimondColors } from '../theme';

const useStyles = makeStyles({
  container: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    boxSizing: 'border-box',
    fontSize: '1rem',
    margin: 0,
    color: fleurimondColors.black,
    lineHeight: 'normal',
    fontWeight: 600,
    width: '100%',
    backgroundColor: fleurimondColors.white,
    textAlign: 'center',
    display: 'block',
    padding: '5% 0 10% ',
  },

  cardImage: {
    paddingTop: '59%',
  },

  h2: {
    textAlign: 'center',
    padding: '23px 2px 13px 0 !important',
  },
  title: {
    paddingTop: '2rem !important',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    textAlign: 'center',
    display: 'block',
  },
  button: {
    marginTop: "5rem",
    fontSize: "13px",
    padding: "8px 11px",
    color: fleurimondColors.leapingLemon,
    backgroundColor: fleurimondColors.black,
    borderColor: fleurimondColors.black,
    borderRadius: '3px',
    borderStyle: 'solid',
    borderWidth: '1px',
    cursor: 'pointer',
    display: 'inline-block',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    letterSpacing: '0.02em',
    lineHeight: 1,

    '&:hover,&:active,&:focus': {
      backgroundColor: fleurimondColors.leapingLemon,
      borderColor: fleurimondColors.leapingLemon,
      color: fleurimondColors.black,
      textDecoration: 'none',
    },

    '&:disabled': {
      backgroundColor: fleurimondColors.foam,
      borderColor: fleurimondColors.foam,
      color: "#ecf0f3",
      opacity: 1,
      pointerEvents: 'none', // counterintuitive but this allows hover events to fire on disabled buttons (e.g. to show a tooltip) - https://jakearchibald.com/2017/events-and-disabled-form-fields/
    },
  }
});

const JFCharacter = () => {
  const classes = useStyles();
  // Data pushed from main page from Film api call.
  const history = useHistory();
  const filmCharacterUrls = history.location.state.filmCharacters;
  const { filmTitle } = history.location.state;

  const [characters, setCharacters] = useState([]);

  const getCharacters = () => {
    // Create axios request for all characters
    const requests = filmCharacterUrls.map(async url => {
      const request = await axios.get(url);
      return request;
    });

    // wait for all axios request to finish.
    Promise.all(requests)
      .then(responses => {
        const characterNameArray = responses.map(response => response.data.name);
        // this set state with the characters for the indiviual film;
        return setCharacters(characterNameArray);
      })
      .catch(
        errors => errors
        // react on errors.
      );
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className={classes.container}>
      <Navbar />
      {/* Hero unit */}
      <Hero />
      {/* End hero unit */}
      <Container maxWidth="md">
        <Typography gutterBottom variant="h1" fontWeight="fontWeightRegular" component="h2" className={classes.title}>
          {filmTitle}
        </Typography>

        <Grid container spacing={4} style={{ paddingTop: '2.5rem' }}>
          {/* Map thru the state which contains the character Names of selected film and creates a card and renders characters name on the card */}

          {characters.map((character, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Animated
                animationInDelay={0}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                isVisible
              >
                <Card>
                  <CardMedia
                    title="Starwars title"
                    image="https://facetheforce.today/?i=1random/400?r=2"
                    className={classes.cardImage}
                  />
                  <CardContent className={classes.h2}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {/* Card Info */}
                      {character}
                    </Typography>
                  </CardContent>
                </Card>
              </Animated>
            </Grid>
          ))}
        </Grid>
        <button
          onClick={() => history.push("/", { from: "Characters" })}
          className={classes.button}
        >
          HomePage
            </button>

      </Container>
    </div>
  );
};

export default JFCharacter;
