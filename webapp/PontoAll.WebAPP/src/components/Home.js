import React, { Component } from 'react';
import working from '../assets/img/working.png'
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const HomeBackground = styled.section`
    width: 100vw;
    height: calc(100vh - 110px);
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    padding-top: 200px;
`;

export default class Home extends Component {
    render() {
        return (
            <HomeBackground>
                <HomeText/>
                <HomeImg/>
            </HomeBackground>
        );
    }
}

const TextContainer = styled.div`
    flex: 1;
    display: flex;
    align-content: center;
    justify-content: center;
    text-align: center;
`;

const Title = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-size: 3em;
`;

const Subtitle = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 2em;
`;

export class HomeText extends Component {
    render() {
        return (
            <TextContainer>
                <div>
                    <Title>Controle melhor seu tempo</Title>
                    <Subtitle>Gestão de ponto rápida e eficiente</Subtitle>
                    <br/>  
                    <Button color='violet' size="massive">Registre-se</Button>
                </div>
            </TextContainer>
        );
    }
}

const ImgContainer = styled.div`
    height: 1000px;
    width: 1000px;
    background: linear-gradient(#6435c9, #a79bff);
    border-radius: 50px;
    transform: rotate(50deg);
    overflow: hidden;
`;

const Img = styled.img`
    transform: rotate(310deg);
    margin-left: 92px;
    margin-top: -70px;
`;

export class HomeImg extends Component {
    render() {
        return (
            <ImgContainer>
                <Img src={working}></Img>
            </ImgContainer>
        );
    }
}