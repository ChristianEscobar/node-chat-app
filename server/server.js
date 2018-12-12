const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();

// Serve up a directory, public in this case for static html files
app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});