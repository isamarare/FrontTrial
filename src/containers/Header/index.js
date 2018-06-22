import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { postLogout } from '../../store/auth'
import { bindActionCreators } from 'redux'
import './style.css'

class HeaderContainer extends React.Component {
  handleClick() {
    this.props.postLogout();
  }
  render() {
    return (
      <div>
        <section className="hero is-medium is-danger">
          <div className="hero-head">
            <nav className="navbar">
              <div id="navbarMenuTop" className="navbar-menu">
                <div className="navbar-end">
                  <Link to="/" className="navbar-item " >
                    <b>Home</b>
                  </Link>
                  <Link to="/register" className="navbar-item">
                    <b> Registrate</b>
                  </Link>
                  {this.props.isLogged ?
                    <React.Fragment>
                      <Link to="/admin" className="navbar-item">
                        <b>Admin</b>
                      </Link>
                      <Link type="button" to="/" className="navbar-item" onClick={() => this.handleClick()}>
                        <b>LogOut</b>
                      </Link> </React.Fragment> :
                    <React.Fragment>
                      <Link to="/login" className="navbar-item">
                        <b>LogIn</b>
                      </Link>
                    </React.Fragment>}
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
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  isLogged: state.auth.isLogged,
  all: state.auth.all
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ postLogout }, dispatch)

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)