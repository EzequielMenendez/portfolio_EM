import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    gap: 40px;
    flex-wrap: wrap;
    background-color: #ffffff
`

export const DivCardContact = styled.div`
    background-color: #f4f2ee;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 180px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
`

export const ImgContact = styled.img`
    margin-bottom: 20px;
    width: 60px;
    height: auto;
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

export const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff
`

export const H2Contact = styled.h2`
    background-color: #ffffff;
    font-size: 27px;
    margin: 12px;
`

export const PContact = styled.p`
    color: #6650f8;
    font-size: 16px;
    font-weight: bold;
`