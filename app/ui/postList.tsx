// components/postList.tsx
import { Post, images } from "../lib/type";

export default function PostList({ posts }: { posts: Post[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
            {posts.map((post) => {
                const imageSrc = images[post.band_name] || "https://via.placeholder.com/400x300?text=Sin+Imagen";

                return (
                    <div 
                        key={post.id} 
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col"
                    >
                        {/* Cabecera visual de la tarjeta (Imagen + Emoji) */}
                        <div className="relative h-56 w-full">
                            <img 
                                src={imageSrc} 
                                alt={`Imagen de ${post.band_name}`} 
                                className="w-full h-full object-cover"
                            />
                            {/* El emoji flotando en una burbuja con desenfoque */}
                            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full text-2xl shadow-sm">
                                {post.emoji}
                            </div>
                        </div>

                        {/* Contenido del Blog */}
                        <div className="p-6 grow">
                            <h2 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">
                                {post.band_name}
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                                {post.review}
                            </p>
                        </div>

                        {/* Pie de la tarjeta: Datos técnicos y de Caché */}
                        <div className="bg-gray-50 p-5 border-t border-gray-100 mt-auto">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                    Métricas de Caché
                                </span>
                                <span className="bg-indigo-100 text-indigo-700 font-mono text-xs px-2.5 py-1 rounded-md font-semibold">
                                    Random: {post.random_val.toFixed(4)}
                                </span>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
                                <div>
                                    <span className="block font-medium text-gray-400 mb-1">Post ID</span>
                                    <span className="font-mono text-gray-700">#{post.id}</span>
                                </div>
                                <div>
                                    <span className="block font-medium text-gray-400 mb-1">User ID</span>
                                    <span className="font-mono text-gray-700">#{post.user_id}</span>
                                </div>
                                <div className="col-span-2">
                                    <span className="block font-medium text-gray-400 mb-1">Última Generación</span>
                                    <span className="text-gray-700 bg-white px-2 py-1 rounded border border-gray-200 inline-block w-full">
                                        {new Date(post.timestamp).toLocaleString('es-MX', {
                                            dateStyle: 'medium',
                                            timeStyle: 'medium'
                                        })}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}