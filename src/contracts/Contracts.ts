import Web3 from 'web3'
import { Abis } from '../abis/Abis'
import { PROVIDER } from "../utils/Constants"
const web3 = new Web3(new Web3.providers.HttpProvider(PROVIDER))

const Constract_address = {
    IRON: "0x7b65b489fe53fce1f6548db886c08ad73111ddd8"
}

const Constracts = {
    IRON: new web3.eth.Contract(Abis.IronAbi, Constract_address.IRON)
}

export default Constracts;