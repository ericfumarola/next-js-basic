import Link from 'next/link'
import Header from "../components/Header";

const Index = () => (
    <div>
        <Header/>
        <Link href={"/about"}>
            <button style={{ fontSize: 20 }}>About Page</button>
        </Link>
    </div>
)

export default Index