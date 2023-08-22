import React from 'react'

const Post = ({ posts, loading }) => {
    if (loading) {
        return (
            <h1>Loading.....</h1>
        )
    }
    return (
        <>
            {posts.map((data, index) => (
                <div className='list' key={index}>
                    <p >{data.title}</p>
                </div>
            ))}
        </>
    )
}

export default Post