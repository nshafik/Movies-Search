import axios from "axios";
import { useEffect, useState } from "react";
import PaginationLink from "../components/pagination";
import SingleMovie from  "../components/singleMovie" ;

const Trending = () => {
    const [page, setPage]= useState(1)
    const [content, setContent] = useState([])
    const fetchTrending = async()=>{
        const {data} = await axios.get(

        `https://api.themoviedb.org/3/trending/all/day?api_key=6b9de0a26206bfb6f4b696c7d990fef8&page=${page}`
        );

        setContent(data.results)

    };
    useEffect(() => {
        fetchTrending();
    },[page])
    return(
        <div>
            {content && <PaginationLink setPage={setPage} />}
        
        <span className= 'pageTitle'></span>
        <div className= 'trending'>
            {content && 
            content.map((c)=> (
            <SingleMovie
            key= {c.id}
            id= {c.id}
            poster={c.poster_path}
            title={c.title||c.name}
            />
            )
            )}        
        
        </div>
        
        </div>

        
        );
};

export default Trending;