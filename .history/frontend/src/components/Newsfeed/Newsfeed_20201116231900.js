import React,{useEffect,useState} from 'react'
import Axios from 'axios'

const Newsfeed = () =>{
    const [posts , setPosts] = useState(null)


const set=(r)=>{
 setPosts(state=>r)
 console.log(posts)
}    
useEffect(()=>{
Axios.get('http://localhost:9000/feed/').then(r=>{

set(r.data.post)


})

},[])



    return (
        <div>
        <h1>{}</h1>
        </div>
    )
    }
export default Newsfeed