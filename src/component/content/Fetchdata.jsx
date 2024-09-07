import { useState, useEffect } from "react"
import axios from "axios"


const Fetchdata=(url)=> {
    const [data, Setdata]=useState()
    const [Loading, Setloading]=useState(false)
    const [SimpleData, SetsimpleData]=useState()
    const fetchPlayingMovie=async()=>{
        try{
            Setloading(true)
          const response=await axios.get(url)
          Setloading(false)
          // console.log(response.data.results)
          Setdata(response.data.results)
          SetsimpleData(response.data)
    
        }catch(error){
          console.log(error)
        }
      }
    
      useEffect(() => {
        
        fetchPlayingMovie()
      
      }, [])
  return {data, Loading, SimpleData}

  
}

export default Fetchdata;
