import gitHub from "../../utils/githubLogo.png"
import linkedin from "../../utils/linkedinLogo.png"

const Footer = () => {

    const contacts = [
        {app: "Linkedin", link: "https://www.linkedin.com/in/ezequiel-men%C3%A9ndez-888381218/", logo: linkedin},
        {app: "Github", link: "https://github.com/EzequielMenendez", logo: gitHub}
    ]
    
    return(
        <div>
            <h2>Contactame</h2>
            <div>
                {contacts.map((c,i)=>(
                    <div>
                        <img src={c.logo}/>
                        <a href={c.link}>{c.app}</a>
                    </div>
                ))}
                <div>
                    <img />
                    <a>ezemenendez2003@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default Footer