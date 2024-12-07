import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path"

import authRoutes from "./routes/auth.routes.js"
import messageRoute from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js"
import {app, server} from "./socket/socket.js"

const __dirname = path.resolve();

dotenv.config();


const PORT = process.env.PORT || 5000;


app.use(cookieParser()); //To parse the incoming cookies from req.cookie
app.use(express.json()); //To parse the incoming request with JSON payloads (from req.body)

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})



server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`App is listing on port ${PORT}`)
})


