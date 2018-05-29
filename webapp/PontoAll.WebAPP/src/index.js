import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import ReduxThunkMiddleware from 'redux-thunk';
import { authReducer } from './reducers/auth';

const store = createStore(authReducer, applyMiddleware(ReduxThunkMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/login" component={() => <Login store={store}></Login>} />
            </div>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
