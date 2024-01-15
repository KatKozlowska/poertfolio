import "./Nav.scss"
const Nav = () => {
    return(
        <nav className="nav">
            <h1 className="nav__heading">KATARZYNA KOZLOWSKA.</h1>
            <div className="nav__buttons">
            <a href="#about" className="nav__button nav__button--about" >About</a>
            <a href="#projects" className="nav__button nav__button--portfolio">Projects</a>
            <a href="#contact" className="nav__button nav__button--contact">Contact</a>
            </div>
        </nav>

    
    )
}

export default Nav;