import { DivAbout } from "./StyledAboutMe"
import { Slide } from "react-reveal"

const AboutMe = ()=>{
    return (
        <Slide left>
            <DivAbout id="about">
                <h2>Sobre Mí</h2>
                <div>
                    <p>Hola 👋, soy Ezequiel Menéndez, un Desarrollador Web Full-Stack. Tengo 20 años y desde una edad temprana me interesó el mundo de la tecnología, lo cual me llevo al mundo de la programación.</p>
                </div>
                <h3>Objetivos</h3>
                <div>
                    <p>Mi objetivo es generar un impacto y contribuir significativamente al campo de la programación.</p>
                    <p>Lo que más me apasiona de la programación y lo que me motiva a seguir adelante es la búsqueda de soluciones a los desafíos que se nos presentan, siempre explorando múltiples perspectivas.</p>
                </div>
            </DivAbout>
        </Slide>
    )
}

export default AboutMe