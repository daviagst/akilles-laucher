import logo from '../../assets/images/AKILLES-LOGO-NOVO.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse, faBookOpen} from "@fortawesome/free-solid-svg-icons";
import styles from './Sidebar.module.css'

function SidebarAkilles(){
    return(
        <nav className={styles.nav_lateral}>
            <img className={styles.logo} src={logo} alt="Logo AKILLES" />

            <div className={styles.icons_lateral}>
                <a href="/">
                    <FontAwesomeIcon icon={faHouse} />
                </a>

                <a href="/">
                    <FontAwesomeIcon icon={faBookOpen} />
                </a>
            </div>
        </nav>
    )
}

export default SidebarAkilles