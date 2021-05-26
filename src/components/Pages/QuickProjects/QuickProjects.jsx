import React from "react";
import { Link } from "react-router-dom";
import Lights from "../../media/img/lights.jpg";
import Record from "../../media/img/record.jpg";


const QuickProjects = () => {
    return (
        <div className="container">
            <h1 className="display-4">Quick Projects</h1>
            <div className="row">
                <div className="col-12 col-md-6 col-sm-4 card-container mb-2">
                    <div className="card h-100">
                        <img src={Lights} alt="" className="card-img-top" height="250px" />
                        <div className="card-body bg-dark d-flex flex-column p-2 pt-5">
                            <h5 className="card-title">SOFTWARE DE GESTIÓN DE AFOROS</h5>
                            <p className="card-text">Controlador de aforo para espacios pequeños a medianos.</p>
                            <Link to="/quick-projects/aforo" className="btn btn-outline-light">
                                Aforo<i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-sm-4 card-container mb-2">
                    <div className="card h-100">
                        <img src={Record} alt="" className="card-img-top" height="250px" />
                        <div className="card-body bg-dark d-flex flex-column p-2 pt-5">
                            <h5 className="card-title">Text To Speech (SpeechSyntesis API)</h5>
                            <p className="card-text">Jugando un poco con el SpeechSynthesis API (Dandole voz al navegador)</p>
                            <Link to="/quick-projects/text-to-speech" className="btn btn-outline-light">
                                Text to Speech<i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickProjects;
