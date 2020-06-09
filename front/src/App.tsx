import React, { useState } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { Grid } from '@material-ui/core';
import MainPage from './pages/MainPage';
import CatalogsContext from './pages/LoadingPage/catalogsContext';
import LoadingPage from './pages/LoadingPage';
import { ListItem } from './components/componentWepPage/main';
import AboutPage from './pages/AboutPage';


function App() {
  const [catalogs, setCatalogs] = useState<ListItem[]>();

  const fetchCatalogs = async () => {
    const jsonReponse = await fetch('https://buoyant-habitat-279114.df.r.appspot.com/category/list', { method: 'GET' })
      .then((reponse) => reponse.json());
    setCatalogs(
      jsonReponse.map((categoryItem: any) => ({
        ...categoryItem,
        id: categoryItem._id,
      })),
    );
  };

  return (
    <div>
      <CatalogsContext.Provider value={{ state: catalogs, updateCatalogs: fetchCatalogs }}>
        <BrowserRouter>
          <Switch>
            <Route
              path="/:id"
              render={(props) => <MainPage {...props} />}
            />
            <Route exact path="/">
              <LoadingPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </CatalogsContext.Provider>
    </div>
  );
}

export default App;
