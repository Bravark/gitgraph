TransactionDescription {
  args: [
    '0xa9780eD8f872E7C2259C151246166bd5F3ecB4E5',
    BigNumber { value: "378621000000000000000000000000000" },
    BigNumber { value: "378621000000000000000000000000000" },
    BigNumber { value: "1000000000000000000" },
    '0xD7EA1B7f45508cEd22aD2C39cd0CaA48CCB0E3D2',
    BigNumber { value: "1684575757" },
    token: '0xa9780eD8f872E7C2259C151246166bd5F3ecB4E5',
    amountTokenDesired: BigNumber { value: "378621000000000000000000000000000" },
    amountTokenMin: BigNumber { value: "378621000000000000000000000000000" },
    amountETHMin: BigNumber { value: "1000000000000000000" },
    to: '0xD7EA1B7f45508cEd22aD2C39cd0CaA48CCB0E3D2',
    deadline: BigNumber { value: "1684575757" }
  ],
  functionFragment: {
    type: 'function',
    name: 'addLiquidityETH',
    constant: false,
    inputs: [
      [ParamType],
      [ParamType],
      [ParamType],
      [ParamType],
      [ParamType],
      [ParamType]
    ],
    outputs: [ [ParamType], [ParamType], [ParamType] ],
    payable: true,
    stateMutability: 'payable',
    gas: null,
    _isFragment: true,
    constructor: [Function: FunctionFragment] {
      from: [Function (anonymous)],
      fromObject: [Function (anonymous)],
      fromString: [Function (anonymous)],
      isFunctionFragment: [Function (anonymous)]
    },
    format: [Function (anonymous)]
  },
  name: 'addLiquidityETH',
  signature: 'addLiquidityETH(address,uint256,uint256,uint256,address,uint256)',
  sighash: '0xf305d719',
  value: BigNumber { value: "1000000000000000000" }
}