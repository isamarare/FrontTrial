import React from 'react'
import { Field, reduxForm } from 'redux-form'

let RegistrationFormContainer = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}> 
  
  <div>
  <label htmlFor="firstName">First Name</label>
  <Field name="firstName" component="input" type="text" />
</div>
<div>
  <label htmlFor="creationDate">Fecha de creación</label>
  <Field name="creationDate" component="input" type="date" />
</div>
<div>
  <label htmlFor="email">Email</label>
  <Field name="email" component="input" type="email" />
</div>
<button type="submit">Submit</button>

</form>
}

export const RegistrationForm = reduxForm({
  // a unique name for the form
  form: 'register'
})(RegistrationFormContainer)