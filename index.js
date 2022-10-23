import express from "express"
import userRoute from "./router/userRoute.js"
const PORT = process.env.PORT || 5000

const app = express()

// Middleware
app.use(express.json())
app.use("/user", userRoute)

// Health Check
app.get("/", (req, res) => {
    res.send("Hello World!")
})

// Listen to PORT
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})