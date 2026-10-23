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

            </div>
        </section>
    )
}

export default GameCard