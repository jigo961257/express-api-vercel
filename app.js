const express = require("express")
const app = express();

const port = process.env.PORT || 3400

app.get("/", (req, res) => {
    res.send("this is form server is running")
})

app.listen(port, () => {
    console.log("port is running and server as well at:" + port);
})