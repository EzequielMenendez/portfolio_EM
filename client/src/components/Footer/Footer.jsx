import gitHub from "../../utils/githubLogo.png"
import linkedin from "../../utils/linkedinLogo.png"
import { Abutton, CardContainer, DivCardContact, FooterDiv, ImgContact } from "./SlyledFooter"

const Footer = () => {

    const contacts = [
        {app: "Linkedin", link: "https://www.linkedin.com/in/ezequiel-men%C3%A9ndez-888381218/", logo: linkedin},
        {app: "Github", link: "https://github.com/EzequielMenendez", logo: gitHub}
    ]
    
    return(
        <FooterDiv>
            <h2>Contactame</h2>
            <CardContainer>
                {contacts.map((c,i)=>(
                    <DivCardContact>
                        <ImgContact src={c.logo}/>
                        <Abutton href={c.link}>{c.app}</Abutton>
                    </DivCardContact>
                ))}
                <DivCardContact>
                    <ImgContact />
                    <p>ezemenendez2003@gmail.com</p>
                </DivCardContact>
            </CardContainer>
        </FooterDiv>
    )
}

export default Footer