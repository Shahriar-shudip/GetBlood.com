import React from 'react'
import './Post.css'
const Post = (props) => {
  // console.log()
    return (
        <div className='Card'>
            <p>{props.data.user_name}</p>
            <h1>{props.data.Header}</h1>
            <p className="blood_tag">{props.data.Blood_tag}</p>
            <p>{props.data.description}</p>
        </div>
    )
}
export default Post