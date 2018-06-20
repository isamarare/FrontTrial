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
  return <div className="hero is-fullheight is-medium is-bold">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered">
          <article className="card is-rounded">

            <div className="card-content">
              <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="control field">
                  <Field className="input" name="username" component="input" type="text" placeholder="Usuario" />
                </div>
                <div className="control field">
                  <Field className="input" name="password" component="input" type="password" placeholder="Password" />
                  <i className="fa fa-lock"></i>
                </div>
                <button className="button is-primary is-medium is-fullwidth" type="submit">
                  <i className="fa fa-user"></i>
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
  form: ownProps.formName
})

export const LoginForm = compose(connect(mapStateToProps), reduxForm({}))(LoginFormContainer)