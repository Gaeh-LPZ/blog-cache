import { NextResponse } from 'next/server';
import postgres from 'postgres';

export const dynamic = 'force-dynamic';

// Conexión a tu base de datos usando postgres.js
const sql = postgres({
    host: 'localhost',
    port: 5432,
    database: 'blog',
    username: 'admin',
    password: 'admin',
});

export async function GET() {
    try {
        const rows = await sql`
            SELECT id, band_name, review, emoji, random_val, created_at AS timestamp, user_id 
            FROM band_posts 
            ORDER BY RANDOM()
            LIMIT 5
        `;

        const postsWithRandomCache = rows.map(post => ({
            ...post,
            random_val: Math.random() 
        }));

        return NextResponse.json(postsWithRandomCache);

    } catch (error) {
        console.error("Error en la BD:", error);
        return NextResponse.json({ error: "Error interno" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { band_name, review, emoji, user_id } = body;
        const random_val = Math.random();
        const uId = user_id || 1;

        const newPost = await sql`
            INSERT INTO band_posts (band_name, review, emoji, random_val, user_id) 
            VALUES (${band_name}, ${review}, ${emoji}, ${random_val}, ${uId}) 
            RETURNING id, band_name, review, emoji, random_val, created_at AS timestamp, user_id
        `;

        return NextResponse.json(newPost[0], { status: 201 });

    } catch (error) {
        console.error("Error al insertar:", error);
        return NextResponse.json({ error: "Error al crear post" }, { status: 500 });
    }
}