import { useState } from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import {  IconButton } from "@material-ui/core";

export const favorite =[];



const FavoritesButton= (id)=>{
    const [isFav,setFav] = useState(false);


    const Liked = () => {
        setFav(!isFav);

        if(!isFav){

        favorite.push(id);

        }
        else{
            const index = favorite.indexOf(id);
            if (index > -1) {
                favorite.splice(index, 1);
                console.log(favorite);
                console.log("no");
            }


        }


     }

    return(
        
            <IconButton
            onClick={Liked}
            style={{color: isFav ? "red": "grey"}}
            > 
            <FavoriteIcon/>
            </IconButton> 

        )

}
export function favoritesList(movies){
    return movies;
}
export default FavoritesButton;