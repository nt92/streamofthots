const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const db = require("./db/update");

const PORT = 4200;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
   res.send("Express!");
});

app.post("/update", async (req, res) => {
   const results = await db.createUpdate(req.body);
   res.status(201).json({ id: results[0] });
});

app.listen(PORT, () => console.log('hello world!'))