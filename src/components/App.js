import React from 'react';
import './App.sass';
import { Home, StartReact, StartSass, UseState, QrCode, Maps, Login, Google, Facebook, PrivacyPolicy } from './'
import { Router, Route, Link } from 'react-router-dom'
import { createBrowserHistory } from "history"
const history = createBrowserHistory()

export default () => {
  return(
    <div className='App'>
      <Router history={history}>
        <Link to={'/'} className='logo'>React Demos</Link>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/react' component={StartReact} />
        <Route path='/sass' component={StartSass} />
        <Route path='/state' component={UseState} />
        <Route path='/maps' component={Maps} />
        <Route path='/qrcode' component={QrCode} />
        <Route path='/login' component={Login} />
        <Route path='/google' component={Google} />
        <Route path='/facebook' component={Facebook} />
        <Route path='/privacy' component={PrivacyPolicy} />
      </Router>
    </div>
  )
}