import web3 from './web3'
import DisputeFactory from './build/DisputeFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(DisputeFactory.interface),
  '0x661bA534e16edF84234DD0C025e8A35797adA861'
)

export default instance
