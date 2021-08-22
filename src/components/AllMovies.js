import { Container } from "@material-ui/core"
import { useEffect, useState } from "react"
import { getData } from "../services/api"
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';


const AllMovies = () => {
    const [pageNum, setPageNum] = useState(0)
    const [movies, setMovies] = useState([])
    useEffect(() => {
        setMovies(getData())
        // getData()
        // .then(movies => setMovies(movies))
    }, [])
    return (
        <Container>
            {movies.map( m => (
                <Card key={m.id} >
                 <CardMedia
                   image={require("../assets/tree-736885__480.jpg")}
                   title="Paella dish"
                 />

                 <CardContent>
                   <Typography variant="body2" color="textSecondary" component="p">
                     {m.name}
                   </Typography>
                 </CardContent>

                 <CardActions disableSpacing>
                   <IconButton aria-label="add to favorites">
                     <FavoriteIcon />
                   </IconButton>
                   <IconButton aria-label="share">
                     <ShareIcon />
                   </IconButton>
                 </CardActions>
               </Card>
            )) }
        </Container>
   
    )
}

export default AllMovies;