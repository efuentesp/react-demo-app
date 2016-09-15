import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {

  return (
    <div className="abs-center wd-xl">
      <div className="text-center mb-xl">
          <div className="text-lg mb-lg">404</div>
          <p className="lead m0">No pudimos encontrar esta página.</p>
          <p>La página que solicitó no existe.</p>
      </div>
      <div className="input-group mb-xl">
        <input type="text" placeholder="Intenta haciendo una búsqueda" className="form-control" />
        <span className="input-group-btn">
          <button type="button" className="btn btn-default">
            <em className="fa fa-search" />
          </button>
        </span>
      </div>
      <ul className="list-inline text-center text-sm mb-xl">
        <li><Link to="/" className="text-muted">Ir al Inicio</Link></li>
        <li className="text-muted">|</li>
        <li><Link to="login" className="text-muted">Login</Link></li>
      </ul>
    </div>
  );
};

export default NotFound;
