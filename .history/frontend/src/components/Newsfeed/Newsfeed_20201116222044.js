import React,{useEffect,useState} from 'react'
import axios from 'axios'
const Newsfeed = () =>{
const [posts , setPost] = useState('')
useEffect(()=>{
const post = axios.get('/api/feed')
console.log(post)
   setPost()
},[])



    return (
    <div>
        <h1>{posts}</h1>

    </div>)
}

export default Newsfeed