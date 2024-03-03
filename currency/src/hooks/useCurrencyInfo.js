import { useEffect,useState } from "react"

function useCurrencyInfo(currency){
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(`https://github.com/fawazahmed0/exchange-api/blob/main/other/Common-${currency}.json`).then((resp)=>resp.json())
        .then((resp)=>(setData(resp[currency])))
        console.log(data)

    },[currency])
    console.log(data)
    return data;
}
export default useCurrencyInfo;