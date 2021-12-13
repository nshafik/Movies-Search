import { img_300 } from "../services/config";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Share from'./ShareButton'
import FavoritesButton from "./FavoritesButton";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '130%', 
  },

}));

export default function SingleMovie({id,
    poster,
    title,
    }) {
  const classes = useStyles();
 

  return (

    <Card className={classes.root}>
      <CardHeader
        title= {title}
      />
      <CardMedia
        className={classes.media}
        image = {`${img_300}/${poster} `}
        
      />
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoritesButton id= {id}/>
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        
      </CardActions>
      
    </Card>
  );
}

