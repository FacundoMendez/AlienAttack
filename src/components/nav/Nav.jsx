import React,{useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import imgCoin from "../../img/coin.png"
import navFuncional from './navFuncional';
import navScroll from './scrollNav';





function Nav() {

    useEffect(() => {
        navScroll();

    },[])

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
                            <a href="../../public/index.html" className="nav-menu-link nav-link">
                                Home
                            </a>
                        </li>
                        <li className="nav-menu-item">
                            <a href="#models" className="nav-menu-link nav-link">
                                Characters
                            </a>
                        </li>
                        <li className="nav-menu-item">
                            <a href="#" className="nav-menu-link nav-link">
                                User
                            </a>
                        </li>
                        {/*  <li className="nav-menu-item nav2" >
                            <div className='coin'>
                                <img src={imgCoin} alt="coin" />
                            </div>
                            <div className='contadorCoin'>1000</div>
                            <div className='play'>
                                <a href="#" className="nav-menu-link  nav-link"> Play </a>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </header>
    );
}


export default Nav;

