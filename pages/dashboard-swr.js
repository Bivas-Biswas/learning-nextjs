import useSWR from 'swr'

const fetcher = async () => {
    const res = await fetch('http://localhost:4000/dashboard')
    return await res.json()

}

function DashboardSWR() {
    const { data, error } = useSWR('dashboard', fetcher)
    if (error) {
        return <h2>An error has occured</h2>
    }
    if (!data) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <h1>DashBoard</h1>
            <h3>Posts - {data.posts}</h3>
            <h3>Likes - {data.likes}</h3>
            <h3>Following - {data.following}</h3>
            <h3>Followers - {data.followers}</h3>
        </div>
    )
}

export default DashboardSWR