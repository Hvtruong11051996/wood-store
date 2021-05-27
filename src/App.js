import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Loading from './components/Loading';
import ScrollTop from './components/ScrollTop';
import Routes from './routers';

function App() {

  return (
    <div className="the-garden">
      <Suspense fallback={<Loading />}>
        <Router>
          <Switch>
            {Routes.map((route, index) => {
              if (!route.isPrivate) {
                return (
                  <Route
                    key={index}
                    component={route.component}
                    path={route.path}
                    exact
                  />
                )
              }
            })}
          </Switch>
        </Router>
      </Suspense>
      <ScrollTop></ScrollTop>
    </div>
  );
}

export default App;
