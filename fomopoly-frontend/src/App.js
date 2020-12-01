import React from 'react'
import Game from './components/Game'
import Menu from './components/Menu'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AboutPageContainer from './components/AboutPageContainer';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/game' component={Game}/>
          <Route path='/about' component={AboutPageContainer}/>
          <Route path='/' component={Menu}/>
        </Switch>
      </BrowserRouter>
      
    </>
  );
}
