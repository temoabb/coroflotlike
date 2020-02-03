import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'

import Header from './components/Header'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App
