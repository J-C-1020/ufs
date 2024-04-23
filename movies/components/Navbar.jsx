import Link from 'next/link'

export default function Navbar (){
    return (
        <nav>
            <h1> Navbar </h1>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/TopMovies">
                        Top Movies
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
