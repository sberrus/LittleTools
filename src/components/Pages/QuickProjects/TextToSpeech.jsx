import React from "react";

const TextToSpeech = () => {
    const speech = () => {
        const speech = document.getElementById("speech").value;
        const volume = parseFloat(document.getElementById("volume").value);
        let mensaje = new SpeechSynthesisUtterance();
        mensaje.volume = volume / 100;
        mensaje.text = speech;
        speechSynthesis.speak(mensaje);
    };
    return (
        <div className="container">
            <h1 className="display-6">Texto a Voz integración de libreria Hash.js</h1>

            <div className="container w-50 d-flex justify-content-center border mt-5 rounded">
                <form>
                    <label className="d-block">Introduce el texto a continuación:</label>
                    <input type="text" id="speech" placeholder="Introducir texto" className="d-block" autoComplete="false" value="Texto de prueba" readOnly />
                    <label htmlFor="">Volumen:</label>
                    <input type="range" value="75" min="0" max="100" placeholder="texto a convertir" className="d-block" id="volume" readOnly />

                    <button
                        className="btn btn-outline-light"
                        onClick={(e) => {
                            e.preventDefault();
                            speech();
                        }}
                    >
                        Hablar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TextToSpeech;
