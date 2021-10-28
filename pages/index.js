import styles from '../styles/Home.module.css'
import { useSession } from "next-auth/client";

export default function Home() {
    const [session, loading] = useSession()
    console.log(session)
    return (
        <div className={styles.container}>
            <h1>Hello {session ? `, ${session.user.name}` : ""}</h1>
        </div>
    )
}
