const express = require('express');
const cors = require('cors');
const {default: mongoose} = require('mongoose');

const authRouter = require('./routes/authRouter')
const DB_PATH = "mongodb+srv://root:root@codehike.ecoyqup.mongodb.net/helpdesk?retryWrites=true&w=majority&appName=codeHike"

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
