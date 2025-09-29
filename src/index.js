const express = require("express")
const cors = require("cors") // CORS middleware

const app = express() // create an Express app
app.use(cors()) // enable CORS for all routes
app.use(express.json()) // parse JSON request body

//heathcheck 
app.get("/", (req, res) => {
   res.json({status: "OK", service: "Express REST API", uptime: process.uptime() });
});

//routes
app.use("/api/v1/todos", require("./routes/todos.routes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`HTTP server started on port ${PORT}`);
})