const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes/products');
const cors = require('cors');
const os = require('os');
const bodyParser = require('body-parser');
const formData = require('express-form-data');

const options = {
    uploadDir: os.tmpdir(),
    autoClean: true,
};

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(formData.parse(options));
app.use(express.json()); // Parse JSON request bodies

app.use('/products', productRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/my_database')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));