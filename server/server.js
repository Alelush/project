const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = "mongodb+srv://alelushwork_db_user:alelush@cluster0.z2ysp6t.mongodb.net/?appName=Cluster0";


app.use(cors()); // Разрешает кросс-доменные запросы
app.use(express.json()); // Позволяет серверу принимать JSON в теле запроса
// Раздача статических файлов из папки client
app.use(express.static(path.join(__dirname, '../client')));


// --- ПОДКЛЮЧЕНИЕ К MONGODB ---
mongoose.connect(MONGO_URI)
    .then(() => console.log('Успешное подключение к MongoDB'))
    .catch(err => console.error('Ошибка подключения к MongoDB:', err));


// --- МАРШРУТЫ API (Примеры) ---
// В будущем эти маршруты нужно вынести в отдельную папку routes

// Получить все табулатуры (пока что возвращает заглушку)
app.get('/api/tabs', (req, res) => {
    // В будущем здесь будет поиск в базе данных
    const dummyTabs = [
        { id: 1, title: 'Smoke on the Water', artist: 'Deep Purple', author: 'pro_user', access: 'free' },
        { id: 2, title: 'Stairway to Heaven', artist: 'Led Zeppelin', author: 'tab_master', access: 'paid' }
    ];
    res.json(dummyTabs);
});


// --- ЗАПУСК СЕРВЕРА ---
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});