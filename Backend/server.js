const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const itemroots = require('./routes/itemroots')

const app = express()

app.use(express.json());
app.use(cors())

mongoose.connect('mongodb+srv://SOMIL:1234@cluster0.gbpym2y.mongodb.net/starbucks', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use('/api',itemroots);


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));