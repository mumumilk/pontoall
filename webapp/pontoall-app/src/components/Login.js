import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'
import styled from 'styled-components';

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


export class FormContainer extends Component {
    render() {
        return (
            <FormBackground>
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
                    <Button loading color='violet' size="huge">Entrar</Button>
                </FormGroup>
        );
    }
}

const ImgBackground = styled.div`
    height: 100vh;
    flex: 3;
    background: #a79bff;
`;

export class ImgContainer extends Component {
    render() {
        return (
            <ImgBackground/>
        );
    }
}