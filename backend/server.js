import * as path from 'path';
import express from "express";
import dotenv from "dotenv";
import authRoutes from './routes/authRoutes.js';
import cookieParser from "cookie-parser";
import http from 'http';
import cors from 'cors';

const __dirname = path.resolve();
dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

const server = http.createServer(app);

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
}));

app.use(express.json());  
app.use(cookieParser());
// app.get("/",(req,res) => {
//     //root route http://localhost:9000
//     res.send('server is ready!')
// });

app.use("/api/auth",authRoutes);

app.use(express.static(path.join(__dirname,"frontend/dist")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
});

app.listen(PORT,()=> console.log(`server running on port ${PORT}`));