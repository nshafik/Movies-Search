import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import MoviesPage from './Pages/MoviesPage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome}/>

          <Route path="/movies" component={MoviesPage}/>
        </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
