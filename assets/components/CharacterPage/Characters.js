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
import { fleurimondColors } from '../theme';
import JFCharacterPage from './CharacterPage';

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

const JFCharacter = () => {
  const classes = useStyles();
  // Data pushed from main page from Film api call.
  const history = useHistory();
  const filmCharacterUrls = history.location.state.filmCharacters;
  const { filmTitle } = history.location.state;

  const [characters, setCharacters] = useState([]);

  const getCharacters = () => {
    // Create axios reuquest for all characters
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
        <h2>{filmTitle}</h2>

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
                    image="http://facetheforce.today/?i=1random/400?r=2"
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
      </Container>
    </div>
  );
};

export default JFCharacter;
