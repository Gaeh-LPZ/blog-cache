-- Tabla de usuarios
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Tabla de los posts del blog (las bandas)
CREATE TABLE IF NOT EXISTS band_posts (
    id SERIAL PRIMARY KEY,
    band_name VARCHAR(100) NOT NULL,      
    review TEXT NOT NULL,                  
    emoji VARCHAR(10) NOT NULL,          
    random_val DOUBLE PRECISION NOT NULL,  
    created_at TIMESTAMP DEFAULT NOW(), 
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO users (username, password) 
VALUES ('alberto', 'alberto');

INSERT INTO band_posts (band_name, review, emoji, random_val, user_id) VALUES
('Dead Poet Society', 'Increíble energía y riffs potentes que te atrapan desde el primer segundo.', '🎸', 0.847231, 1),
('Edgehill', 'Un sonido fresco y melodías pegadizas ideales para cualquier momento del día.', '🎤', 0.193452, 1),
('Sleep Token', 'Una mezcla única de metal, rock alternativo y un aura de misterio fascinante.', '🤘', 0.582910, 1),
('Radio Head', 'Clásicos indiscutibles con una evolución musical que marcó a toda una generación.', '🎸', 0.334891, 1),
('Adam jensen', 'Excelente estilo alternativo con letras profundas y ritmos muy bien marcados.', '🎤', 0.912384, 1),
('Gorillaz', 'Innovación pura en cada álbum, fusionando géneros de una manera que solo ellos saben.', '🎺', 0.473829, 1),
('LISA', 'Presencia escénica inigualable y ritmos extremadamente contagiosos.', '🎤', 0.728193, 1),
('Nothing But Thieves', 'Voces impresionantes acompañadas de un rock moderno muy bien ejecutado.', '🎸', 0.284710, 1),
('Twenty One Pilots', 'Una mezcla de géneros constante que nunca decepciona en sus producciones.', '🎺', 0.659382, 1),
('The Strokes', 'El sonido característico que definió toda la era del indie rock de los 2000.', '🎸', 0.103847, 1);