import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../App';
import Recipe from './Recipe'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/showcase" component={App} />
            <Route path="/footer-container" component={App} />
            <Route path="/about-section" component={App} />
            <Route path="/video-container" component={App} />
            <Route path="/recipe/:id" component={Recipe} />
        </Switch>
    </BrowserRouter>
)

export default Router;