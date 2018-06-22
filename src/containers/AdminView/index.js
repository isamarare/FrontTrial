import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllBrotherhoods, addBrotherhood, deleteBrotherhood, updateBrotherhood } from '../../store/brotherhood';
import { auth } from '../../store/auth';
import { AdminForm } from '../AdminForm';
import './style.css'


class AdminViewContainer extends React.Component {
  componentDidMount() {
    this.props.getAllBrotherhoods()
  }
  render() {

    return (
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className='wrapper'>
              <header className='grid'>
                <h4 className="label">Posición</h4>
                <h4 className="label">Nombre</h4>
                <h4 className="label">Email</h4>
                <h4 className="label">Fecha de Creación</h4>
              </header>
              {this.props.brotherhoods.map((brotherhood) => <AdminForm className='grid'
                initialValues={brotherhood} key={brotherhood.id}
                formName={`brotherhood-${brotherhood.id}`}
                onDelete={() => this.props.deleteBrotherhood(brotherhood.id)}
                onSubmit={(formData) => this.props.updateBrotherhood(brotherhood.id, formData, )} />)}
            </div>
          </div>
        </div>
      </section>
    )

  }

}

const mapStateToProps = (state, ownProps) => ({
  brotherhoods: state.brotherhood.all
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ getAllBrotherhoods, addBrotherhood, deleteBrotherhood, updateBrotherhood, auth }, dispatch)

export const AdminView = connect(mapStateToProps, mapDispatchToProps)(AdminViewContainer)