// Importing express module
const express = require("express")
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express()

//GET /
app.get("/", (req, res) => {
    console.log("GET / request received");
	res.send("Make a <a href='/hello'>GET /hello</a> request");
})

// GET /hello
app.get("/hello", (req, res) => {
    console.log("GET /hello request received");
	res.send("Hello world!");
})

app.listen(PORT, HOST);
console.log(`Hello server running on http://${HOST}:${PORT}`);