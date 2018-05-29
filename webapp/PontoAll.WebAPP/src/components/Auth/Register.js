import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react'
import styled from 'styled-components';

const FormGroup = styled(Form.Group)`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
& > * {
    padding-bottom: 20px;
}
`;

const Title = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-size: 2.5em;
    text-align: center;
`;

export default class RegisterForm extends Component {
    render() {
        return (
                
                <FormGroup widths='equal'>
                    <Title>Registre-se</Title>
                    <Form.Input fluid label='E-mail' type="email" placeholder='E-mail' />
                    <Form.Input fluid label='Senha' type="password" placeholder='Senha' />
                    <Button  color='violet' size="huge">Registrar</Button>
                </FormGroup>
        );
    }
}