// Folder structure suggestion (in /src):
// src/
//   Pages/
//     Home.jsx
//     Admin.jsx
//     Adminlogin.js
//     Login.jsx
//   data/
//     ideas.js
//     industries.js
//   App.jsx
//   index.js

// Optional: backend simulation for storing missing keywords
// Create a mock API route if you're using something like Vite/Next.js, or use a backend
// Here's a mock Node.js Express route you could implement if you want actual backend:

// server.js
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const LOG_FILE = './missing_keywords.json';

// Helper: load existing
function loadKeywords() {
  if (!fs.existsSync(LOG_FILE)) return [];
  return JSON.parse(fs.readFileSync(LOG_FILE));
}

// Helper: save
function saveKeywords(keywords) {
  fs.writeFileSync(LOG_FILE, JSON.stringify(keywords, null, 2));
}

app.post('/api/log-missing-keyword', (req, res) => {
  const { keyword, timestamp } = req.body;
  if (!keyword) return res.status(400).send('Keyword is required');

  const logs = loadKeywords();
  logs.push({ keyword, timestamp });
  saveKeywords(logs);
  res.status(200).json({ message: 'Logged' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
