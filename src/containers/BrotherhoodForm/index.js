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
  
  return <div><form display = "inline-flex" onSubmit={handleSubmit(onFormSubmit)}> 

  <div className="field">
  <h1 className="title is-3">{props.title}</h1>
  <label className="label" htmlFor="name" >First Name</label>
  <div className="control">
  <Field className="input" name="name" component="input" type="text" placeholder="Text input" required/>
  </div>
  </div>

  <div className="field">
  <label className="label" htmlFor="created">Fecha de creación</label>
  <div className="control">
  <Field className="input" name="created" component="input" type="datetime-local" required/>
  </div>
  </div>
  <div className="field">
  <label className="label" htmlFor="email">Email</label>
  
  <div className="control has-icons-left has-icons-right">
  <Field name="email" component="input" type="email" className="input" placeholder="Email input" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"/>
  <span className="icon is-medium is-left">
    <i className="fas fa-envelope"></i>
  </span>
  <span className="icon is-medium is-right">
    <i className="fas fa-check"></i>
  </span>
  </div>

</div>


<div className="field is-grouped">
  <div className="control">
    <button type="submit" className="button is-link">Submit</button>
  </div>
  {props.onDelete && <div className="control"><button className="button is-danger" onClick={props.onDelete}>Delete</button></div>}
</div>

</form>
</div>
}

const mapStateToProps = (state,ownProps) => ({
  form:ownProps.formName
  })
  
export const BrotherhoodForm = compose(connect(mapStateToProps),reduxForm({}))(BrotherhoodFormContainer)


