import React from 'react'
// import api
import api from "../../API/api.queries";
function Post({ post }: any) {

    

    return (
        <div>{post.body}
            <button onClick={()=>api.like_unlike_post(post.id)}>{post.is_liked_by_current_user ? "unlike": "like"}</button>
        </div>

    )
}

export default Post

