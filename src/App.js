import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles'
import Home from './pages/Home'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>
    </BrowserRouter>
)



