import styled from "styled-components"

export const ImgCertificate = styled.img`
    max-width: 550px;
    @media (max-width: 690px) {
        max-width: 450px;
    }
    @media (max-width: 580px) {
        max-width: 400px;
    }
    @media (max-width: 460px) {
        max-width: 300px;
    }
    @media (max-width: 370px) {
        max-width: 260px;
    }
    margin: 15px;
    background-color: #ffffff;
`

export const DivCertificates = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    padding-top: 50px;
    padding-bottom: 35px;
`

export const H2Cerificate = styled.h2`
    background-color: #ffffff;
    font-size: 27px;
    margin: 12px;
`

export const DivWhite = styled.div`
    background-color: #ffffff;
`