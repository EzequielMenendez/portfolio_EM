import styled from "styled-components"

export const ImgSkill = styled.img`
    height: 90px;
    width: 90px;
    border-radius: 10px;
    background-color: #ffffff;
    object-fit: contain;
    @media (max-width: 500px) {
        height: 70px;
        width: 70px;
    }
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
    @media (max-width: 500px) {
        max-width: 90vw;

    }
`

export const DivCardSkill = styled.div`
    background-color: #ffffff;
    width: 150px;
    height: 150px;
    border-radius: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    @media (max-width: 500px) {
        width: 140px;
        height: 140px;
    }
`

export const PSkill = styled.p`
    background-color: #ffffff;
    margin-top: 6px;
    font-size: 16.5px;
    @media (max-width: 500px) {
        font-size: 16px
    }
`

export const DivContainerSkills = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 70px;
    padding-bottom: 65px;
    @media (max-width: 500px) {
        h2{
            font-size: 22px;
        }
    }
`