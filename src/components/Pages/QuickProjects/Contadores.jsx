import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import db from "../../../firebase";

const Contadores = () => {
    //Data Controller [Hooks]
    const [controllerData, setControllerData] = useState(null); //Datos del usuario
    const [count, setCount] = useState(0); //Cuenta de las personas presentes en el espacio
    const [sync, setSync] = useState(0); //Variable para controlar envio de datos a la bbdd
    const [dashboardInfo, setDashboardInfo] = useState(true); //Datos del dashboard
    const [reloader, setReloader] = useState(true); //variable lanzadora de actualización de datos

    //Params
    const { id } = useParams();
    const contadorID = id.slice(1);

    useEffect(() => {
        //Se obtienen los datos de la bbdd
        const obtenerDatos = async () => {
            try {
                //Obtenemos los datos del usuario contador y la cuenta del mismo.
                const controladorData = await db.collection("contadores").doc(contadorID).get();
                setControllerData(controladorData.data());
                setCount(controladorData.data().count);

                //Obtenemos los datos del dashboard
                const dashboardRes = await db.collection("dashboard").doc("control").get();
                setDashboardInfo(dashboardRes.data());
            } catch (error) {
                console.log(error);
            }
        };
        obtenerDatos();

        //Cuenta atras para refrescar los datos de la bbdd y sus status.
        setTimeout(() => {
            setReloader(!reloader);
        }, 5000); //Periodicidad de la actualización
    }, [contadorID, reloader, setReloader]);

    //Entrada de persona al espacio
    const addPerson = () => {
        let updatedCount = count + 1;
        setCount(updatedCount);
        checkSync();
    };

    //Salida de persona del piso
    const decresePerson = () => {
        let updatedCount = count - 1;
        setCount(updatedCount);
        checkSync();
    };

    //Lógica para enviar los datos a la bbdd
    const checkSync = () => {
        let newSync = sync + 1;
        setSync(newSync);
        if (sync >= 2) {
            updateCountDDBB();
        }
    };

    //Actualizar la bbdd con los nuevos datos
    const updateCountDDBB = async () => {
        controllerData.count = count;
        console.log(controllerData);
        await db.collection("contadores").doc(contadorID).set(controllerData);
        setSync(0);
    };

    return (
        <div className="container">
            <Link className="btn btn-outline-light mb-1" to="./aforo">
                <i className="bi bi-arrow-left"></i> Volver a Aforo
            </Link>
            <h1 className="display-6">Control de aforo ({contadorID})</h1>
            <hr />
            <div className={dashboardInfo.access ? "container mb-5 border p-0 green-block-decor" : "container mb-5 border p-0 red-block-decor"} id="dashboard-info">
                <ul className="list-group list-group-flush ">
                    <li className="list-group-item bg-dark text-light border-bottom">
                        Zona de control: <span className="float-end fw-bold">{controllerData !== null ? controllerData.zone : "Cargando..."}</span>
                    </li>
                    <li className="list-group-item bg-dark text-light border-bottom">
                        Access:
                        {dashboardInfo.access ? (
                            <span className="float-end fw-bold text-success fs-4">Acceso Permitido</span>
                        ) : (
                            <span className="float-end fw-bold text-danger fs-4">Acceso Denegado</span>
                        )}
                    </li>
                    <li className="list-group-item bg-dark text-light border-bottom">
                        Aforo total:<span className="float-end fw-bold fs-4">{dashboardInfo.global_count}</span>
                    </li>
                </ul>
            </div>
            <div className="row">
                <div>
                    <div className="fs-1 text-warning">{count}</div>
                    <button
                        className={dashboardInfo.access ? "btn btn-success col-6" : "btn btn-secondary col-6 disabled"}
                        onClick={() => {
                            addPerson();
                        }}
                    >
                        Agregar
                    </button>
                    <button
                        className={dashboardInfo.global_count <= 0 ? "btn btn-secondary col-6 disabled" : "btn btn-success col-6"}
                        onClick={() => {
                            decresePerson();
                        }}
                    >
                        Reducir
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contadores;
