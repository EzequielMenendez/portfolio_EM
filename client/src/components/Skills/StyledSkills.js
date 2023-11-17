import styled from "styled-components"

export const ImgSkill = styled.img`
    height: 90px;
    width: 90px;
    border-radius: 10px;
    background-color: #ffffff;
`

export const DivSkills = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    max-width: 70vw;
    margin-top: 30px;
    margin-bottom: 50px;
`

export const DivCardSkill = styled.div`
    background-color: #ffffff;
    padding-left: 36px;
    padding-right: 36px;
    padding-top: 35px;
    padding-bottom: 30px;
    border-radius: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const PSkill = styled.p`
    background-color: #ffffff;
    margin-top: 6px;
    font-size: 16.5px;
`

export const DivContainerSkills = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 45px;
`

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
    margin: 10px;
`