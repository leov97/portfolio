import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane, faSquarePlus, faBars, faHeart, faComment, faBookmark  } from "@fortawesome/free-solid-svg-icons"
import perfil from "./img/perfil.jpg"

const Beloclinic = () => {

    return (
        <div className="card-portfolio">

            <div className="header-ing">
            <h3>Beloclinic</h3>
                <span className="header-icon" >
                    <FontAwesomeIcon icon={faSquarePlus} style={{ marginRight: "1.5rem" }} />
                    <FontAwesomeIcon icon={faBars}/>
                </span>
            </div>
            <article className="perfil">
            <img src={perfil} alt="Descripción de la imagen" />
            </article>

            <div className="ing-bottom">

            <div className="btn-ing">
                <span>
                    <FontAwesomeIcon icon={faHeart}/>
                </span>
                <span>
                <FontAwesomeIcon icon={faComment} flip="horizontal" />

                </span>
                <span className="fa-light" >
                    <FontAwesomeIcon icon={faPaperPlane} />
                </span>
               </div>

               <div>

               <span className="btn-ing">
                    <FontAwesomeIcon icon={faBookmark}/>
               </span>
               </div>
            </div>
        </div>
    )
}

export default Beloclinic
