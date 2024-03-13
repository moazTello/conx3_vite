import Web3 from 'web3';

export const lastBlockChain = async (req,res) => {
  const web3 = new Web3(process.env.WEB3);
  try{
     const blockNumber = await web3.eth.getBlockNumber();
     console.log('Last block number:', blockNumber);
     res.status(201).json(Number(blockNumber));
  }
  catch(err){
    console.log(err)
    res.status(500).json({
      "message":"internal our server error "
    });
  }
}

export const balance = async (req,res) => {
  const USDTContractAddress = process.env.USDT;
  const USDTContractABI = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
  ];
  const web3 = new Web3(process.env.WEB3);
  const usdtContract = new web3.eth.Contract(USDTContractABI, USDTContractAddress);
  try{
    const { address } = req.body;
    console.log(address);
    const balance = await usdtContract.methods.balanceOf(address).call();
    console.log('The balnce is :', balance);
    // res.send(`${address} have that balance ${balance}`);
    res.status(201).json(Number(balance));
  }
  catch(err){
    console.error('Error retrieving USDT balance:', err);
    res.status(500).json({
      "message":"internal our server error "
    });
  }
}