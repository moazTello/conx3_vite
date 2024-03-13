import { useState } from "react";
const useLastBlock = () => {
    const [ lastBlock, setLastBloack ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const getLastBlockChain = async () => {
        setLoading(true);
        try{
            // const res = await fetch("http://localhost:9000/api/auth/lastBlockChain",{
            const res = await fetch("api/auth/lastBlockChain",{
                method:"GET",
                headers:{"Content-Type":"application/json"},
            });
            const data = await res.json();
            setLastBloack(data);
        }
        catch(err){
            console.log(err);
        }
        finally{
            setLoading(false);
        }
    }
    return{ loading, lastBlock, getLastBlockChain }
}
export default useLastBlock;