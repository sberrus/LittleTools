import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import "bootstrap-icons/font/bootstrap-icons.css"
import Logo from "../media/img/samdev-logo.png"

const Header = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 position-sticky top-0 border-bottom" id="nav_bar_toggle">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/main">
                        <img src={Logo} alt="" height="50px" />
                    </Link>
                    <button className="navbar bg-dark border border-dark p-2 px-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header
