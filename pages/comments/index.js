import { useState } from "react";

function CommentsPage() {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    const fetchComments = async () => {
        const res = await fetch('/api/comments')
        const data = await res.json()
        setComments(data)
    }
    const handleSubmitComment = async () => {
        const res = await fetch('/api/comments', {
            method: "POST",
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        setComment("")
        await fetchComments()
        console.log(data)
    }

    const handleDeleteComment = async (commentId) => {
        const res = await fetch(`/api/comments/${commentId}`, {
            method: "DELETE",
        })
        const data = await res.json()
        console.log(data)
        await fetchComments()
    }

    return (
        <>
            <button onClick={fetchComments}>Load comments</button>
            <input
                type={'text'}
                value={comment}
                onChange={e => setComment(e.target.value)}
            />
            <button onClick={handleSubmitComment}>SubmitComment</button>
            {
                comments.map(comment => (
                    <div key={comment.id}>
                        {comment.id} {comment.text}
                        <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
                        <hr/>
                    </div>
                ))
            }
        </>
    )
}

export default CommentsPage