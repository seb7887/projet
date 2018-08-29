const express = require('express');
const app = express();

// Initialize server
app.listen(process.env.PORT || 8081, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});