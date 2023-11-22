import styled from 'styled-components'

export const DivAbout = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #ffffff;
    min-height: 67vh;
    @media (max-width: 600px) {
        justify-content: center;
    }
`

export const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
`

export const H2About = styled.h2`
    background-color: #ffffff;
    font-size: 27px;
    margin: 12px;
`

export const H3About = styled.h3`
    background-color: #ffffff;
    font-size: 23px;
    margin: 12px;
`

export const PAbout = styled.p`
    background-color: #ffffff;
    padding: 7px;
    font-size: 16.5px;
`

export const DivText = styled.div`
    max-width: 30vw;
    @media (max-width: 800px) {
        max-width: 35vw;
    }
    @media (max-width: 700px) {
        max-width: 40vw;
    }
    @media (max-width: 600px) {
        max-width: 70vw;
    }
`

export const ImgAbout = styled.img`
    height: 500px;
    width: auto;
    border-radius: 20px;
    @media (max-width: 800px) {
        height: 450px;
        width: auto;
    }
    @media (max-width: 700px) {
        height: 400px;
        width: auto;
    }
    @media (max-width: 600px) {
        display: none
    }
`

export const DivImg = styled.div`
    background-color: #ffffff;
`