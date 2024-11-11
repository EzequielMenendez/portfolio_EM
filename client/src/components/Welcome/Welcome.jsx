import FotoEze from "../../utils/FotoEze.jpg"
import { DivText, DivContainer, DivWelcome, H3Welcome, ImgStyled, PAbout, DivAbout } from "./StyledWelcome"
import {Fade} from 'react-reveal'

const Welcome = ()=>{
    return(
        <div id="about">
        <Fade rigth>
            <DivContainer>
                <DivWelcome>
                    <DivText>
                        <h1>Ezequiel Menéndez</h1>
                        <H3Welcome>Full Stack Developer</H3Welcome>
                    </DivText>
                    <ImgStyled src={FotoEze}/>
                </DivWelcome>
                <DivAbout>
                    <PAbout>Hola 👋, Soy Ezequiel Menéndez, desarrollador Full-Stack apasionado por la tecnología y la programación, Me dedico a transformar ideas en experiencias de usuario.</PAbout>
                </DivAbout>
            </DivContainer>
        </Fade>
        </div>
    )
}

export default Welcome