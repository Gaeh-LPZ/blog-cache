import PostList from "../ui/postList";
import { getPosts } from "../lib/getPost";

export default async function ISRPage() {
    // revalidate: Guarda la petición en caché, pero la actualiza cada 10 segundos
    const posts = await getPosts({ next: { revalidate: 10 } });

    return (
        <main className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-black text-gray-900 mb-2">ISR - Revalidate (10s)</h1>
            <p className="text-gray-500 mb-8">
                El valor Random se mantendrá igual si recargas rápido. Espera 10 segundos, vuelve a recargar y verás cómo cambia.
            </p>
            <PostList posts={posts} />
        </main>
    );
}