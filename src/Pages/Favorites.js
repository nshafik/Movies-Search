// `https://api.themoviedb.org/3/movie/80752?api_key=6b9de0a26206bfb6f4b696c7d990fef8&language=en-US`
import axios from "axios";
import { useEffect, useState } from "react";
import { favorite } from "../components/FavoritesButton";
import SingleMovie from  "../components/singleMovie" ;



const FavoritesPage = () => {
    const id = "80752";
    const [content, setContent] = useState([])
    const fetchTrending = async()=>{
        const {data} = await axios.get(

            `https://api.themoviedb.org/3/movie/${id}?api_key=6b9de0a26206bfb6f4b696c7d990fef8&language=en-US`
        );

        setContent(data)
    };
    useEffect(() => {
        fetchTrending();
    },)
    return(
        <div>
        
        <span className= 'pageTitle'></span>
        <div className= 'trending'>
            {
            <SingleMovie
            key= {content.id}
            id= {content.id}
            poster={content.poster_path}
            title={content.name || content.title}
            
            />
            
            }        
        
        </div>
        
        </div>

        
        );
};

export default FavoritesPage;


