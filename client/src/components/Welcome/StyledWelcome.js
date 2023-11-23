import styled from 'styled-components'

export const DivWelcome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5vh;
    height: 100vh;
    @media (max-width: 610px) {
        flex-direction: column;
    }
    h1{
        font-size: 30px;
    }
`

export const ImgStyled = styled.img`
    width: 100%;
    max-width: 250px;
    max-height: 248px;
    border-radius: 50%;
    border: solid 2px;
    margin-bottom: 30px;
`

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    @media (max-width: 610px) {
        margin-bottom: 0px;
    }
`

export const H3Welcome = styled.h3`
    color: #6650f8;
`