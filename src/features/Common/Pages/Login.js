import React from 'react';
import { Panel, Button } from 'react-bootstrap';

class Login extends React.Component {

  render() {
    return (
      <div className="block-center mt-xl wd-xl">
        { /* START panel */ }
        <div className="panel panel-dark panel-flat">
          <div className="panel-heading text-center">
            <a href="#">
              <img src="../../assets/img/logo.png" alt="Image" className="block-center img-rounded" />
            </a>
          </div>
          <Panel>
            <p className="text-center pv">LOGIN</p>
            <form role="form" data-parsley-validate="" noValidate className="mb-lg">
              <div className="form-group has-feedback">
                <input id="exampleInputEmail1" type="email" placeholder="Correo electrónico" autoComplete="off" required="required" className="form-control" />
                <span className="fa fa-envelope form-control-feedback text-muted" />
              </div>
              <div className="form-group has-feedback">
                <input id="exampleInputPassword1" type="password" placeholder="Contraseña" required="required" className="form-control" />
                <span className="fa fa-lock form-control-feedback text-muted" />
              </div>
              <div className="clearfix">
                <div className="checkbox c-checkbox pull-left mt0">
                  <label>
                    <input type="checkbox" value="" name="remember" />
                    <em className="fa fa-check" />Recordarme
                  </label>
                </div>
                <div className="pull-right"><a href="/recover" className="text-muted">¿Olvidaste la contraseña?</a>
                </div>
              </div>
              <Button type="submit" className="btn btn-block btn-primary mt-lg">Login</Button>
            </form>
          </Panel>
        </div>
        { /* END panel */ }
      </div>
    );
  }

}

export default Login;
