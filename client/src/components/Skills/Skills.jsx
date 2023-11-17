import JavaScript from "../../utils/JavaScript-logo.png";
import TypeScript from "../../utils/typescript-logo.png";
import NodeJs from "../../utils/nodejs-icon.svg";
import Php from "../../utils/php-logo.png";
import Postgre from "../../utils/Postgresql_logo.png";
import ReactLogo from "../../utils/react-logo.png";
import Henry from "../../utils/Diploma Henry.png";
import UTN from "../../utils/Diploma UTN.png";
import { DivCardSkill, DivContainerSkills, DivSkills, ImgSkill, PSkill } from "./StyledSkills";


const Skills = ()=>{

    const technologies = [
        { image: JavaScript, text: "JavaScript" },
        { image: NodeJs, text: "Node.js" },
        { image: Postgre, text: "PostgreSQL" },
        { image: ReactLogo, text: "React" },
        { image: TypeScript, text: "TypeScript" },
        { image: Php, text: "PHP" },
    ];

    const certificates = [
        { image: Henry, text: "Certificado de Henry" },
        { image: UTN, text: "Certificado de la UTN" }
    ]

    return(
        <DivContainerSkills>
            <h2>Tecnologias Principales:</h2>
            <DivSkills>
                {technologies.map(t=>(
                    <DivCardSkill>
                        <ImgSkill src={t.image}/>
                        <PSkill>{t.text}</PSkill>
                    </DivCardSkill>
                ))}
            </DivSkills>
        </DivContainerSkills>
    )
}

export default Skills