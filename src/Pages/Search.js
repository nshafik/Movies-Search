import { Button, Tabs, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import SingleMovie from '../components/singleMovie';
import axios from 'axios';
import PaginationLink from '../components/pagination';


export default function Search () {
    const [page, setPage] = useState(1);
    const [text, setText] = useState("");
    const [numOfPages,setNumOfPages]=useState();
    const [content,setContent]=useState();
   
   const fetchSearch =async()=>{
       const {data}=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6b9de0a26206bfb6f4b696c7d990fef8&language=en-US&query=${text}&page=${page}`
       );
    setContent(data.results)
    setNumOfPages(data.total_pages)
    console.log(data.results)
   }
   useEffect(()=>
   {
       window.scroll(0,0);
       fetchSearch();
    },[page]);

   return(<div>
        <div>
            
            <TextField 
            label= "Search"
            onChange={(e)=> setText(e.target.value)}
            />
            <Button style ={{marginLeft:10}}
            onClick={fetchSearch}
            >
                <SearchIcon/>

            </Button>
        
        </div>
        {content && 
        <PaginationLink setPage={setPage} numOfPages={numOfPages}  />
        }

        <div className= 'trending'>
            {content && 
            content.map((c)=> (
            <SingleMovie
            key= {c.id}
            id= {c.id}
            poster={c.poster_path}
            title={c.title||c.name}
            />
            ))}   

            {text && !content && <h2>Searching..</h2>}     

        
        </div>

        </div>
        );
}