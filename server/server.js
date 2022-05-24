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

app.get("/stream-server", (req, res) => {
   res.send("Express Proxy Pass!");
});

app.get("/stream-server/updates_search", async (req, res) => {
   const num = 10;
   const offset = req.query.offset === null ? 0 : req.query.offset;
   const search = req.query.search === null ? "" : req.query.search;
   const updates = await db.getSomeUpdatesSearch(num, offset, search);
   res.status(200).json({updates});
});

app.get("/stream-server/updates_search_count", async (req, res) => {
   const search = req.query.search ?? "";
   const count = await db.getSomeUpdatesSearchCount(search);
   res.status(200).json({count});
})

app.get("/stream-server/update_by_timestamp", async (req, res) => {
   const timestamp = req.query.timestamp;
   const update = await db.getUpdateByTimestamp(timestamp);
   res.status(200).json({update});
});

app.post("/stream-server/create", async (req, res) => {
   const results = await db.createUpdate(req.body);
   res.status(201).json({ id: results[0] });
});

app.delete("/stream-server/delete", async (req, res) => {
   const timestamp = req.query.timestamp
   const results = await db.deleteUpdate(timestamp);
   res.status(201).json({ id: results[0] });
})

app.listen(PORT, () => console.log('hello world!'))
