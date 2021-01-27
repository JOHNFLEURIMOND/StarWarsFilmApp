import React, { useState, useEffect } from 'react';
import {
 Link, Route, BrowserRouter as Router, Switch 
} from 'react-router-dom';
import axios from 'axios';
import { Animated } from 'react-animated-css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import CharacterPage from './components/CharacterPage/CharacterPage';
import Characters from './components/CharacterPage/Characters';

import { fleurimondColors } from './components/theme';

const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    minWidth: 0,
    fontSize: '1rem',
    color: fleurimondColors.black,
    lineHeight: 'normal',
    fontWeight: 600,
    padding: '',
    height: '100vw',
    width: '100%',
    backgroundColor: fleurimondColors.white,
  },
  a: {
    color: fleurimondColors.black,
    textDecoration: 'none',
  },
  cardImage: {
    paddingTop: '59%',
  },
});

const Homepage = () => {
  const classes = useStyles();

  const [films, setFilmsTitle] = useState([]);

  const getStarWarsFilms = async () => {
    await axios
      .get('https://swapi.dev/api/films/')
      .then(responses => setFilmsTitle(responses.data.results));
  };

  useEffect(() => {
    getStarWarsFilms();
  }, []);

  return (
    <div className={classes.root}>
      <Navbar />
      <Hero />
      <div className={classes.container}>
        {/* Hero unit */}
        <Container maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} style={{ paddingTop: '2.5rem' }}>
            {films.map((film, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
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
                      <Typography gutterBottom variant="h5" component="h2" key={film.url}>
                        <Link
                          to={{
                            pathname: '/CharacterPage/:id',
                            state: {
                              filmCharacters: film.characters,
                              filmTitle: film.title,
                            },
                          }}
                          className={classes.a}
                        >
                          {film.title}
                        </Link>
                      </Typography>
                    </CardContent>
                  </Card>
                </Animated>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/CharacterPage/" exact component={CharacterPage} />
      <Route path="/CharacterPage/:id" component={Characters} />
    </Switch>
  </Router>
);

export default App;
