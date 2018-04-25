import React, { Component } from 'react'
import factory from '../ethereum/factory'

export default class DisputeIndex extends Component {
  static async getInitialProps() {
    const disputes = await factory.methods.getDeployedDisputes().call()

    return { disputes }
  }


  render() {
    console.log(this.props.disputes)
    return <h1>sdfsfdsdfsd</h1>
  }
}
