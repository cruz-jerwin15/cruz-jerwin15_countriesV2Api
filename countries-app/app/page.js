'use client'
import {useState,useEffect} from 'react'

export default function Home() {
  const [counter,setCounter] = useState(0)
  var count =counter;



  console.log("Hello");

  useEffect(()=>{
  console.log("World");
  },[])
  useEffect(()=>{
   console.log("Count: ",count)
  },[counter])

  const styleButton={
    width:"200px",
    height:"100px",
    color:"white",
    backgroundColor:"#0000FF"
  }
  const styleHeading={
    fontSize:"40px"
  }
  const addCounter=()=>{
    count+=1;
    setCounter(count)
  }
  const minusCounter =()=>{
    console.log("THis is a minus counter")
  }
  return (
   <>
    <h2 style={styleHeading}>{counter}</h2>
    <button style={styleButton} onClick={()=>addCounter()}>Click to add Counter</button>
     <button style={styleButton} onClick={()=>minusCounter()}>Click to minus Counter</button>
   </>
  );
}
