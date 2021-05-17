import React, { useEffect } from "react";
import Pattern1 from "../../media/img/pattern-1.jpg";
import "bootstrap-icons/font/bootstrap-icons.css"

const Main = () => {

    useEffect(()=>{
    
        const menu = document.querySelector("#nav_bar_toggle")
        menu.style.display = "block"

    },[])

    return (
        <div className="container-fluid" id="page-wrapper">
            <div className="container" id="BodyContainer">
                <h1 className="display-4">Bienvenidos [Minimalizar]</h1>
                <p>Little tools es una plataforma de desarrollo de componentes y librerias para desarrollo web de código abierto.</p>
                <p>
                    La plataforma esta abierta en Github y si deseais incorporar y colaborar en la sección de <a href="contacto">contacto</a> encontrareis todos los enlaces para
                    contactarme o directamente el repositorio de Github para acceder al código directamente.
                </p>
                <div className="row">
                    <div className="col-12 col-md-6 col-sm-4 card-container">
                        <div className="card h-100">
                            <img alt="" src={Pattern1} className="card-img-top" height="150px" />
                            <div className="card-body bg-dark d-flex flex-column p-2 pt-5">
                                <h5 className="card-title">HTML Templates</h5>
                                <p className="card-text">Creador de Snippets para páginas estáticas (correos, 40X pages, snippets para contenidos etc...)</p>
                                <a href="/" className="btn btn-outline-light">
                                    Go somewhere <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-4 card-container">
                        <div className="card h-100">
                            <img alt="" src={Pattern1} className="card-img-top" height="150px" />
                            <div className="card-body bg-dark d-flex flex-column p-2  pt-5">
                                <h5 className="card-title">QUICK PROJECTS</h5>
                                <p className="card-text">Una colección de pequeños proyectos para poner en práctica diferentes tecnologías y el uso conjunto de las mismas.</p>
                                <a href="/quick-projects" className="btn btn-outline-light">
                                    QUICK PROJETCS <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
