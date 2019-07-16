const express = require("express");
const translate = require("@vitalets/google-translate-api");

const app = express();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.jsonp("Heuyo!");
});

app.get("/translate", (req, res) => {
  translate(req.query.tr, { to: "en" })
    .then(data => {
      console.log(data);

      res.jsonp({
        lang: data.from.language.iso,
        text: data.text
      });
    })
    .catch(err => {
      console.error(err);
    });
});

const port = 5000;

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}/`)
);
