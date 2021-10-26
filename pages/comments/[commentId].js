function Comment({ comment }) {
    return (
        <div>
            {comment.id} {comment.text}
        </div>
    )
}

export default Comment

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { commentId: '1' }
            },
            {
                params: { commentId: '2' }
            },
            {
                params: { commentId: '3' }
            }
        ],
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const { commentId } = params
    // const comment = comments.find(comment => comment.id === parseInt(commentId))
    // console.log(comment)

    const res = await fetch(`http://localhost:3000/api/comments/${commentId}`)
    const data = await res.json()
    console.log(data)
    /** Don't use it
     * const res = await fetch(`http:localhost:3000/api/comments/${commentId}`)
     * const data = await res.json()
     * why:
     * don't call own api routes in getStaticProps or getServerSideProps
     * */

    return {
        props: {
            comment:data,
        }
    }
}