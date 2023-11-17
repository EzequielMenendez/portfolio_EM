import Pokemon from "../../utils/VideoPokemonPage.mp4";
import LifeCalendar from "../../utils/LifeCalendarVideo.mp4";
import { DivCardProyects, DivCenter, StyledVideoPlayer } from "./StyledProyect";

const Proyects = () => {

    const proyects = [
        { video: Pokemon, name: "Pokemon Fan Page", link: "https://github.com/EzequielMenendez/Pokemon-PI", description: "Es una página con temática de Pokémon, la cual realicé durante la cursada en Henry como proyecto, utilizando como tecnologías principales React, Node.js y PostgreSQL."},
        { video: "https://www.youtube.com/watch?v=q5A-RYEhUAs", link: "https://github.com/PuebladelMar/SoyPuebla", name: "Puebla del Mar", description: "Es una página de ropa deportiva femenina que se realizó con clientes reales durante la cursada en Henry. En este proyecto, trabajé con las tecnologías principales de React, Node.js y PostgreSQL, donde se aplicó la metodología de Scrum con trabajo en equipo."},
        {video: LifeCalendar, name:"Life Calendar", description: "Life Calendar es una aplicación que fue construida con TypeScript, React, Node, Express y MongoDB. Se trata de un calendario de eventos/tareas con CRUD completo, también cuenta con un sistema de usuarios con JWT, así que cada usuario tiene sus propios eventos. Los eventos son notificados por correo electrónico."}
    ]

    return (
        <DivCenter>
            <h2>Proyectos</h2>
            <div>
                {proyects.map((p, i)=>(
                    <DivCardProyects key={i}>
                        <div>
                            <StyledVideoPlayer 
                            url={p.video}
                            controls
                            />
                        </div>
                        <div>
                            <DivCenter>
                                <h4>{p.name}</h4>
                            </DivCenter>
                            <p>{p.description}</p>
                            <DivCenter>
                                <a href={p.link}>Repositorio</a>
                            </DivCenter>
                        </div>
                    </DivCardProyects>
                ))}
            </div>
        </DivCenter>
    )
}

export default Proyects