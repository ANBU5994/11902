const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// GET request to check if server is working
app.get('/', (req, res) => {
    res.send('✅ Hello from Affordmed Backend!');
});

// POST request to add two numbers
app.post('/sum', (req, res) => {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Both a and b must be numbers' });
    }

    const result = a + b;
    res.json({ result });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
