import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'
import styled from 'styled-components';
import background from '../../assets/img/login-background.png';
import Login from './Login';
import Register from './Register';

const AuthBackground = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
`;

export default class Auth extends Component {
    render() {
        return (
            <AuthBackground>
                <FormContainer/>
                <ImgContainer />
            </AuthBackground>
        );
    }
}

const FormBackground = styled.div`
    height: 100vh;
    flex: 2;
    background: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;


const BackButton = styled.span`
position: absolute;
left: 10px;
top: 10px;
`;

export class FormContainer extends Component {
    render() {
        return (
            <FormBackground>
                <BackButton>
                    <Link to={'/'}>
                        <Button icon labelPosition='left'>
                            Voltar
                            <Icon name='left arrow' />
                        </Button>
                    </Link>
                </BackButton>
                    <Switch>
                        <Route path="/auth/login" component={Login} />
                        <Route path="/auth/register" component={Register} />
                    </Switch>
            </FormBackground>
        );
    }
}

const ImgBackground = styled.div`
    height: 100vh;
    flex: 3;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${background});
`;

export class ImgContainer extends Component {
    render() {
        return (
            <ImgBackground />
        );
    }
}