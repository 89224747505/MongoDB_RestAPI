import express from 'express';
import mongoose from 'mongoose';
import post from './post.js';

const PORT = 5000;
const DB_URL = `mongodb+srv://8922474750:Bast8495@cluster1.3on6l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
    try {
        const {author, title, content, picture} = req.body;
        const posts = await post.create({author, title, content, picture})
        res.json(posts)
    } catch (err) {
        res.json("ХУЙ ТЕБЕ")
    }
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology:true, useNewUrlParser:true})
        app.listen(PORT, () => {
            console.log("SERVER IS READY ON PORT - " + PORT)
        });
    } catch (err) {
        console.log(err);
    }
}

startApp();