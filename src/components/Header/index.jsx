import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'

const HeaderComponent = ({isLogged,all}) => {return (
  <div>
    <section className="hero is-medium is-danger">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <div className="navbar-burger burger" id="burger" /*onclick={toggleBurger()}*/>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div id="navbarMenuTop" className="navbar-menu">
              <div className="navbar-end">
                <Link to="/" className="navbar-item" >
                  <b>Home</b>
                </Link>
                <Link to="/register" className="na
                vbar-item">
                  <b> Registrate</b>
                </Link>

                {isLogged ? 
                  <React.Fragment>
                    <Link to="/admin" className="navbar-item">
                      <b>Admin</b>
                    </Link>
                    <Link to="/logout" className="navbar-item">
                      <b>LogOut</b>
                    </Link> </React.Fragment> : 
                  <React.Fragment>
                    <Link to="/login" className="navbar-item">
                    <b>LogIn</b>
                    </Link> 
                  </React.Fragment>}
                  
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="hero-body bg-img">
        <div className="container has-text-centered">
          <h1 className="title has-text-white" >
            Resistencia de Almonte
      </h1>
          <h2 className="subtitle has-text-white" >
            Nuestra Señora La Virgen del Rocio
      </h2>
        </div>
      </div>

    </section>

  </div>

)}
export default HeaderComponent