import FotoEze from "../../utils/FotoEze.jpg"
import { DivText, DivWelcome, H3Welcome, ImgStyled } from "./StyledWelcome"
import {Fade} from 'react-reveal'

const Welcome = ()=>{
    return(
        <Fade rigth>
            <DivWelcome>
                <DivText>
                    <h1>Ezequiel Menéndez</h1>
                    <H3Welcome>Full Stack Developer</H3Welcome>
                </DivText>
                <ImgStyled src={FotoEze}/>
            </DivWelcome>
        </Fade>
    )
}

export default Welcome