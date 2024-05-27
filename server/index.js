const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
require("dotenv").config();
const { connectDb } = require("./config.js");
// const routes = require("./routes/routes");
const cookieParser = require("cookie-parser");
const GetData = require("./routes/GetDataRoute.js")
// connection to db
connectDb();

// middlewares
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/v1", GetData);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

// server listening
app.listen(port, () => console.log("listening on port ", port));
