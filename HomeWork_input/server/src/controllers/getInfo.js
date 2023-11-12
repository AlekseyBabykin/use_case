const { articles } = require("../const/text.js");

const getInfo = (req, res) => {
  const request = req.query.value;
  let search = [];
  // const search = articles.filter((el) =>
  //   el.text.toLowerCase().includes(req.query.value)
  // );
  for (let i = 0; articles.length > i; i++) {
    if (articles[i].text.toLowerCase().includes(request.toLowerCase())) {
      search.push(articles[i]);
    }
  }
  res.json(search);
};

module.exports = { getInfo };
