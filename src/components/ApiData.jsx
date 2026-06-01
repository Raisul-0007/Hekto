import React from 'react'

const ApiData = () => {
    let [info, setInfo] = useState([])
    let [loading, setLoading] = useState(true);

    let getData = async () => {
        try{
            const response = await fetch("https://dummyjson.com/products?&limit=0")
            const data = await response.json();
            setInfo(data.products)
            setLoading(false)
        }catch(error){
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getData();
    }, []);

  return (
    <>
    <Data.Provider value={{info, loading}}>{children}</Data.Provider>
    </>
  )
}

export default {ApiData, Data}