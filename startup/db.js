
const mongoose = require('mongoose');
const db = 'mongodb+srv://jhancn39:jhancn1204@cluster0.lk6outv.mongodb.net/vidly2?retryWrites=true&w=majority'
mongoose.set('strictQuery', true)
mongoose
    .connect(db, {
        useNewUrlParser: true,
      })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));