import React,{Component} from 'react';
import { BrowserRouter ,Switch,Route } from "react-router-dom";
import App from '../App'
import Detail from './Detail';


const Router = () => (
    <BrowserRouter>
    <Switch>
    <Route path="/" component={App} exact></Route>
    <Route path="/detail/:id" component={Detail}></Route>
    </Switch>
    </BrowserRouter>
);

export default Router;