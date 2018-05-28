import React, { Component } from 'react';
import watch from '../assets/img/watch-violet.png'
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const HeaderBackground = styled.header`
    width: 100vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeaderContainer = styled.div`
    padding: 20px 0;
    width: 100%;
    max-width: 960px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default class Header extends Component {
    render() {
        return (
            <HeaderBackground>
                <HeaderContainer>
                    <Logo/>
                    <div>
                        <Link to={'/login'}>
                            <Button inverted color='violet' size="huge">Entrar</Button>
                        </Link>
                    </div>
                </HeaderContainer>
            </HeaderBackground>
        );
    }
}

const LogoContainer = styled.div`
display: flex;
align-items: c;
enter;
`;

const LogoImg = styled.img`
    height: 70px;
`

const LogoName = styled.h3`
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    font-size: 3em;
    margin: 0 20px;
    opacity: 0.8;
`;

export class Logo extends Component {
    render() {
        return (
            <LogoContainer>
                <LogoImg src={watch} alt="pontoall logo"></LogoImg>
                <LogoName>Pontoall</LogoName>
            </LogoContainer>
        );
    }

}