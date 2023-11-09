const { articles } = require("../const/text.js");

const getInfo = (req, res) => {
  const search = articles.filter((el) =>
    el.text.toLowerCase().includes(req.query.value)
  );

  res.json(search);
};

module.exports = { getInfo };
