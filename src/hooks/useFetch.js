import { useEffect, useState } from "react";

const useFetch = (url) =>{
    const[data, setData] = useState(null);
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(true);

    useEffect(()=>{
        async function fetchData(){
            setLoading(true);
            try{
                const res = await fetch(url);
                const json = await res.json();
                setData(json.data);
                setLoading(false);
            }catch(e){
                setError(e);
                setLoading(false);
            }
        }
        fetchData()
    }, [url])

    return{data, error, loading}
}

export default useFetch;