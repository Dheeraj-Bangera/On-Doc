const express = require("express");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();


const dbConnect = require("./config/dbConnect.js");

const authRouter = require("./routes/authRoutes");

const app = express();
app.use(cors(
  {
    origin: "http://localhost:3000",
    credentials: true,
}
));


app.use(cookieParser());
app.use(bodyParser.json());


dbConnect();


app.get("/", (req, res) => {
  res.json({
    message: "backend is running",
    success: true,
  });
});
app.use("/api/auth", authRouter);


app.listen(process.env.PORT || 5000, () => {
  console.log(
    `server running at ${process.env.PORT ? process.env.PORT : 5000}`
  );
});

