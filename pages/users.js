import User from "../components/user";

function UserList({users}) {

    return (
        <>
        <h1>List of Users</h1>
            {
                users.map((user) =>{
                    return (
                        <div key={user.id}>
                            <User user={user}/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default UserList

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            users: data
        }
    }
}