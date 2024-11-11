import { useState } from "react";
import BurgerButton from "./BurgerButton";
import { NavContainer, BgDiv } from "./StyledNavBar";

function NavBar() {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    const smoothScrollToSection = (targetId) => {
        const targetElement = document.getElementById(targetId);
        const navbarHeight = 80;
    
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - navbarHeight;
    
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
    }

    const handleLinkClick = (e, targetId) => {
        e.preventDefault();
        if(clicked){
            setClicked(!clicked)
        }
        smoothScrollToSection(targetId);
    }

    return (
        <>
        <NavContainer>
            <h2>Ezequiel Menéndez</h2>
            <div className={`links ${clicked ? 'active' : ''}`}>
                <a onClick={(e) => handleLinkClick(e, 'about')} href="#about">Sobre Mí</a>
                <a onClick={(e) => handleLinkClick(e, 'exp')} href="#exp">Experiencia</a>
                <a onClick={(e) => handleLinkClick(e, 'skills')} href="#skills">Habilidades</a>
                <a onClick={(e) => handleLinkClick(e, 'certificates')} href="#certificates">Certificados</a>
                <a onClick={(e) => handleLinkClick(e, 'projects')} href="#projects">Proyectos</a>
                <a onClick={(e) => handleLinkClick(e, 'footer')} href="#footer">Contactame</a>
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