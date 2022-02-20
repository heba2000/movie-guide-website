import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/homePage/home';
import Favorites from './pages/favoritesPage/favoriteMovies';
import MovieDetails from './pages/movieDetails/movieDetails';
import NotFound from './pages/notFoundPage/404NotFound';
import Login from './pages/login/Login';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LanguageContext } from "./context/languageContext";
import { LoginContext } from './context/loginContext';
import React, { useState } from "react";
import AllMovies from './pages/allMoviesPage/allMovies';

function App() {
  const [contextLang, setContextLang] = useState('en')
  const [loginContext, setLoginContext] = useState(false)

  return (
    <div
      // dir={contextLang === "ar" ? "rtl" : "ltr"}
      // className={contextLang === "ar" ? "text-right" : "text-left"}
    >

      <LoginContext.Provider value={{ loginContext, setLoginContext }}>
        <LanguageContext.Provider value={{ contextLang, setContextLang }}>
          <BrowserRouter>
            <Switch>
              <Route path={"/"} exact component={Home} />
              <Route path={"/Home"} exact component={Home} />
              <Route path={"/AllMovies"} exact component={AllMovies} />
              <Route path={"/Favorites"} exact component={Favorites} />
              <Route path={"/Login"} exact component={Login} />
              <Route path={"/movieDetails/:id"} exact component={MovieDetails} />
              <Route path={"*"} exact component={NotFound} />
            </Switch>
          </BrowserRouter>
        </LanguageContext.Provider>
      </LoginContext.Provider>

    </div>
  );
}

export default App;