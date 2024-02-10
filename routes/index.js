var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("form", { Name: "Charles", heading: "Your F1 car is nice :) " });
});

router.post("/new", (req, res, next) => {
  const { Name, messageText } = req.body;
  messages.push({ text: messageText, user: Name, added: new Date() });
  console.log(messages);
  res.redirect("/");
});

module.exports = router;
