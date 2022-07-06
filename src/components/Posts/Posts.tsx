import React, { useEffect, useState } from 'react'
import api from "../../API/api.queries";
import Post from './Post';



function Posts() {

    const [posts, setPosts] = useState([])


    const fetchPosts = async () => {
        const res = await api.get_posts()
        const posts = res?.data?.posts
        if (posts) {
            setPosts(posts)
        } else {
            alert("خطاء")
        }

    }


    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div>
            {
                posts.map((post:any )=> <Post post={post} key={post.id} />)
            }
        </div>
    )
}

export default Posts