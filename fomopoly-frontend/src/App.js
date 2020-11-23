import React from 'react'
import Board from './components/Board'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Board}/>
        </Switch>
      </BrowserRouter>
      
    </>
  );
}
