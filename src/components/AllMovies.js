import { Container } from "@material-ui/core"
import { useEffect, useState } from "react"
import { getData, updateMovieFav } from "../services/api"
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import { red } from '@material-ui/core/colors';
import { addToFavArray, removeFromFavAray } from "../services/localStorageHelper";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    alignItems: "center",
    alignContent: "center",
    margin: "auto",
    marginBottom: "10px",
    marginTop: "10px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const AllMovies = () => {

  const handleFavouriteTap = (movie) => {
    // let isFav = false;
    // if (movies[movie.id].isFav) {
    //   isFav = true;
    // }

    // isFav = !isFav;
    const isFav = !movies[movie.id].isFav;
    // localStorage.setItem(movie.id, isFav);
    if (isFav) {
      addToFavArray(movie.id);
    }
    else {
      removeFromFavAray(movie.id);
    }

    // console.log(movie)
    // console.log(`setting is fav of ${movie.id} to ${isFav}`)
    setMovies(prevMovies => updateMovieFav(prevMovies, movie.id, { isFav: isFav }));
    // setMovies(prevMovies => prevMovies[movie.id]: {})
  };

  const [pageNum, setPageNum] = useState(0)
  const [movies, setMovies] = useState({})
  const classes = useStyles();
  useEffect(() => {
    setMovies(getData())
    // getData()
    // .then(movies => setMovies(movies))
  }, [])

  // localStorage.clear();
  return (
    <Container>
      {Object.values(movies).map(m => (
        <Card key={m.id} className={classes.root}>
          <CardMedia
            className={classes.media}
            title="Paella dish"
            square
            image={"https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"}
          />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {m.name}
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" style={{ color: m.isFav ? "orange" : "grey" }} onClick={(event) => handleFavouriteTap(m)}>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Container>

  )
}

export default AllMovies;

