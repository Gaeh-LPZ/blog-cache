import { Post } from './type';

export async function getPosts(options?: RequestInit): Promise<Post[]> {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    
    try {
        const response = await fetch(`${baseUrl}/api/posts`, options);
        
        if (!response.ok) {
            console.error(`Error en la API: Status ${response.status}`);
            return [];
        }
        
        const data: Post[] = await response.json();
        return data;

    } catch (error) {
        console.error("Fallo al ejecutar el fetch hacia el endpoint:", error);
        return [];
    }
}