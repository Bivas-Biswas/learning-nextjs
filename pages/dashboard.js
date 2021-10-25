const { useState, useEffect } = require("react");

function Dashboard() {
    const [isLoading, setIsLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState(null)

    useEffect(() => {
        async function fetchDashboardData() {
            const res = await fetch('http://localhost:4000/dashboard')
            const data = await res.json()
            setDashboardData(data)
            setIsLoading(false)
        }

        fetchDashboardData()
    }, [])
    if(isLoading){
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <h2>DashBoard</h2>
            <h2>Posts - {dashboardData.posts}</h2>
            <h2>Likes - {dashboardData.likes}</h2>
            <h2>Following - {dashboardData.following}</h2>
            <h2>Followers - {dashboardData.followers}</h2>
        </div>
    )
}

export default Dashboard