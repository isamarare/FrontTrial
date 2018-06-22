import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'

let LoginFormContainer = (props) => {
  const { handleSubmit } = props;
  const onFormSubmit = (data) => {
    let formData = new FormData();
    formData.append('username', data.username)
    formData.append('password', data.password)
    formData.append('grant_type', 'password')
    formData.append('client_id', 'admin')
    props.onSubmit(formData)

  }
  return <div className="hero is-medium is-bold">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered control">
          <article className="card is-rounded">
            <div className="card-content">
              {props.errorName != '' ? <label className="label is-small has-text-danger">Usuario y/o contraseña incorrecto</label> : <span></span>}
              <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="control field">
                  <Field className="input" name="username" component="input" type="text" placeholder="Usuario" />
                </div>
                <div className="control field">
                  <Field className="input" name="password" component="input" type="password" placeholder="Password" />
                </div>
                <button className="button is-success is-medium is-fullwidth" type="submit">
                  Login
                </button>
              </form>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
}
const mapStateToProps = (state, ownProps) => ({
  form: ownProps.formName,
  error: ownProps.errorName
})

export const LoginForm = compose(connect(mapStateToProps), reduxForm({}))(LoginFormContainer)