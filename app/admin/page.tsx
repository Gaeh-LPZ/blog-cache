"use client";

import { useState } from "react";
import { allowedEmojis, images } from "@/app/lib/type"; // Verifica que sea /types o /type

export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({ username: "", password: "" });
    const [formData, setFormData] = useState({
        band_name: "The Strokes",
        review: "",
        emoji: "🎸"
    });

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (user.username === "alberto" && user.password === "alberto") {
            setIsLoggedIn(true);
        } else {
            alert("Credenciales incorrectas");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch("/api/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...formData, user_id: 1 }),
        });

        if (response.ok) {
            alert("¡Banda agregada!");
            setFormData({ ...formData, review: "" });
        }
    };

    // --- VISTA DE LOGIN CORREGIDA ---
    if (!isLoggedIn) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-50 px-4">
                <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                            ADMIN <span className="text-red-600">PANEL</span>
                        </h1>
                        <p className="text-gray-400 text-sm mt-2">Ingresa como Alberto para gestionar el blog</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-1 ml-1">Usuario</label>
                            <input 
                                type="text" 
                                placeholder="Ej: alberto" 
                                className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-red-500 focus:outline-none transition-colors text-gray-900 placeholder:text-gray-300"
                                onChange={(e) => setUser({...user, username: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-1 ml-1">Contraseña</label>
                            <input 
                                type="password" 
                                placeholder="••••••••" 
                                className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-red-500 focus:outline-none transition-colors text-gray-900 placeholder:text-gray-300"
                                onChange={(e) => setUser({...user, password: e.target.value})}
                            />
                        </div>
                        <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold text-lg hover:bg-black active:scale-[0.98] transition-all shadow-lg shadow-gray-200">
                            Entrar al Sistema
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // --- VISTA DE FORMULARIO DE POSTS ---
    return (
        <div className="max-w-4xl mx-auto py-12 px-6">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-4xl font-black text-gray-900 italic tracking-tighter">NUEVO <span className="text-red-600 underline">POST</span></h1>
                        <p className="text-gray-400 font-medium">Agrega una banda a la base de datos de PostgreSQL</p>
                    </div>
                    <div className="bg-red-50 text-red-600 px-4 py-2 rounded-full font-bold text-sm">
                        Admin: Alberto
                    </div>
                </header>
                
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Seleccionar Banda</label>
                            <select 
                                className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-red-500 text-gray-900 font-medium outline-none"
                                value={formData.band_name}
                                onChange={(e) => setFormData({...formData, band_name: e.target.value})}
                            >
                                {Object.keys(images).map(name => (
                                    <option key={name} value={name}>{name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Emoji de Categoría</label>
                            <div className="grid grid-cols-4 gap-3">
                                {allowedEmojis.map(emoji => (
                                    <button
                                        key={emoji}
                                        type="button"
                                        onClick={() => setFormData({...formData, emoji})}
                                        className={`text-2xl p-4 rounded-2xl border-2 transition-all duration-200 ${
                                            formData.emoji === emoji 
                                            ? "border-red-500 bg-red-50 scale-105 shadow-inner" 
                                            : "border-gray-100 bg-gray-50 hover:border-gray-200"
                                        }`}
                                    >
                                        {emoji}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Tu Reseña Musical</label>
                            <textarea 
                                required
                                className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-red-500 text-gray-900 outline-none h-[180px] resize-none"
                                placeholder="Escribe algo sobre la banda..."
                                value={formData.review}
                                onChange={(e) => setFormData({...formData, review: e.target.value})}
                            />
                        </div>

                        <button className="w-full py-5 bg-red-600 text-white rounded-2xl font-black text-xl hover:bg-red-700 shadow-xl shadow-red-100 active:scale-95 transition-all">
                            PUBLICAR AHORA 🎸
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}