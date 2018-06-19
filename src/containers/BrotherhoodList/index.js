import React from 'react'
import moment from 'moment'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { getAllBrotherhoods } from '../../store/brotherhood';


class BrotherhoodListContainer extends React.Component {
  componentDidMount(){
    this.props.getAllBrotherhoods()
  }  
  render(){
        return (
          <div>
              {/* {this.props.brotherhoods.map((brotherhood)=> <BrotherhoodForm initialValues={brotherhood}  key={brotherhood.id} formName ={`brotherhood-${brotherhood.id}`} 
              onDelete= {() => this.props.deleteBrotherhood(brotherhood.id)} onSubmit= {(formData) => this.props.updateBrotherhood(brotherhood.id,formData)}/>)}
             */}
                        
            <table className="table is-bordered container" >
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Creation Date</th>
                </tr>
              </thead>
            <tbody>
                      {this.props.brotherhoods.map((brotherhood,index)=> 
                      <tr key={index}>
                      <td >{brotherhood.position}</td>
                      <td >{brotherhood.name}</td>
                      <td >{brotherhood.email}</td>
                      <td >{moment(brotherhood.created).format('DD-MM-YYYY')}</td>
                      </tr>
                        )
                      }

            </tbody>
          </table>
          </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => ({
brotherhoods:state.brotherhood.all
})

const mapDispatchToProps = (dispatch) => bindActionCreators({getAllBrotherhoods},dispatch)

export const BrotherhoodList = connect(mapStateToProps,mapDispatchToProps)(BrotherhoodListContainer)