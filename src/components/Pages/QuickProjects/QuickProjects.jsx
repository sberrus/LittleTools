import React from "react";
import { Link } from "react-router-dom";

const QuickProjects = () => {
    return (
        <div className="container">
            <h1 className="display-4">Quick Projects</h1>
            <div className="row">
                <div className="col-12 col-md-6 col-sm-4 card-container">
                    <div className="card h-100">
                        <img src="..." alt="" className="card-img-top" height="150px" />
                        <div className="card-body bg-dark d-flex flex-column p-2  pt-5">
                            <h5 className="card-title">SOFTWARE DE GESTIÓN DE AFOROS</h5>
                            <p className="card-text">Controlador de aforo para espacios pequeños a medianos.</p>
                            <Link to="/quick-projects/aforo" className="btn btn-outline-light">
                                Ir a Aforo<i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickProjects;
