import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import chatRouter from "./routes/chat.routes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],  
    credentials: true, 
  }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/api/v1/chat', chatRouter);


app.get('/', (req, res) => {
  res.send('Welcome to Chatbot API');
});

const PORT = process.env.PORT || 5000;




app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);

});



export default app;
