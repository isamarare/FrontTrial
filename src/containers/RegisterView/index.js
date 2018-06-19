import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { getAllBrotherhoods, addBrotherhood, deleteBrotherhood,updateBrotherhood } from '../../store/brotherhood';
import { BrotherhoodForm } from '../BrotherhoodForm';
import { BrotherhoodList } from '../BrotherhoodList';


class RegisterViewContainer extends React.Component {
  componentDidMount(){
    this.props.getAllBrotherhoods()
  }  
  render(){

        return (

          <div> 
            <section className='container'>
            <BrotherhoodList/>
            <div className="box">
            <BrotherhoodForm title = 'Registra tu hermandad' formName = 'create' onSubmit = {this.props.addBrotherhood}/>
            </div>
            </section>
          </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => ({
brotherhoods:state.brotherhood.all
})

const mapDispatchToProps = (dispatch) => bindActionCreators({getAllBrotherhoods,addBrotherhood,deleteBrotherhood,updateBrotherhood},dispatch)

export const RegisterView = connect(mapStateToProps,mapDispatchToProps)(RegisterViewContainer)