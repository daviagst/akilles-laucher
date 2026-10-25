import styles from './GameCard.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                    <img src="../../assets/images/img-gameCard/red-dead-2.jpg" alt="" />
                    <button className={styles.details}>Ver detalhes</button>
                </div>
            </div>
        </section>
    )
}

export default GameCard