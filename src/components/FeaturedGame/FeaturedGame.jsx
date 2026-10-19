import styles from './FeaturedGame.module.css'
import personagens from "../../assets/images/img-featured/spiderman2/peter-e-miles.png"

function FeaturedGame(){
    return(
        <section className={styles.featuredGame}>
            <div className={styles.background}></div>

            <img className={styles.characters} src={personagens} alt="Spider-Man e Miles Morales" />

            <div className={styles.content}>
                <h1>Spiderman 2</h1>
                <button>Ver detalhes</button>
            </div>
        </section>
    )
}

export default FeaturedGame