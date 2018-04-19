const assert = require('assert')
const expect = require('chai').expect
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())

const compiledFactory = require('../ethereum/build/DisputeFactory.json')
const compiledDispute = require('../ethereum/build/Dispute.json')

let accounts
let factory
let disputeAddress
let dispute
let initiatorAccount
let respondentAccount
let arbitratorAccount
let contractInitiator
let contractRespondent

beforeEach(async () => {
  accounts = await web3.eth.getAccounts()
  initiatorAccount = accounts[0]
  respondentAccount = accounts[1]
  arbitratorAccount = accounts[2]

  factory = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
  .deploy({ data: compiledFactory.bytecode})
  .send({ from: initiatorAccount, gas: '1000000' })

  await factory.methods.createDispute(respondentAccount).send({
    from: initiatorAccount,
    gas: '1000000'
  })

  ;[disputeAddress] = await factory.methods.getDeployedDisputes().call()

  dispute = await new web3.eth.Contract(
    JSON.parse(compiledDispute.interface),
    disputeAddress
  )

  contractInitiator = await dispute.methods.initiator().call()
  contractRespondent = await dispute.methods.respondent().call()
})

describe('Disputes', () => {
  it('Deploys a factory and a dispute', () => {
    assert(factory.options.address)
    assert(dispute.options.address)
  })

  it('correctly sets the parties to the dispute', async () => {
    assert.equal(contractInitiator, initiatorAccount)
    assert.equal(contractRespondent, respondentAccount)
  })
})
