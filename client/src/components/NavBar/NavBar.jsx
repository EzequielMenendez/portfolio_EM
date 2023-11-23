import { useState } from "react";
import BurgerButton from "./BurgerButton";
import { NavContainer, BgDiv } from "./StyledNavBar";

function NavBar() {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <>
        <NavContainer>
            <h2>Ezequiel Menéndez</h2>
            <div className={`links ${clicked ? 'active' : ''}`}>
                <a onClick={handleClick} href="#about">Sobre Mí</a>
                <a onClick={handleClick} href="#skills">Habilidades</a>
                <a onClick={handleClick} href="#certificates">Certificados</a>
                <a onClick={handleClick} href="#projects">Proyectos</a>
                <a onClick={handleClick} href="#footer">Contactame</a>
            </div>
            <div className="burguer">
                <BurgerButton clicked={clicked} handleClick={handleClick}/>
            </div>
            <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
        </NavContainer>
        </>
    );
}
  
export default NavBar;