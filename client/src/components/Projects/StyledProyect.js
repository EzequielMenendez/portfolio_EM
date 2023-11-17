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
`

export const DivCenter = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top:3px;
    margin-bottom: 3px;
`