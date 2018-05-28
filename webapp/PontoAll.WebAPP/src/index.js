import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={Login}/>
        </div>
    </BrowserRouter>
, document.getElementById('root'));
