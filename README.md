# :checkered_flag:What It Looks Like :checkered_flag:: 

# My Awesome Project
Starwars films and Character App

# How It's Made :nut_and_bolt:🔨 :hammer::wrench::


## Assignment:
 In the following two slides, you see a rough sketch of a web app made for Star Wars fans. Your mission is to implement this functionality in a React app. The implementation must be responsive and should adapt itself to the screen sizes of mobile/desktop. 

With this assignment, I was to create a app with landing page with a list of all the Star Wars Films. When the Film is selected, you are then routed to another page rendering on a list of the characters from selected film. 

In App.js, I have the `Homepage` comnponent where I am doing my first `Axios` api call for the Star Wars Films. Once I set my state to the data response from the api, I then `Map()` thru the state which contains the films names from the api film and creates a card and renders the title on the card
 
```const [films, setFilmsTitle] = useState([]);

  const getStarWarsFilms = async () => {
    await axios
      .get('https://swapi.dev/api/films/')
      .then(responses => setFilmsTitle(responses.data.results));
  };
  ```



 With `React-Router-Dom` & a hook called `Link` I was able to use state of the Link to pass that data of characters in each film ` filmCharacters: film.characters,`  and film title `filmTitle: film.title,`, I only need the Film characters which is a list of character url endpoints and the name of the film from my api call so I can pass it to the state for the next page which is `Character.js`.

```<Card>
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
```

  Once the user clicks on that `Link` for the film, the user will then be routed to `Character.js` and here I imported `useHistory` and with this hook from `React-Router-Dom` I have access to data passed from the `Homepage component` in `App.js`. By declaring the `useHistory()` in the variable `history` then getting the state value in location of the history object like so `history.location.state.filmCharacters`. remember we want the list of characters from that selected film so I made a function to handle the url endpoints of characters in the Films data object.

```const getCharacters = () => {
    const requests = filmCharacterUrls.map(async url => {
      const request = await axios.get(url);
      return request;
    });
 ```

 once we create axios request for all characters, wait for all axios request to finish, then set state with the characters for the indiviual film.
 

 ```Promise.all(requests)
    .then(responses => {
    const characterNameArray = responses.map(response => response.data.name);
      return setCharacters(characterNameArray);
      })
  ```

## Data:
 You will fetch the StarWars data from the public API https://swapi.dev/

## State Management: 
Please use React Hooks and/or Redux as deemed necessary.

## Assets: 
In the slides, we see a logo and a background. You are free to use the images that are in these slides or just search for “star wars logo” and “stars background”. The final app does not need to follow the same ( ugly :) ) design as in this file. You are most welcome to modify the design as you like, as long as the dynamic behaviour is correctly implemented.  We would like you to use Material UI for the look-and-feel https://material-ui.com/ 

## Layout: 
If the screen is wide, use a grid layout to show the list in multiple columns 

## Coding Style:
As for coding style, we follow the Airbnb guidelines  https://github.com/airbnb/javascript
# Portfolio :open_file_folder::

** :computer:   WEBSITE:** [John Fleurimond](http://johnfleurimond.com)

# How To Get It Started :arrow_forward: :

## Installation

1. Clone repo
2. run `npm install`

## Available Scripts

In the project directory, you can run:

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run dev`

To get the app started, cd into folder and run `npm run dev` after running `build` command


Runs the app in the development mode.<br>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.


### `npm run prettier`
This corrects the format.


/assets
  /components
    /Card
    /CharacterPage
    /Hero
    /Navbar
