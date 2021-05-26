import "./aforo.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "./../../../firebase";

const Aforo = () => {
    const [admin, setAdmin] = useState(null); // [TODO: REPLACE WITH API TO CONTROLL THE MODIFICATIONS]
    const [list, setList] = useState([]);
    const [reloader, setReloader] = useState(true);

    //fields
    const [adminPassField, setAdminPassField] = useState("");

    useEffect(() => {
        const getData = async () => {
            //get data from firestore coll "dashboard" -> doc "control"
            const adminData = await db.collection("dashboard").doc("control").get();
            setAdmin(adminData.data());

            //get the list of controllers
            const countersList = await db.collection("contadores").get();
            const listArray = countersList.docs.map((item) => item.data());
            setList(listArray);
            try {
            } catch (error) {
                console.log(error);
            }
        };
        getData();

        //refreshing data
        setTimeout(() => {
            setReloader(!reloader);
        }, 5000);
        console.log("data cargada");
    }, [reloader, setReloader]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = document.querySelector("#panel_name_field").value;
        const zone = document.querySelector("#panel_zone_field").value;
        const adminPass = admin.admin_pass;
        adminPass === adminPassField ? addManagerToDDBB(name, zone) : console.log("Contraseña incorrecta");
        setAdminPassField("");
    };

    const addManagerToDDBB = async (name, zone) => {
        const userData = { name, zone, count: 0 };
        try {
            await db.collection("contadores").doc(name).set(userData);
            console.log("usuario creado correctamente");
            setList([...list, userData]);
        } catch (error) {}
        console.log(userData);
    };

    const deleteItem = async (id) => {
        let adminResponse = window.confirm(`Deseas Eliminar a ${id}?`);
        if (adminResponse) {
            try {
                await db.collection("contadores").doc(id).delete();
                const updatedList = list.filter((item) => item.name !== id);
                setList(updatedList);
            } catch (error) {
                console.log(error);
            }
        }
    };
    return admin !== null ? (
        <div className="container-fluid">
            <div className="container">
                <h1 className="display-4">Control de aforo</h1>
                <div className="container">
                    <div className="container mb-5 border p-0 green-block-decor" id="dashboard-info">
                        <ul className="list-group list-group-flush ">
                            <li className="list-group-item bg-dark text-light border-bottom">
                                Máximo Aforo:
                                <span className="float-end fw-bold fs-2">{admin.max_aforo}</span>
                            </li>
                            <li className="list-group-item bg-dark text-light border-bottom">
                                Estado:
                                <span className={admin.access ? "float-end fw-bold text-success" : "float-end fw-bold text-danger"}>
                                    {admin.access ? "Accesible" : "Aforo Completo"}
                                </span>
                            </li>
                            <li className="list-group-item bg-dark text-light border-bottom">
                                Aforo Total: <span className={admin.access ? "float-end fw-bold text-success" : "float-end fw-bold text-danger"}>{admin.global_count}</span>
                            </li>
                            <li className="list-group-item bg-dark text-light border-bottom">
                                Total de Contadores: <span className="float-end fw-bold">{list.length}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-5 m-auto" id="managers-panel">
                        <p>
                            <button
                                className="btn btn-outline-light green-block-decor me-5"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#addPanel"
                                aria-expanded="false"
                                aria-controls="addPanel"
                            >
                                Agregar Controlador <i className="bi bi-person-plus"></i>
                            </button>
                        </p>
                        <div className="collapse col-12 col-md-6 green-block-decor" id="addPanel">
                            <div className="card card-body bg-dark border mb-4" id="add-panel">
                                <form onSubmit={handleSubmit} autoComplete="off">
                                    <fieldset>
                                        <legend>Agregar Usuario</legend>
                                        <div className="mb-3">
                                            <label className="form-label">Nombre Usuario</label>
                                            <input type="text" className="form-control" id="panel_name_field" placeholder="Ingrese Usuario" autoComplete="off" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Zona</label>
                                            <select className="form-select" id="panel_zone_field">
                                                <option>Entrada 1</option>
                                                <option>Entrada 2</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Contraseña Administrador</label>
                                            <input
                                                type="password"
                                                className="form-control w-50"
                                                placeholder="Ingrese Usuario"
                                                id="panel_admin_pass"
                                                autoComplete="off"
                                                value={adminPassField}
                                                onChange={(e) => {
                                                    setAdminPassField(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-outline-success">
                                            Añadir Usuario
                                        </button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 m-auto" id="managers-list">
                        <table className="table-dark border w-100 green-block-decor">
                            <thead className="border-bottom">
                                <tr>
                                    <th scope="col">NOMBRE</th>
                                    <th scope="col">ENTRADA</th>
                                    <th scope="col">CUENTA</th>
                                    <th scope="col" className="float-end">
                                        ACCESS
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {list.map((item, index) => (
                                    <tr key={index} className="border-bottom">
                                        <td className="fw-bold ps-3">{item.name}</td>
                                        <td>{item.zone}</td>
                                        <td>{item.count}</td>
                                        <td className="d-flex flex-column float-end">
                                            <Link className="btn btn-outline-success m-2" id="accesso" to={`contadores:${item.name}`}>
                                                <i className="bi bi-arrow-right-square"></i>
                                            </Link>
                                            <button
                                                className="btn btn-outline-danger m-2"
                                                id="delete"
                                                onClick={() => {
                                                    deleteItem(item.name);
                                                }}
                                            >
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        "Cargando"
    );
};

export default Aforo;
