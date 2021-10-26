import { useState } from "react";

function CommentsPage() {
    const [comments, setComments] = useState([])
    const fetchComments = async ()=>{
        const res = await fetch('/api/comments')
        const data = await res.json()
        setComments(data)
    }

    return (
        <>
           <button onClick={fetchComments}>Load comments</button>
            {
                comments.map(comment =>(
                    <div key={comment.id}>
                        {comment.id} {comment.text}
                        <hr/>
                    </div>
                ))
            }
        </>
    )
}

export default CommentsPage