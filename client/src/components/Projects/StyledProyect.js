import styled from 'styled-components';
import ReactPlayer from 'react-player';

export const StyledVideoPlayer = styled(ReactPlayer)`
    width: 600px !important;
    height: 340px !important;
    @media (max-width: 690px) {
        width: 500px !important;
        height: 300px !important;
    }
    @media (max-width: 580px) {
        width: 450px !important;
        height: 300px !important;
    }
    @media (max-width: 470px) {
        width: 350px !important;
        height: 210px !important;
    }
    @media (max-width: 370px) {
        width: 300px !important;
        height: 200px !important;
    }
    @media (max-width: 350px) {
        width: 280px !important;
        height: 180px !important;
    }
    @media (max-width: 330px) {
        width: 260px !important;
        height: 170px !important;
    }
`;

export const DivCardProyects = styled.div`
    max-width: 600px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 20px;
    background-color: #ffffff;
    @media (max-width: 690px) {
        max-width: 500px;
        width: auto;
    }
    @media (max-width: 580px) {
        max-width: 450px;
        width: auto;
    }
    @media (max-width: 470px) {
        max-width: 350px;
        width: auto;
    }
    @media (max-width: 370px) {
        max-width: 300px;
        width: auto;
    }
    @media (max-width: 350px) {
        max-width: 280px;
        width: auto;
    }
    @media (max-width: 330px) {
        max-width: 270px;
        width: auto;
    }
`

export const DivCenter = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top:3px;
    padding-bottom: 3px;
    background-color: #ffffff;
`

export const H2Proyect = styled.h2`
    font-size: 27px;
    padding: 22px;
`

export const PProyect = styled.p`
    background-color: #ffffff;
    padding: 7px;
    font-size: 16.5px;
`

export const H4Proyect = styled.h4`
    background-color: #ffffff;
    padding: 7px;
    font-size: 18px;
`

export const DivProyectContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Abutton = styled.a`
    display: inline-block;
    padding: 10px 20px;
    background-color: #6650f8;
    color: #fff;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #4330ab;
    }
`