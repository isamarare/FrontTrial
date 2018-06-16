import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Form, Control } from 'react-redux-form';
import {registrationForm} from '../../store/auth'

class RegistrationFormContainer extends React.Component {
  render() {
    return (
      <Form
        model="user"
        onSubmit={(values) => this.handleSubmit(values)}
      >
          <div className="field">
            <label>First name:</label>
            <Control.text model=".user" />
            {this.props.user}
          </div>
          
          <div className="field">
            <label>Email:</label>
            <Control.text model=".mail" type="email" />
            {this.props.mail}
          </div>
            
          <div className="field">
            <label>Date Creation:</label>
            <Control.text model=".dateCreation" />
            {this.props.dateCreation}
          </div>
          
          <button type="submit">
            Submit
          </button>
      </Form>
    )
  }
  }
      
const mapStateToProps = (state,ownProps) => ({
    user: state.registrationForm.user,
    mail: state.registrationForm.mail,
    dateCreation: state.registrationForm.dateCreation,

    })
    
    const mapDispatchToProps = (dispatch) => bindActionCreators({registrationForm},dispatch)
    
    export const RegistrationForm = connect(mapStateToProps,mapDispatchToProps)(RegistrationFormContainer)
