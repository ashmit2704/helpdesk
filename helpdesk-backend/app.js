const express = require('express');
const cors = require('cors');
const {default: mongoose} = require('mongoose');
require('dotenv').config();

const authRouter = require('./routes/authRouter')
const DB_PATH = process.env.MONGODB_URI;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRouter);

const PORT = process.env.PORT || 3000;
mongoose.connect(DB_PATH).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on: http://localhost:${PORT}`);
    });
}).catch(err => {
    console.log('Error while connecting to Mongo', err);
})
