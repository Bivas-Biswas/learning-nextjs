import { useRouter } from "next/router";

function Post({post}) {
    const router = useRouter()

    if(router.isFallback){
        return <h1>Loading</h1>
    }

    return (
        <>
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
        </>
    )
}
export default Post

export async function getStaticPaths(){
    return{
        paths: [
            {
                params: { postId: '1'}
            },
            {
                params: { postId: '2'}
            },
            {
                params: { postId: '3'}
            }
        ],
        fallback: true
    }
}

export async function getStaticProps(context){
    const {params} = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await res.json()
    console.log(`generating page for /posts/${params.postId}`)

    if(!data.id){
        return {
            notFound: true
        }
    }

    return{
        props:{
            post: data
        }
    }
}