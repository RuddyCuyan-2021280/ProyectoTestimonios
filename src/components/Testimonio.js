import React from "react";
import '../Stylesheets/Testimonio.css'

export function Testimonio(props) {
  return (
    <div className="container">

      <img 
        className="image-testimonio" 
        src={require(`../images/picture${props.imagen}.jpg`)}
        alt="foto de persona1"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}
