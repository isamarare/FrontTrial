import React from 'react'
import { connect } from 'react-redux'
import { LoginForm } from '../LoginForm'
import { postLogin } from '../../store/auth';
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'

class LoginPageContainer extends React.Component {
    
    render() {
        return (
            <div className="field is-grouped is-grouped-centered">
            {this.props.isLogged ? <Redirect to="/admin"/> : <Redirect to="/login"/> }
                <LoginForm formName = 'login' onSubmit = {this.props.postLogin} errorName = {this.props.error}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth.all,
    isLogged: state.auth.isLogged,
    error: state.auth.error
})

const mapDispatchToProps = (dispatch) => bindActionCreators({postLogin}, dispatch)

export const LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer)