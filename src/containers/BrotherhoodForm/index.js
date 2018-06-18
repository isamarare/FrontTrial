import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import {compose} from 'redux'

  

let BrotherhoodFormContainer = (props) => {
  const { handleSubmit } = props;
  const onFormSubmit = (data) => {
      let formData = new FormData();
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('created', data.created)
      props.onSubmit(formData)

  }
  return <form onSubmit={handleSubmit(onFormSubmit)}> 
  <div>
  <h1>{props.title}</h1>
  <label htmlFor="name">First Name</label>
  <Field name="name" component="input" type="text" />
</div>
<div>
  <label htmlFor="created">Fecha de creación</label>
  <Field name="created" component="input" type="datetime-local" />
</div>
<div>
  <label htmlFor="email">Email</label>
  <Field name="email" component="input" type="email" />
</div>
<button type="submit">Submit</button>
{props.onDelete && <button onClick={props.onDelete}>Delete</button>}
</form>
}

const mapStateToProps = (state,ownProps) => ({
  form:ownProps.formName
  })
  
export const BrotherhoodForm = compose(connect(mapStateToProps),reduxForm({}))(BrotherhoodFormContainer)


