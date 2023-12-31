import { DivAbout, DivText, H2About, H3About, PAbout, DivInfo, ImgAbout, DivImg } from "./StyledAboutMe"
import FotoEze from "../../utils/FotoEzePerfil.jpg"
import { Slide } from "react-reveal"

const AboutMe = ()=>{
    return (
        <div id="about">
        <Slide bottom>
            <DivAbout>
                <DivInfo>
                    <H2About>Sobre Mí</H2About>
                    <DivText>
                        <PAbout>Hola 👋, soy Ezequiel Menéndez, un Desarrollador Web Full-Stack. Tengo 20 años y desde una edad temprana me interesó el mundo de la tecnología, lo cual me llevo al mundo de la programación.</PAbout>
                    </DivText>
                    <H3About>Objetivos</H3About>
                    <DivText>
                        <PAbout>Mi objetivo es generar un impacto y contribuir significativamente al campo de la programación.</PAbout>
                        <PAbout>Lo que más me apasiona de la programación y lo que me motiva a seguir adelante es la búsqueda de soluciones a los desafíos que se nos presentan, siempre explorando múltiples perspectivas.</PAbout>
                    </DivText>
                </DivInfo>
                <DivImg>
                    <ImgAbout src={FotoEze}/>
                </DivImg>
            </DivAbout>
        </Slide>
        </div>
    )
}

export default AboutMe