import styles from './GameCard.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import redDead2 from "../../assets/images/img-gameCard/red-dead-2.jpg";
import gowRagnarok from "../../assets/images/img-gameCard/gow_ragnarok.jpg"
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";



function GameCard(){
    return(
        <section className={styles.GameCard}>
            <div className={styles.arrows}>
                <button> <FontAwesomeIcon icon={faAngleLeft} /> </button>
                <button> <FontAwesomeIcon icon={faAngleRight} /> </button>
            </div>

            <div className={styles.cards}>
                <div className={styles.games}>
                    <img src={redDead2} alt="Red Dead Redemption 2" />
                    <button>Ver detalhes</button>
                </div>

                <div className={styles.games}>
                    <img src={gowRagnarok} alt="God Of War Ragnarok" />
                    <button>Ver detalhes</button>
                </div>
            </div>
        </section>
    )
}

export default GameCard