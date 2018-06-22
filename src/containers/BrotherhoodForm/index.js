import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'
import './style.css'

let BrotherhoodFormContainer = (props) => {
  const { handleSubmit } = props;
  const onFormSubmit = (data) => {
    let formData = new FormData();
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('created', data.created)
    props.onSubmit(formData)

  }

  return <div className="field is-grouped is-grouped-centered">
    <div className="hero is-medium is-bold">
      <div className="hero-body">


          <div className="columns is-centered">
            <h1 className="title is-3">Registra tu Hermandad</h1>
          </div>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="column">
              <div className="control">
                <Field className="input" name="name" component="input" type="text" required />
                <label className="label">Nombre de hermandad</label>
                <i className="bar"></i>
                {/* <span className="help is-danger">This email is invalid</span> */}
              </div>
              <div className="control">
                <Field name="email" component="input" type="email" className="input" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" required />
                {/* <i className="fa material-icons">warning</i> */}
                <label className="label">Email</label>
                <i className="bar"></i>
                {/* <span className="help is-danger">This email is invalid</span> */}
              </div>
              <div className="control">
                <Field className="input" name="created" component="input" type="datetime-local" required />
                {/* <i className="fa material-icons">warning</i> */}
                <label className="label">Fecha de creación</label>
                <i className="bar"></i>
                {/* <span className="help is-danger">This email is invalid</span> */}
              </div>


              <div className="control">
                <button type="submit" className="button is-success">Registrar</button>
              </div>

            </div>
          </form>

      </div>
    </div>
  </div>

}

const mapStateToProps = (state, ownProps) => ({
  form: ownProps.formName
})

export const BrotherhoodForm = compose(connect(mapStateToProps), reduxForm({}))(BrotherhoodFormContainer)


