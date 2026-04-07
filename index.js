const express = require("express")

const app = express();
const PORT = 5050;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

app.get("/", (req, res) => {
    res.send("Hello World!")
})