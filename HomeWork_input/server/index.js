const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const { router } = require("./routes/router.js");
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`run on PORT ${process.env.PORT}`);
});

app.use("/api/", router);
