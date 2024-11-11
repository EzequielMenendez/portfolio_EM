import styled from 'styled-components'

export const DivExp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    gap: 40px;
    padding-bottom: 100px;
`

export const H2Exp = styled.h2`
    background-color: #ffffff;
    padding-top: 50px;
    padding-bottom: 22px;
`

export const DivCardExp = styled.div`
    background-color: #ffffff;
    width: 500px;
    height: 135px;
    display: flex;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 3px;
    @media (max-width: 550px) {
        width: 450px;
    }
    @media (max-width: 480px) {
        width: 400px;
        height: 160px;
    }
    @media (max-width: 430px) {
        width: 350px;
        height: 180px;
    }
    @media (max-width: 380px) {
        width: 300px;
        height: 200px;
    }
`

export const PTextExp = styled.p`
    background-color: #ffffff;
    font-size: 14px;
    margin-top: 7px;
`

export const PPositionExp = styled.p`
    background-color: #ffffff;
    margin-top: 7px;
    font-weight: 700;
`

export const PNameExp = styled.p`
    background-color: #ffffff;
    font-weight: 300;
    font-size: 14px;
`

export const PDateExp = styled.p`
    background-color: #ffffff;
    font-weight: 1.4rem;
    font-size: 14px;
    color: rgba(0, 0, 0, .6);
`

export const DivTextExp = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    padding-left: 2px;
`