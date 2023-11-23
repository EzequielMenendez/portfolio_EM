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
                <a onClick={handleClick}>Sobre Mí</a>
                <a onClick={handleClick}>Habilidades</a>
                <a onClick={handleClick}>Certificados</a>
                <a onClick={handleClick}>Proyectos</a>
                <a onClick={handleClick}>Contactame</a>
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