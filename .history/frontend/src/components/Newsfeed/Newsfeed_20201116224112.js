import React,{useEffect,useState} from 'react'
import Axios from 'axios'
const Newsfeed = () =>{
const [posts , setPost] = useState([])
useEffect(()=>{
Axios.get('http://localhost:9000/feed/').then(r=>{
 setPost(s=>[...posts , r])
 console.log(posts)
})
console.log(posts)
},[])



    return (
        {
            posts.map((d,k) =>{
                <div>
                <h1>{d.user_name}</h1>
        
            </div>
            }
                )
        }
   )
}

export default Newsfeed