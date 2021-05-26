import React, { useState } from "react";

const TextToSpeech = () => {
    const [speechText, setSpeechText] = useState("Hola Mundo");
    const [volume, setVolume] = useState(50);

    const speech = () => {
        let mensaje = new SpeechSynthesisUtterance();
        mensaje.volume = volume / 100;
        mensaje.text = speechText;
        speechSynthesis.speak(mensaje);
    };
    return (
        <div className="container">
            <h1 className="display-6">Probando API SpeechSyntesys Javascript</h1>

            <div className="container w-50 d-flex justify-content-center border mt-5 rounded">
                <form className="d-flex flex-column">
                    <label className="d-block">Introduce el texto a continuación:</label>
                    <input
                        type="text"
                        id="speech"
                        placeholder="Introducir texto"
                        className="d-block"
                        autoComplete="false"
                        value={speechText}
                        onChange={(e) => {
                            setSpeechText(e.target.value);
                        }}
                    />
                    <label htmlFor="">Volumen:</label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        placeholder="texto a convertir"
                        className="d-block"
                        id="volume"
                        value={volume}
                        onChange={(e) => {
                            setVolume(parseInt(e.target.value));
                        }}
                    />

                    <button
                        className="btn btn-outline-light w-100 mt-3"
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
