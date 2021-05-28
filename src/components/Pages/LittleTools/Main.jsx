import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div className="row">
            <h1 className="display-4">Little Tools</h1>
            <div className="col-12 col-md-6 col-sm-4 card-container mb-2">
                <div className="card h-100">
                    <img src="" alt="" className="card-img-top" height="250px" />
                    <div className="card-body bg-dark d-flex flex-column p-2 pt-5">
                        <h5 className="card-title">2Do</h5>
                        <p className="card-text">Aplicación ToDo sin bbdd</p>
                        <Link to="/little-tools/twodo" className="btn btn-outline-light">
                            ToDo app<i className="bi bi-arrow-right ms-2"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
