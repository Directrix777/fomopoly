import React from 'react'
import Game from './components/Game'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Game}/>
        </Switch>
      </BrowserRouter>
      
    </>
  );
}
