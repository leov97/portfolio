import TheHells from "./TheHeels"
import Beloclinic from "./Beloclinic"
import JRestaurant from "./JRestaureant"
import Menu from "./menu"
import { useModal } from "../hooks/useModal"

import '../style/prueba.css'
import '../style/menu.css'
import '../style/portfolio.css'

const Portafolio=()=>{


    const{handleClick, seeModal}=useModal()

    return(
    <>
    <div className="container-lpg">
    <Menu/>
    
    <div className="container-info">
    <section id="home">
      <div className="prueba">
      <h1>Hola!</h1>
      <span>Soy</span>
      <h2>
      "Astrid"
      <span>Velasquez</span>
      </h2>

      <p>
        Una Profecional en el area de Community Manager con un año de experiencia 
      </p>
        <input type="submit"></input>
      <section>
        <h3> redes</h3>
      </section>
      </div>
    </section>


    <section id="portfolio" className="prueba" >
        <label onClick={()=>handleClick(1)}>
            <Beloclinic/>
        </label>
        <label onClick={()=>handleClick(2)}>
            <JRestaurant/>
        </label>

        <label onClick={()=>handleClick(3)}>
           <TheHells/> 
        </label>
        
    </section>

    <footer id="contact" className="footer">
        redes
    </footer>
        {seeModal===1 &&(
            <div className="prueba-dos">

                <label onClick={handleClick}>X</label>
                hola como estas
                <input type="text"></input>
            </div>
        )}
        
        {seeModal===2 &&(
            <div className="prueba-dos">

                <label onClick={handleClick}>X</label>
                JRestaurant 
                <input type="text"></input>
            </div>
        )}
        

        {seeModal===3 &&(
            <div className="prueba-dos">

                <label onClick={handleClick}>X</label>
                hola putos
                <input type="text"></input>
            </div>
        )}




   </div>
</div>
        </>
    )
}
export default Portafolio