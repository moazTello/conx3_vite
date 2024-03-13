import { useState } from "react";

const useBalance = () => {
    const [ balance, setBalance ] = useState(null);
    const [ loadingBalance, setLoadingBalance ] = useState(false);
    const getBalance = async (address) => {
        setLoadingBalance(true);
        try{
            // const res = await fetch("http://localhost:9000/api/auth/balance",{
            const res = await fetch("api/auth/balance",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({address:address})
            });
            if(res.status == 500){
                alert('invalid address !');
                return
            }
            const data = await res.json();
            console.log(data);
            setBalance(data);
        }
        catch(err){
            console.log(err);
            if(err.message == "internal our server error"){
                alert('invalid address !');
            }
            return
        }
        finally{
            setLoadingBalance(false);
        }
    }
    return { getBalance, loadingBalance, balance }
}
export default useBalance;