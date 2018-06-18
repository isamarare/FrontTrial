import React from 'react'
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
            {this.props.brotherhoods.map((brotherhood,index)=> <div key={index}>{brotherhood.name}</div>)}
          </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => ({
brotherhoods:state.brotherhood.all
})

const mapDispatchToProps = (dispatch) => bindActionCreators({getAllBrotherhoods},dispatch)

export const BrotherhoodList = connect(mapStateToProps,mapDispatchToProps)(BrotherhoodListContainer)