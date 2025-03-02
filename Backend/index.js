import express from 'express';
import mongoose from 'mongoose';
import userModel from './model.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import serverless from 'serverless-http';


mongoose.connect('mongodb+srv://ansh:Ansh141879@cluster0.ylwmq.mongodb.net/test')
    .then(() => {
        console.log('Connected!')
    });


const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/getData", async (req, res) => {
    var ans = await userModel.find()
    res.send(ans)
})

app.listen(9000)

// export const handler = serverless(app);


