const express = require("express");
const app = express();
const dotenv = require("dotenv-safe");
const cors = require("cors");

const { router } = require("./routes/router.js");

dotenv.config();

// require("dotenv-safe").config(); - also an option, no problem with that, just looks less nice, nothing else

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", express.static(process.cwd() + "/public"));

app.listen(process.env.PORT, () => {
  console.log(`run on PORT ${process.env.PORT}`);
});

app.use("/api/", router);
