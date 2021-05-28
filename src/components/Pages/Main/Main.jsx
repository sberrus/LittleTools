import React, { useEffect } from "react";
import htmlImage from "../../media/img/html.jpg";
import PlainImage from "../../media/img/plain.jpg";

const Main = () => {
    useEffect(() => {
        const menu = document.querySelector("#nav_bar_toggle");
        menu.style.display = "block";
    }, []);

    return (
        <div className="container-fluid" id="page-wrapper">
            <div className="container" id="BodyContainer">
                <h1 className="display-4">Little Tools</h1>
                <p>En github esta el repositorio. Cualqueira que quiera participar, ofrecer alguna observación o mejora podeis colaborar desde allí.</p>

                <div className="row">
                    <div className="col-12 col-md-6 col-sm-4 card-container mb-2">
                        <div className="card h-100">
                            <img alt="" src={htmlImage} className="card-img-top" height="250px" />
                            <div className="card-body bg-dark d-flex flex-column p-2 pt-5">
                                <h5 className="card-title">HTML Templates</h5>
                                <p className="card-text">Creador de Snippets para páginas estáticas (correos, 40X pages, snippets para contenidos etc...)</p>
                                <a href="/" className="btn btn-outline-light disabled">
                                    TEMPLATES <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-4 card-container mb-2">
                        <div className="card h-100">
                            <img alt="" src={PlainImage} className="card-img-top" height="250px" />
                            <div className="card-body bg-dark d-flex flex-column p-2  pt-5">
                                <h5 className="card-title">QUICK PROJECTS</h5>
                                <p className="card-text">Una colección de pequeños proyectos para poner en práctica diferentes tecnologías y el uso conjunto de las mismas.</p>
                                <a href="/quick-projects" className="btn btn-outline-light">
                                    QUICK PROJETCS <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-4 card-container mb-2">
                        <div className="card h-100">
                            <img alt="" src={PlainImage} className="card-img-top" height="250px" />
                            <div className="card-body bg-dark d-flex flex-column p-2  pt-5">
                                <h5 className="card-title">Little Tools</h5>
                                <p className="card-text">Mini proyectos de programación desarrollados en JS</p>
                                <a href="/little-tools" className="btn btn-outline-light">
                                    LITTLE TOOLS <i className="bi bi-arrow-right"></i>
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
