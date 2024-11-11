import { DivCardExp, DivExp, DivTextExp, H2Exp, PDateExp, PTextExp, PNameExp, PPositionExp } from "./StyledExperience"
import { Slide } from "react-reveal"
import Daira from "../../utils/DairaLogo.jfif"

const AboutMe = ()=>{

    const experiences = [
        {
            name: "Daira IT",
            description: "Desarrollo de software para diversos proyectos y clientes. He trabajado en el Back-End y en la estructuración de bases de datos, así como en el Front-End, asegurando buenas experiencias de usuario.",
            logo: "logo",
            startDate: "feb. 2024",
            endDate: "actualidad",
            position: "Full Stack Developer"
        }
    ]

    return (
        <div id="exp">
        <Slide bottom>
            <DivExp>
                <H2Exp>Experiencia Profesional</H2Exp   >
                    {experiences.map((e, i)=>(
                        <Slide left cascade key={i}>
                            <DivCardExp>
                                <DivTextExp>
                                    <img src={Daira} width={70}/>
                                </DivTextExp>
                                <DivTextExp>
                                    <PPositionExp>{e.position}</PPositionExp>
                                    <PNameExp>{e.name}</PNameExp>
                                    <PDateExp>{e.startDate} - {e.endDate}</PDateExp>
                                    <PTextExp>{e.description}</PTextExp>
                                </DivTextExp>
                            </DivCardExp>
                        </Slide>
                    ))}
            </DivExp>
        </Slide>
        </div>
    )
}

export default AboutMe