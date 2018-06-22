import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Redirect } from 'react-router-dom'
import { addBrotherhood } from '../../store/brotherhood';
import { BrotherhoodForm } from '../BrotherhoodForm';



class RegisterViewContainer extends React.Component {
  render(){
        return (
          <div> 
            {this.props.isAdded ? <Redirect to="/"/> : <Redirect to="/register"/> }
            <BrotherhoodForm title = 'Registra tu hermandad' formName = 'create' onSubmit = {this.props.addBrotherhood}/>
          </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => ({
brotherhoods:state.brotherhood.all,
isAdded:state.brotherhood.isAdded

})

const mapDispatchToProps = (dispatch) => bindActionCreators({addBrotherhood},dispatch)

export const RegisterView = connect(mapStateToProps,mapDispatchToProps)(RegisterViewContainer)