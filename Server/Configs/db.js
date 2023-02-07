const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
async function ConnectDatabase(){
    const result = await mongoose.connect(`mongodb+srv://aditii:aditi123@cluster0.p2e1peg.mongodb.net/?retryWrites=true&w=majority`);
}

module.exports = ConnectDatabase ;