import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { getAllBrotherhoods, addBrotherhood, deleteBrotherhood,updateBrotherhood } from '../../store/brotherhood';
import { BrotherhoodForm } from '../BrotherhoodForm';


class RegisterViewContainer extends React.Component {
  componentDidMount(){
    this.props.getAllBrotherhoods()
  }  
  render(){

        return (
          <div>
              {this.props.brotherhoods.map((brotherhood)=> <BrotherhoodForm initialValues={brotherhood}  key={brotherhood.id} formName ={`brotherhood-${brotherhood.id}`} 
              onDelete= {() => this.props.deleteBrotherhood(brotherhood.id)} onSubmit= {(formData) => this.props.updateBrotherhood(brotherhood.id,formData)}/>)}
            <BrotherhoodForm title = 'Create' formName = 'create' onSubmit = {this.props.addBrotherhood}/>
          </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => ({
brotherhoods:state.brotherhood.all
})

const mapDispatchToProps = (dispatch) => bindActionCreators({getAllBrotherhoods,addBrotherhood,deleteBrotherhood,updateBrotherhood},dispatch)

export const RegisterView = connect(mapStateToProps,mapDispatchToProps)(RegisterViewContainer)