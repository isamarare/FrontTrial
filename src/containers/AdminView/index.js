import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { getAllBrotherhoods, addBrotherhood, deleteBrotherhood,updateBrotherhood } from '../../store/brotherhood';
import { AdminForm } from '../AdminForm';



class AdminViewContainer extends React.Component {
  componentDidMount(){
    this.props.getAllBrotherhoods()
  }  
  render(){

        return (

    <table>
      <tr>
        <td>name</td>
        <td>email</td>
      </tr>
      {this.props.brotherhoods.map((brotherhood)=> <AdminForm initialValues={brotherhood}  key={brotherhood.id} formName ={`brotherhood-${brotherhood.id}`}  
      onDelete= {() => this.props.deleteBrotherhood(brotherhood.id)} onSubmit= {(formData) => this.props.updateBrotherhood(brotherhood.id,formData)}/>)}
</table>
            // <BrotherhoodForm title = 'Create' formName = 'create' onSubmit = {this.props.addBrotherhood}/>
        )
    }
}

const mapStateToProps = (state,ownProps) => ({
brotherhoods:state.brotherhood.all
})

const mapDispatchToProps = (dispatch) => bindActionCreators({getAllBrotherhoods,addBrotherhood,deleteBrotherhood,updateBrotherhood},dispatch)

export const AdminView = connect(mapStateToProps,mapDispatchToProps)(AdminViewContainer)