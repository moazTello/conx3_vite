import { useState } from 'react';
import './App.css';
import useBalance from './hooks/GetBalance';
import useLastBlock from './hooks/GetLastBlock';
function App() {
  const { loading, lastBlock, getLastBlockChain } = useLastBlock();
  const { getBalance, loadingBalance, balance } = useBalance();
  const [ address, setAddress ] = useState('');
  const handleLastBlockChain = async () => {
    await getLastBlockChain();
    console.log(lastBlock);
  }
  const handlebalance = async () => {
    console.log(address);
    if(address){
      await getBalance(address);
    }
    else{
      alert("please insert the address ")
    }
  }
  return (
    <div className="App">
      <div className="Eth">
        Ethereum API
      </div>
      <div>
        <button onClick={handleLastBlockChain} className="lastChainContainer">
          Shows the last block number of Ethereum mainnet
        </button>
        {!loading && lastBlock&&<p style={{width:"100%", marginTop:"10px", textAlign:'center'}}>
          The last Block Chain <span style={{color:'cornflowerblue'}}>{lastBlock}</span>
        </p>}
        {loading && <p style={{width:"100%", marginTop:"10px", textAlign:'center',color:'cornflowerblue'}}>
          Loading ...
        </p>}
      </div>
      <div className='divider'></div>
      <div className="balance">
        <p>Insert the address to show balance</p>
        <input className='input_balance' type='text'  value={address} onChange={(e) => setAddress(e.target.value)}/>
        <button onClick={handlebalance} className="lastChainContainer">
          The USDT balance of the provided address
        </button>
        {!loadingBalance && balance&&<p style={{width:"100%", marginTop:"10px", textAlign:'center'}}>
          The Balance <span style={{color:'cornflowerblue'}}>{balance}</span>
        </p>}
        {loadingBalance && <p style={{width:"100%", marginTop:"10px", textAlign:'center',color:'cornflowerblue'}}>
          Loading ...
        </p>}
      </div>
    </div>
  );
}
export default App;
