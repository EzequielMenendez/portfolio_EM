import JavaScript from "../../utils/JavaScript-logo.png";
import TypeScript from "../../utils/typescript-logo.png";
import NodeJs from "../../utils/nodejs-icon.svg";
import Php from "../../utils/php-logo.png";
import Postgre from "../../utils/Postgresql_logo.png";
import ReactLogo from "../../utils/react-logo.png";
import MongoDB from "../../utils/MongoDBLogo.png"
import HTML from "../../utils/HTMLLogo.png"
import CSS from "../../utils/CSSLogo.png"
import Tailwind from "../../utils/TailwindLogo.png"
import Next from '../../utils/NextLogo.png'
import Go from '../../utils/GoLogo.png'
import Svelte from '../../utils/SvelteLogo.png'
import { DivCardSkill, DivContainerSkills, DivSkills, ImgSkill, PSkill } from "./StyledSkills";
import { Fade } from "react-reveal";


const Skills = ()=>{

    const technologies = [
        { image: JavaScript, text: "JavaScript" },
        { image: NodeJs, text: "Node/Express" },
        { image: Postgre, text: "PostgreSQL" },
        { image: ReactLogo, text: "React" },
        { image: TypeScript, text: "TypeScript" },
        { image: Php, text: "PHP" },
        { image: MongoDB, text: "Mongo DB"},
        { image: HTML, text: "HTML"},
        { image: CSS, text: "CSS"},
        { image: Tailwind, text: "Tailwind"},
        { image: Next, text: "Next.js"},
        { image: Go, text: "Golang"},
        { image: Svelte, text: "Svelte"}
    ];

    return(
        <DivContainerSkills id="skills">
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