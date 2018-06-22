import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllBrotherhoods } from '../../store/brotherhood';


class BrotherhoodListContainer extends React.Component {
  componentDidMount() {
    this.props.getAllBrotherhoods()
  }
  render() {
    return (<section className="hero is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            Lista de Hermandades
      </h1>
        </div>
        <table className="table is-striped container" >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Creation Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.brotherhoods.map((brotherhood, index) =>
              <tr key={index}>
                <td >{brotherhood.name}</td>
                <td >{brotherhood.email}</td>
                <td >{moment(brotherhood.created).format('DD-MM-YYYY')}</td>
              </tr>
            )
            }
          </tbody>
        </table>
      </div>
    </section >
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  brotherhoods: state.brotherhood.all
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ getAllBrotherhoods }, dispatch)

export const BrotherhoodList = connect(mapStateToProps, mapDispatchToProps)(BrotherhoodListContainer)