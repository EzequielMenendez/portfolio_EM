import styled from 'styled-components'

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5vh;
    height: 100vh;
    width: 100%;
    margin-top: 25px;
    @media (max-width: 610px) {
        flex-direction: column;
    }
    h1{
        font-size: 30px;
    }
`

export const DivWelcome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5vh;
    @media (max-width: 610px) {
        flex-direction: column;
        margin-top: 50px;
    }
`

export const ImgStyled = styled.img`
    width: 100%;
    max-width: 250px;
    max-height: 248px;
    border-radius: 50%;
    border: solid 2px;
`

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 610px) {
        margin-bottom: 0px;
    }
`

export const H3Welcome = styled.h3`
    color: #6650f8;
`

export const PAbout = styled.p`
    padding: 7px;
    font-size: 16.5px;
    text-align: center;
    margin-top: 5px;
`

export const DivAbout = styled.div`
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