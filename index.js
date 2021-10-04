const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET, PUT, POST', "DELETE");
    app.use(cors());
    next();
})

app.listen(3333);

app.get("/", (request, response) => {
    return response.json({
        helloWord: "Hello Word",
        App: "NodeJs App"
    });
});