import React from 'react'
import Game from './components/Game'
import Menu from './components/Menu'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/game' component={Game}/>
          <Route path='/' component={Menu}/>
        </Switch>
      </BrowserRouter>
      
    </>
  );
}
