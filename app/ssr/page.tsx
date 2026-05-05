import PostList from "../ui/postList";
import { getPosts } from "../lib/getPost";

export const dynamic = 'force-dynamic';

export default async function SSRPage() {
    // no-store: Obliga a Next.js a consultar la API en cada recarga
    const posts = await getPosts({ cache: 'no-store' });

    return (
        <main className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-black text-gray-900 mb-2">SSR - No Store</h1>
            <p className="text-gray-500 mb-8">
                Esta página consulta la base de datos en tiempo real. El valor Random cambiará en cada recarga que hagas.
            </p>
            <PostList posts={posts} />
        </main>
    );
}