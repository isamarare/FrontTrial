import {Header} from '../../containers/Header'
import Footer from '../Footer'
import React, {Component} from 'react'

export class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}