import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../../../firebase";

const Aforo = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const dbRes = await db.collection("dashboard").get();
                await setData(dbRes.docs[0].data());
            } catch (error) {
                console.log(error);
            }
        };
        obtenerDatos();
        console.log(data);
    }, []);

    const agregarDato = useCallback(async () => {
        const dbRes = await db.collection("dashboard").doc("dashboard").set({
            estado: "Accesible",
            aforo_total: 15,
            contadores_totales: 3,
        });
        await console.log(dbRes);
    }, []);

    return (
        <div className="container-fluid">
            <h1 className="display-4">Control de aforo</h1>
            <div className="container">
                <div className="container" id="dashboard">
                    <h2 className="mt-5 display-6">
                        ESTADO: <span className="text-success">{data.estado}</span>
                    </h2>
                    <h4 className="mt-5 display-6">
                        Aforo total: <span className="text-info">{data.aforo_total}</span>
                    </h4>
                    <h4 className="my-5 display-6">
                        Contadores totales: <span className="text-info">{data.contadores_totales}</span>
                    </h4>
                    <button className="btn btn-light" onClick={agregarDato}>
                        Probar bbdd
                    </button>
                    <hr />
                </div>
                <div id="delete">
                    <ul>
                        <li>
                            Terminar la interfaz sencilla para poder mostrar los datos
                            <ul>
                                <li>
                                    Una interfaz para poder darle a cada uno de los controladores de acceso control sobre quien entra, quien sale **algún sistema de comentarios o
                                    post para incidencias.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Configurar una bbdd SQL para empezar a utilizar los datos desde MYSQL
                            <ul>
                                <li>Configurar servidor Plesk para configurar SQL y NoSQL</li>
                                <li>
                                    Controlador para el panel que muestre la cantidad de personas presentes en el sitio en cuestión. Este sistema contará con las siguientes
                                    caractersticas:
                                    <ul>
                                        <li>
                                            <strong>Controlador general del sitio:</strong> Este controlador se encargará de gestionar los datos de todos los controladores y
                                            manipularlos para ver si se puede acceder o no tomando en cuenta parámetros que asignen el máximo de aforo para el sitio en cuestión.
                                        </li>
                                        <li>
                                            <strong>Controlador para los controles de acceso:</strong>
                                            Controlador que almacenará el nombre del controlador de acceso, contador de puerta a controlar.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link to="/quick-projects/contadores" className="btn btn-outline-light">Ir a Contadores</Link>
                </div>
            </div>
        </div>
    );
};

export default Aforo;
