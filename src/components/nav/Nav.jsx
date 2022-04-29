import React,{useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import imgCoin from "../../img/token.png"
import navFuncional from './navFuncional';
import navScroll from './scrollNav';
import TokenContext from '../context/TokenContext';
import "./nav.css"
import PopupAlertNav from '../Buttons/PopupAlertNav';


function Nav() {

    const contextToken = useContext(TokenContext)
    if (contextToken.titleHome){
        navScroll();
    }
  

    let confirmacion = sessionStorage.getItem("popupNavAlert")

    return (
        <header className="header">
            <div className='logoOculto'>
                <p>Alien Attack</p>
            </div>
            <nav className="nav">
                <div className="nav__img">
                    <button className="nav-toggle" aria-label="Abrir menú" onClick={navFuncional}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <ul className="navVisible nav-menu">

                        <li className="nav-menu-item">
                            <a href="/" className="nav-menu-link nav-link">
                                Home
                            </a>
                        </li>

                        <li className="nav-menu-item">
                            <a href="/login" className="nav-menu-link nav-link">
                                Login
                            </a>
                        </li>
                        
                        <li className="nav-menu-item user">
                            <a href="/user" className="nav-menu-link nav-link">
                                User
                            </a>
                            {confirmacion ? <PopupAlertNav/> : null}
                        </li>

                        <li className="nav-menu-item nav2" >
                            <div className='containerCoin'>
                                <div className='coin'>
                                    <img src={imgCoin} alt="coin" />
                                </div>
                                <div className='contadorCoin'>
                                    <p className='contador'>{contextToken.token}</p> 
                                    <span> ATCK </span>
                                </div>
                            </div>
                        </li> 

                    </ul>
                </div>
            </nav>
        </header>
    );
}


export default Nav;

