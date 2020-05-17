import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import MainPage from './pages/MainPage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            path="/:id"
            render={(props) => <MainPage {...props} />}
          />
          <Route exact path="/">
            <Redirect to="/1" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
