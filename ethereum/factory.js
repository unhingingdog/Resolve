import web3 from './web3'
import DisputeFactory from './build/DisputeFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(DisputeFactory.interface),
  '0x447AEbA5C54eFCB5313ca710d169cD2b27B73A7f'
)

export default instance
