import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllBrotherhoods, addBrotherhood, deleteBrotherhood, updateBrotherhood } from '../../store/brotherhood';
import { AdminForm } from '../AdminForm';
import './style.css'


class AdminViewContainer extends React.Component {
  componentDidMount() {
    this.props.getAllBrotherhoods()
  }
  render() {

    return (
      <div className='wrapper'>
        <header className='grid'>
          <h4 className="label">Position</h4>
          <h4 className="label">email</h4>
          <h4 className="label">User</h4>

          {/* <h4 class="title is-4">Title 4</h4> */}

        </header>

        {this.props.brotherhoods.map((brotherhood) => <AdminForm className='grid'
          initialValues={brotherhood} key={brotherhood.id}
          formName={`brotherhood-${brotherhood.id}`}
          onDelete={() => this.props.deleteBrotherhood(brotherhood.id)}
          onSubmit={(formData) => this.props.updateBrotherhood(brotherhood.id, formData)} />)}
      </div>
    )

  }

}

const mapStateToProps = (state, ownProps) => ({
  brotherhoods: state.brotherhood.all
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ getAllBrotherhoods, addBrotherhood, deleteBrotherhood, updateBrotherhood }, dispatch)

export const AdminView = connect(mapStateToProps, mapDispatchToProps)(AdminViewContainer)