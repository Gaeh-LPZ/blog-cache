import PostList from "../ui/postList";
import { getPosts } from "../lib/getPost";

export default async function SSGPage() {
    // force-cache: Le dice a Next.js que guarde esta petición de forma permanente
    const posts = await getPosts({ cache: 'force-cache' });

    return (
        <main className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-black text-gray-900 mb-2">SSG - Force Cache</h1>
            <p className="text-gray-500 mb-8">
                Esta página se generó una sola vez. El valor Random permanecerá congelado sin importar cuántas veces recargues.
            </p>
            <PostList posts={posts} />
        </main>
    );
}