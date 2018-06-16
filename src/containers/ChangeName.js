import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeName} from '../store/auth'

class ChangeNameContainer extends React.Component {
    render(){
        return (
          <div>
            <span>{this.props.name}</span>
            <span>{this.props.edad}</span>
          <button onClick={()=>this.props.changeName('Carlos')}>Cambia Nombre</button>
          </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => ({
name: state.auth.name,
edad:ownProps.edad+1
})

const mapDispatchToProps = (dispatch) => bindActionCreators({changeName},dispatch)

export const ChangeName = connect(mapStateToProps,mapDispatchToProps)(ChangeNameContainer)