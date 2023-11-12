const express = require("express");
const app = express();

const cors = require("cors");
const { router } = require("./routes/router.js");
require("dotenv-safe").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`run on PORT ${process.env.PORT}`);
});

app.use("/api/", router);
