import React, { Component } from 'react';
import { Form, Button, Icon } from 'semantic-ui-react'
import styled from 'styled-components';
import background from '../assets/img/login-background.png';
import { Link } from 'react-router-dom';

const LoginBackground = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
`;

export default class Login extends Component {
    render() {
        return (
            <LoginBackground>
                <FormContainer/>
                <ImgContainer/>
            </LoginBackground>
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

const Title = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-size: 2.5em;
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
                <Title>Login</Title>
                <LoginForm/>
            </FormBackground>
        );
    }
}

const FormGroup = styled(Form.Group)`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > * {
        padding-bottom: 20px;
    }
`;

export class LoginForm extends Component {
    render() {
        return (
                
                <FormGroup widths='equal'>
                    <Form.Input fluid label='E-mail' type="email" placeholder='E-mail' />
                    <Form.Input fluid label='Senha' type="password" placeholder='Senha' />
                    <Button  color='violet' size="huge">Entrar</Button>
                </FormGroup>
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
            <ImgBackground/>
        );
    }
}