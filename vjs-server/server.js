const express = require('express'),
app = express(),
cors = require('cors'),
port = process.env.PORT || '3000',
mongoose = require('mongoose'),
MONGO_URL = require('./db-config');

app.use(express.json());
app.use(cors());
app.listen(port, () => console.log(`Server listening at ${port}`));
mongoose.connect(`${MONGO_URL}`).then(() => {
    console.log('Connected to MongoDB! :D');
}).catch(err => {
    console.log('Not Connected to MongoDB! :/', err);
})


