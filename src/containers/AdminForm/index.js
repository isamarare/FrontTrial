import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import {compose} from 'redux'

  

let AdminFormContainer = (props) => {
  const { handleSubmit } = props;
  const onFormSubmit = (data) => {
      let formData = new FormData();
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('created', data.created)
      props.onSubmit(formData)

  }
  return <form onSubmit={handleSubmit(onFormSubmit)}> 
  <tr>
      <React.Fragment>
        <td><Field name="name" component="input" type="text" /></td>
        <td><Field name="email" component="input" type="email" /></td>
      
      <td><button type="submit">Submit</button></td>
      {props.onDelete && <td><button onClick={props.onDelete}>Delete</button></td>}
      </React.Fragment>
    </tr>
</form>
}

const mapStateToProps = (state,ownProps) => ({
  form:ownProps.formName
  })
  
export const AdminForm = compose(connect(mapStateToProps),reduxForm({}))(AdminFormContainer)


