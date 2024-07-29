import { useState, useEffect } from "react";

export function useFetch(BASE_URL, initialType){
    const [data, setData] = useState(null);

    const fetchUrl = (type) =>{
        fetch(`${BASE_URL}/${type}`)
        .then(res => res.json())
        .then(res => setData(res));
    }
    useEffect(()=>{
        fetchUrl(initialType);
    },[]);

    return{
        data,
        fetchUrl,
    };
}