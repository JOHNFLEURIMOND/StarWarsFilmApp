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
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import CharacterPage from './components/CharacterPage/CharacterPage';
import Characters from './components/CharacterPage/Characters';
import "./index.css";
import { fleurimondColors } from './components/theme';

const useStyles = makeStyles({
  root: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    boxSizing: 'border-box',
    minWidth: 0,
    fontSize: '1rem',
    color: fleurimondColors.black,
    lineHeight: 'normal',
    fontWeight: 600,
    height: '70vw',
    width: '100%',
    backgroundColor: fleurimondColors.white,
  },
  a: {
    color: fleurimondColors.black,
    textDecoration: 'none',
  },
  h2: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    textAlign: 'center',
    display: 'block',
    padding: '23px 2px 13px 0 !important',
  },
  title: {
    paddingTop: '2rem !important',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    textAlign: 'center',
    display: 'block',
  },
  gridContainer: {
    padding: '5% 0 15% ',
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
      {/* Hero unit */}
      <Hero />
      <Typography gutterBottom variant="h1" fontWeight="fontWeightRegular" component="h2" className={classes.title}>
        Star War Films
        </Typography>
      {/* End hero unit */}
      <div className={classes.container}>
        <Container maxWidth="md">
          <Grid container spacing={4} className={classes.gridContainer}>
            {films.map((film, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Animated
                  animationInDelay={0}
                  animationIn="slideInUp"
                  animationOut="slideOutDown"
                  isVisible
                >
                  {/* Card unit */}
                  <Card>
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
      <Footer />
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
