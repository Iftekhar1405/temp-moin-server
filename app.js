require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

// rest of the packages used in dev or production
const morgan = require("morgan");
const bodyParser = require("body-parser");
// DATABASE Connection
const connectDB = require("./db/connect");

//  Router
const router = require("./routes/routes");

// middleware
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");

app.use(morgan("tiny"));
app.use(express.json());
// app.use(bodyParser);

// routes
// app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Hello There!!! Welcome to moineserver");
});

app.get("/api/v1/feedback", (req, res) => {
  res.send("testing routes");
});
app.use("/api/v1", router);

// // implimenting middlewares to the server
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

PORT = 5000 || process.env.PORT;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
