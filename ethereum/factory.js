import web3 from './web3'
import DisputeFactory from './build/DisputeFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(DisputeFactory.interface),
  '0x310022bBf7c2604BBfc13c67ABe570eDC7c586B3'
)

export default instance
