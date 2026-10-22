import styles from './FeaturedGame.module.css'
import logo from "../../assets/images/img-featured/spiderman2/marvels-spider-man-2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function FeaturedGame(){
    return(
        <section className={styles.featuredGame}>
            <div className={styles.background}></div>

            {/* <img className={styles.characters} src={personagens} alt="Spider-Man e Miles Morales" /> */}

            <div className={styles.content}>
                <img className={styles.logoGame} src={logo} alt="Logo Spider man" />
                <div className={styles.details}>
                    <button>Ver detalhes</button>
                    <div className={styles.icon_fav}>
                        <a href="/">
                            <FontAwesomeIcon icon={faHeart} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedGame