import React from 'react';
import Header from "../components/Header";
import Nav from "../components/BottomNav";
import Trending from './Trending';
import Favorites from './Favorites';
import Search from './Search';

import { Container } from '@material-ui/core';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import { favorite } from '../components/FavoritesButton';



function MoviesPage(){
    
    return(
        <BrowserRouter>
            <Header/>
                <Container>
                    <Switch>
                        <Route exact path = '/movies/' component ={Trending} />
                        <Route path = '/movies/favorites' component ={Favorites }/>
                        <Route path = '/movies/search' component ={Search}/>
                    </Switch>
                </Container>
                
            <Nav />

        </BrowserRouter>

    );
}

export default MoviesPage;
