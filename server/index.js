
import express from 'express';
import dotenv from 'dotenv';



import dbConfig from './config/dbConfig.js';


dotenv.config();
const app = express(); 


const port = process.env.PORT || 3001;
app.listen(port, () => console.log("server is running on port", port));
dbConfig();






