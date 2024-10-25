import express  from "express";
const app = express();
import authRoutes  from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
const port = 3002;
import bodyParser from 'body-parser';
import db from './config/db.js'

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/students", studentRoutes);


app.listen(port, (err) => {

    if(!err) {
        console.log(`server is running on http://localhost:${port}`)
    }
})
