import { AppBar, Button, InputBase, makeStyles, Tab, Tabs } from "@material-ui/core"

import { useState } from "react"
import { getData, searchData } from "../services/api";
import AllMovies from "./AllMovies";
import Pagination from "./pagination";

const useStyles = makeStyles((theme) => ({
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(73)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const MoviesPage = () => {
    const classes = useStyles();
    const [tab, setTab] = useState(0);
    const [searchTxt, setSearchTxt] = useState("");
    const [searchMovies,setSearchMovies] = useState([]);

    const handleChange = (e, value) => {
        setTab(value)
    }

    const onButtonClick = (e) => {
        console.log(searchTxt)
        searchData(searchTxt,1).then(results => {
            setSearchMovies(results);
          //console.log(results);
        })
    }
    return (

        <>
            <AppBar position="static">
                <Tabs value={tab} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Explore movies" tabIndex={0} />
                    <Tab label="Favourites" tabIndex={1} />
                </Tabs>
                <InputBase
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    onChange={(event) => setSearchTxt(event.target.value)}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <Button variant="contained" color="primary" onClick={onButtonClick}>
                    Search
                </Button>
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