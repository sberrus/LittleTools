import React, { useState } from "react";

const Contadores = () => {
    const [contador, setContador] = useState(0);
    const [syncCounter, setSyncCounter] = useState(0);

    const aumentarContador = () => {
        const nuevoContador = contador + 1;
        checkSync();
        setContador(nuevoContador);
    };
    const reducirContador = () => {
        if (contador <= 0) {
            contador = 0;
            return;
        }
        checkSync();
        const nuevoContador = contador - 1;
        setContador(nuevoContador);
    };

    const checkSync = () => {
        let NewCounter = syncCounter + 1;
        setSyncCounter(NewCounter);
        if (syncCounter >= 4) {
            console.log(`Enviados: ${contador} a la bbdd`);
            setSyncCounter(0);
            return;
        }
    };

    return (
        <div className="container">
            <h1 className="display-6">Control de aforo (Controlador)</h1>
            <hr />
            <h4>Controlador:[name] </h4>
            <h4>Status: [status]</h4>
            <h4>Contados: {contador}</h4>
            <div className="row">
                <div className="row d-flex justify-content-center">
                    <button
                        className="btn btn-success col-5"
                        onClick={() => {
                            aumentarContador();
                        }}
                    >
                        Agregar
                    </button>
                    <button
                        className={contador === 0 ? "btn btn-secondary col-5 disabled" : "btn btn-warning col-5"}
                        onClick={() => {
                            reducirContador();
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
