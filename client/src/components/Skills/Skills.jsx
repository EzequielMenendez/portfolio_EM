import JavaScript from "../../utils/JavaScript-logo.png";
import TypeScript from "../../utils/typescript-logo.png";
import NodeJs from "../../utils/nodejs-icon.svg";
import Php from "../../utils/php-logo.png";
import Postgre from "../../utils/Postgresql_logo.png";
import ReactLogo from "../../utils/react-logo.png";
import { DivCardSkill, DivContainerSkills, DivSkills, ImgSkill, PSkill } from "./StyledSkills";
import { Fade } from "react-reveal";


const Skills = ()=>{

    const technologies = [
        { image: JavaScript, text: "JavaScript" },
        { image: NodeJs, text: "Node.js" },
        { image: Postgre, text: "PostgreSQL" },
        { image: ReactLogo, text: "React" },
        { image: TypeScript, text: "TypeScript" },
        { image: Php, text: "PHP" },
    ];

    return(
        <DivContainerSkills>
            <h2>Tecnologias Principales:</h2>
            <Fade left cascade>
                <DivSkills>
                    {technologies.map((t, i)=>(
                        <DivCardSkill key={i}>
                            <ImgSkill src={t.image}/>
                            <PSkill>{t.text}</PSkill>
                        </DivCardSkill>
                    ))}
                </DivSkills>
            </Fade>
        </DivContainerSkills>
    )
}

export default Skills