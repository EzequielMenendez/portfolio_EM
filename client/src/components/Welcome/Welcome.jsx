import FotoEze from "../../utils/FotoEze.jpg"
import { DivText, DivWelcome, ImgStyled } from "./StyledWelcome"

const Welcome = ()=>{
    return(
        <DivWelcome>
            <DivText>
                <h1>Ezequiel Menéndez</h1>
                <h2>Full Stack Developer</h2>
            </DivText>
            <ImgStyled src={FotoEze}/>
        </DivWelcome>
    )
}

export default Welcome