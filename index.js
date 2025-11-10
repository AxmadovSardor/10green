const express = require("express");
const PORT = process.env.PORT || 4040;
const { handler } = require("./controller");

const app = express();
app.use(express.json());
// use RegExp routes to match any path (avoids path-to-regexp error for unnamed '*')
app.post(/.*/, async (req, res) => {
    await handler(req);
    res.sendStatus(200);
});
app.get(/.*/, async (req, res) => {
    await handler(req);
    res.sendStatus(200);
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});