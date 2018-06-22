import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'


let AdminFormContainer = (props) => {
  const { handleSubmit } = props;
  const onFormSubmit = (data) => {
    let formData = new FormData();
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('created', data.created)
    formData.append('position', data.position)
    props.onSubmit(formData)

  }
  return <form className={props.className} >
    <Field className="input" name="position" component="input" type="number" />
    <Field className="input" name="name" component="input" type="text" />
    <Field className="input" name="email" component="input" type="email" />
    <Field className="input" name="created" component="input" type="text" />
    <button className="button is-link" onSubmit={handleSubmit(onFormSubmit)} >Submit</button>
    {props.onDelete && <button className="button is-danger" onClick={() => props.onDelete()} type="submit" >Delete</button>}
  </form>
}

const mapStateToProps = (state, ownProps) => ({
  form: ownProps.formName,
  token: state.auth.token
})

export const AdminForm = compose(connect(mapStateToProps), reduxForm({}))(AdminFormContainer)


