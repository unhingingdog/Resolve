import React, { Component } from 'react'
import factory from '../ethereum/factory'
import web3 from '../ethereum/web3'

export default class DisputeIndex extends Component {
  static async getInitialProps() {

    // const user = await web3.eth.getAccounts()
    // console.log(user)
    const disputes = await factory.methods.getUserDisputes('0xa80a4e5be677a1cfef80a08daa627762610149d9').call()

    return { disputes }
  }

  constructor(props) {
    super(props)

    this.renderCampaigns = this.renderCampaigns.bind(this)
  }

  async renderCampaigns() {
    await web3.currentProvider.publicConfigStore.getState().selectedAddress
  }




  render() {
    this.renderCampaigns()

    return(
      <div>
        <h1>{this.props.disputes}</h1>
      </div>
    )
  }
}
