
import { Link, NavLink } from 'react-router-dom';
import imgPerfil from '../imgs/im.jpg';

export const NavComponent = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="sideNav">
                <Link className="navbar-brand js-scroll-trigger">
                    <span className="d-block d-lg-none">Clarence Taylor</span>
                    <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={imgPerfil}
                        alt="..." /></span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span
                        className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link js-scroll-trigger" > ABOUT </NavLink></li>
                        <li className="nav-item">
                            <NavLink to="/Skills" className="nav-link js-scroll-trigger" > SKILLS </NavLink></li>
                        <li className="nav-item">
                            <NavLink to="/Contact" className="nav-link js-scroll-trigger" > CONTACT </NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
