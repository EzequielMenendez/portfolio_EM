import { Slide } from "react-reveal"
import Henry from "../../utils/Diploma Henry.png";
import UTN from "../../utils/Diploma UTN.png";
import { DivCertificates, DivWhite, H2Cerificate, ImgCertificate } from "./StyledCertificates";

const Certificates = () =>{

    const certificates = [
        { image: Henry, text: "Certificado de Henry" },
        { image: UTN, text: "Certificado de la UTN" }
    ]

    return(
        <Slide bottom>
            <DivCertificates>
                <H2Cerificate>Certificados</H2Cerificate>
                {certificates.map((c, i)=>(
                    <DivWhite key={i}>
                        <ImgCertificate src={c.image} alt={c.text}/>
                    </DivWhite>
                ))}
            </DivCertificates>
        </Slide>
    )
}

export default Certificates