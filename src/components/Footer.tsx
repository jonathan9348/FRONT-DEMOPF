import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer(): any {
  return (
    <footer>
      <div>
        <img src="" alt="" />
        <div>
          <h3 className="">Nosotros</h3>
          <h3 className="">Henry</h3>
          <h3 className="">Estudia con nosotros.</h3>
        </div>
        <div>
          <h3 className="">Tienda Online</h3>
          <h3 className="">Cómo comprar</h3>
          <h3 className="">Términos y condiciones</h3>
          <h3 className="">Cobertura</h3>
        </div>
        <div>
          <h3 className="">Atención al cliente</h3>
          <h3 className="">Preguntas frecuentes</h3>
          <h3 className="">Políticas</h3>
        </div>
      </div>
      <div>
        <NavLink to="/contact">Contact us</NavLink> {/*Una redireccion para un futuro componente de contacto*/}
      </div>
    </footer>
  );
}
