import { AppBar, Tab, Tabs } from "@material-ui/core"

import { useState } from "react"
import AllMovies from "./AllMovies"
import Pagination from "./pagination";

const MoviesPage = () => {
    const [tab, setTab] = useState(0)
    const handleChange=(e, value)=>{
        setTab(value)
    }
    return (
        
        <>
        
        <AppBar position="static">
            <Tabs value={tab} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Explore movies" tabIndex={0}/>
                <Tab label="Favourites"  tabIndex={1}/>
            </Tabs>
        </AppBar>


        {tab === 0 && 
        (
            <div position= "center">
            <AllMovies/>
            <Pagination class= "center"/>
            </div>
          
        )}

        {tab === 1 && (
            <h1>
                Favourites
            </h1>
        )}

        </>
    )
}

export default MoviesPage