
import {useEffect, useState} from "react"
import axios from "axios"
export default function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    const getData = async ()=>{
      let get = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setData(get.data)
      
    }
    getData()
    console.log(data)
    },[])
  return (


    <div className="App">
      <div>

   
      {data.map(e=>(
        <>
        <p>{e.title}</p>
        <p>{e.body}</p>
        </>



      ))}
      </div>   
   </div>
  );
}