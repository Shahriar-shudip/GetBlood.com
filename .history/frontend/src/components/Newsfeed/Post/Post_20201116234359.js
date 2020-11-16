import React from 'react'

const Post = ({user_name , Blood_tag ,Header , description}) => {
    return (
        <div>
            <p>{user_name}</p>
            <h1>{Header}</h1>
            <p>{Blood_tag}</p>
            <p>{description}</p>
        </div>
    )
}