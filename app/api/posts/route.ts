import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
});

export async function GET() {
    try {
        const result = await pool.query(`
            SELECT id, band_name, review, emoji, random_val, created_at AS timestamp, user_id 
            FROM band_posts 
            ORDER BY id DESC 
            LIMIT 5
        `);

        const postsWithRandomCache = result.rows.map(post => ({
            ...post,
            random_val: Math.random() 
        }));

        return NextResponse.json(postsWithRandomCache);

    } catch (error) {
        console.error("Error al consultar PostgreSQL:", error);
        return NextResponse.json(
            { error: "Error al obtener los posts" }, 
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { band_name, review, emoji, user_id } = body;

        const result = await pool.query(`
            INSERT INTO band_posts (band_name, review, emoji, random_val, user_id) 
            VALUES ($1, $2, $3, $4, $5) 
            RETURNING id, band_name, review, emoji, random_val, created_at AS timestamp, user_id
        `, [band_name, review, emoji, Math.random(), user_id || 1]);

        return NextResponse.json(result.rows[0], { status: 201 });

    } catch (error) {
        console.error("Error al insertar en PostgreSQL:", error);
        return NextResponse.json(
            { error: "Error al crear el post" }, 
            { status: 500 }
        );
    }
}