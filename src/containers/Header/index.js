import { connect } from 'react-redux'
import HeaderComponent from '../../components/Header'

class HeaderContainer extends React.Component{

  render() {
    return (
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
              <Link to="/register" className="navbar-item">
                <b> Registrate</b>
              </Link>
              {isLogged ? 
                  <Link to="/logout" className="navbar-item">
                    <b>LogOut</b>
              </Link>  
                  : 
                  <div>
                  <Link to="/login" className="navbar-item">
                  <b>LogIn</b>
                  </Link> 


<Link to="/login" className="navbar-item">
<b>mamoner</b>
</Link> 
</div>
                    }
                
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
    )
}
}   
const mapStateToProps = (state, ownProps) => ({
  isLogged: state.auth.isLogged,
  all: state.auth.all
})

export const Header = connect(mapStateToProps)(HeaderContainer)