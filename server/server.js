const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const db = require("./db/update");

const PORT = 4200;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.get("/", (req, res) => {
   res.send("Express!");
});

app.get("/all_updates", async (req, res) => {
   const updates = await db.getAllUpdates();
   res.status(200).json({updates});
})

app.get("/updates", async (req, res) => {
   const num = req.query.num ?? 10;
   const offset = req.query.offset ?? 0;
   const updates = await db.getSomeUpdates(num, offset);
   res.status(200).json({updates});
});

app.get("/updates_search", async (req, res) => {
   const num = req.query.num ?? 10;
   const offset = req.query.offset ?? 0;
   const search = req.query.search ?? "";
   const updates = await db.getSomeUpdatesSearch(num, offset, search);
   res.status(200).json({updates});
});

app.get("/update_by_timestamp", async (req, res) => {
   const timestamp = req.query.timestamp;
   const update = await db.getUpdateByTimestamp(timestamp);
   res.status(200).json({update});
});

app.post("/create", async (req, res) => {
   const results = await db.createUpdate(req.body);
   res.status(201).json({ id: results[0] });
});

app.delete("/delete", async (req, res) => {
   const timestamp = req.query.timestamp
   const results = await db.deleteUpdate(timestamp);
   res.status(201).json({ id: results[0] });
})

app.listen(PORT, () => console.log('hello world!'))