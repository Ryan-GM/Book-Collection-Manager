const express = require('express');

const bookRoutes = require('./routes/books');


const app = express();


app.use(express.json());

app.use('/books', bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
