import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/homePage/home';
import Favorites from './pages/favoritesPage/favoriteMovies';
import MovieDetails from './pages/movieDetails/movieDetails';
import NotFound from './pages/notFoundPage/404NotFound';
import Login from './pages/login/Login';
import {BrowserRouter , Switch , Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter> 
      <Switch>
        <Route path={"/"} exact component={Home}/>
        <Route path={"/Home"} exact component={Home}/>
        <Route path={"/Favorites"} exact component={Favorites}/>
        <Route path={"/Login"} exact component={Login}/>
        <Route path={"/movieDetails/:id"} exact component={MovieDetails}/>
        <Route path={"*"} exact component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App ;