// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Phục vụ file tĩnh từ thư mục public
app.use(express.static('public'));

// Route cơ bản
app.get('/api', (req, res) => {
  res.json({
    message: 'Chào mừng đến với Node.js 22 trên Azure App Services!',
    nodeVersion: process.version,
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Route mặc định
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy trên port ${PORT}`);
  console.log(`Truy cập: http://localhost:${PORT}`);
});
