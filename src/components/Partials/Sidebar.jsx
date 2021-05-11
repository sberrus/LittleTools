import React from 'react'
import Logo from "../media/img/samdev-logo.png"

const Sidebar = () => {
    return (
        <div>
            <div className="offcanvas offcanvas-start bg-dark text-light" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} alt="" width="100" />
                    </a>
                    <button type="button" className="btn-close text-reset btn-danger" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <div className="navbar" id="navbarSupportedContent">
                            <form className="d-flex mb-3">
                                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Buscar</button>
                            </form>
                        </div>
                        <div id="Sidebar-Menu">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Active</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar