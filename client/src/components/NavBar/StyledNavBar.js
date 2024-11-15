import styled from 'styled-components'

export const NavContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    background-color: #6650f8;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2{
        padding-left: 5%;
    }
    a {
        background-color: #6650f8;
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }
    div{
        background-color: #6650f8;
    }
    h2{
        z-index: 3;
        background-color: #6650f8;
    }
    .burguer{
        margin-right: 50px;
        z-index: 3;
        @media(min-width: 768px){
            display:none
        }
    }
    .links{
        z-index: 3;
        width: 65%;
        position: absolute;
        margin-top: 100px;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .6s ease;
        a {
            color: white;
            font-size: 1.5rem;
            display: block;
            position: relative;
            text-decoration: none;
            padding-bottom: 2px;
        }
        a::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #fff;
            transition: width 0.5s ease;
            border-radius: 3px;
        }
        a:hover::after {
            width: 100%; /* Extiende el subrayado a todo el ancho */
        }
        @media(min-width: 768px){
            width: none;
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                color: white;
                display: inline;
            }
            display: block;
        }
    }
    .links.active{
        background-color: transparent;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        a{
            background-color: transparent;
            font-size: 1.5rem;
            margin-top: 1rem;
            color: white;
        }
    }
`

export const BgDiv = styled.div`
    position: fixed;
    background-color: #6650f8;
    top: -1000px;
    left: -1000px;
    z-index: 2;
    border-radius: 0;
    width: 100%;
    height: 100%;
    transition: border-radius 0.6s ease, top 0.6s ease, left 0.6s ease, width 0.6s ease, height 0.6s ease; /* Transiciones para cerrar */

    &.active {
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;