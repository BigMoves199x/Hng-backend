const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());

// API Route
app.get("/", (req, res) => {
  res.json({
    email: "fawazarole.o@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/BigMoves199x/Hng-backend.git",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});