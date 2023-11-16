import FotoEze from "../../utils/FotoEze.jpg"
import { DivText, DivWelcome, ImgStyled } from "./StyledWelcome"
import {Fade} from 'react-reveal'

const Welcome = ()=>{
    return(
        <Fade rigth>
            <DivWelcome>
                <DivText>
                    <h1>Ezequiel Menéndez</h1>
                    <h2>Full Stack Developer</h2>
                </DivText>
                <ImgStyled src={FotoEze}/>
            </DivWelcome>
        </Fade>
    )
}

export default Welcome