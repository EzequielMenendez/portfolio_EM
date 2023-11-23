import gitHub from "../../utils/githubLogo.png"
import linkedin from "../../utils/linkedinLogo.png"
import gmail from "../../utils/gmailLogo.png"
import { Abutton, CardContainer, DivCardContact, FooterDiv, H2Contact, ImgContact, PContact } from "./SlyledFooter"

const Footer = () => {

    const contacts = [
        {app: "Linkedin", link: "https://www.linkedin.com/in/ezequiel-men%C3%A9ndez-888381218/", logo: linkedin},
        {app: "Github", link: "https://github.com/EzequielMenendez", logo: gitHub}
    ]
    
    return(
        <FooterDiv id="footer">
            <H2Contact>Contactame</H2Contact>
            <CardContainer>
                {contacts.map((c,i)=>(
                    <DivCardContact key={i}>
                        <ImgContact src={c.logo}/>
                        <Abutton href={c.link}>{c.app}</Abutton>
                    </DivCardContact>
                ))}
                <DivCardContact>
                    <ImgContact src={gmail}/>
                    <PContact>ezemenendez2003</PContact>
                    <PContact>@gmail.com</PContact>
                </DivCardContact>
            </CardContainer>
        </FooterDiv>
    )
}

export default Footer