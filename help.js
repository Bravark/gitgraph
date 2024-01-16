const IERC20 = require("./ERC20.json")
const hre = require("hardhat")

const provider = new hre.ethers.providers.WebSocketProvider("wss://mainnet.infura.io/ws/v3/733e1d52b51b4bf5b4c443e3ef68fa0e");


async function getTokenDetails(Tok) {
    //const token0Contract = new ethers.Contract(_token0Address, IERC20.abi, _provider)
    const token1Contract = new hre.ethers.Contract(Tok, IERC20.abi, provider)

    const token = {
        address: Tok,   
        decimals: await token1Contract.decimals(),
        symbol: await token1Contract.symbol(),
        name: await token1Contract.name()
    }

    return {token}
}

// async function tt () {
//     const imm = await getTokenDetails("0x8B3192f5eEBD8579568A2Ed41E6FEB402f93f73F")
//     console.log(imm.token.decimals)
// }

// tt()

module.exports = {
    getTokenDetails
}