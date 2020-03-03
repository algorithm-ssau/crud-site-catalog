import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            render={MainPage}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
