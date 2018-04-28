import React, { Component } from 'react'
import factory from '../ethereum/factory'
import web3 from '../ethereum/web3'

export default class DisputeIndex extends Component {

constructor(props) {
  super(props)

  this.state = {
    user: '',
    disputes: []
  }
}

getDisputes = async (user) => {
  const disuptes = await factory.methods.getUserDisputes(user).call()
  return disuptes
}

async componentDidMount() {
  const users = await web3.eth.getAccounts()
  const disputes = await this.getDisputes(users[0])
  this.setState({ user: users[0], disputes })
}

  render() {
    return(
      <div>
        <h1>{this.state.disputes}</h1>
      </div>
    )
  }
}
