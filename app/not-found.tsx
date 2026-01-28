
import Link from "next/link";

export default function notFound(){
    return(
        <main className="mx-auto max-w-3xl px-4 py-16 text-center">
            <h1 className="text-3xl font-bold"> Page not found</h1>
            <p className="mt-2 text-muted-foreground">The page you are looking for does not exist.
            </p>
            <Link className="mt-6 inline-block text-blue-600 hover:underline" href="/">
            Go Home
            </Link>
        </main>
    )
}