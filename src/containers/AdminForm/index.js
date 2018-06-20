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
  return <form className={props.className} onSubmit={handleSubmit(onFormSubmit)}>
    <Field className="input" name="position" component="input" type="number" />
    <Field className="input" name="name" component="input" type="text" />
    <Field className="input" name="email" component="input" type="email" />

    <button className="button is-link" type="submit">Submit</button>
    {props.onDelete && <button className="button is-danger" onClick={props.onDelete}>Delete</button>}
  </form>
}

const mapStateToProps = (state, ownProps) => ({
  form: ownProps.formName
})

export const AdminForm = compose(connect(mapStateToProps), reduxForm({}))(AdminFormContainer)


