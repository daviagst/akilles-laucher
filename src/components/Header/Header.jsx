import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Header.module.css'
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";

function HeaderAkilles(){
    return(
        <header>
            <input className={styles.pesquisa_bar} type="text" placeholder="Pesquisar..." />

            <div className={styles.icons_header}>
                <a href="/">
                    <FontAwesomeIcon icon={faHeart} />
                </a>

                <a href="/">
                    <FontAwesomeIcon icon={faUser} />
                </a>
            </div>
        </header>
   )
}

export default HeaderAkilles