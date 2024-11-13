const express = require("express");
const dotenv = require("dotenv");

const morgan = require("morgan");
const cors = require("cors");

dotenv.config({ path: ".env" });

const itemRouter = require("./routers/itemRouter");
const batchItemRouter = require("./routers/batchItemRouter");
const stockEntryRouter = require("./routers/stockEntryRouter");
const stockEntryDetailRouter = require("./routers/stockEntryDetailRouter.js");
const stockLedgerRouter = require("./routers/stockLedgerRouter.js");

// using express
const app = express();

// using express json
app.use(express.json({ limit: "10kb" }));

// using express body parser
app.use(express.urlencoded({ extended: false, limit: "10kb" }));

// using cors
app.use(cors());

// using morgan for development
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "Testing API",
  });
});

app.use("/api/items", itemRouter);
app.use("/api/batchItems", batchItemRouter);
app.use("/api/entries", stockEntryRouter);
app.use("/api/details", stockEntryDetailRouter);
app.use("/api/ledgers", stockLedgerRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The server is listening on ${port}`);
});
