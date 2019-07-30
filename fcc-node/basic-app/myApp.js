// https://learn.freecodecamp.org/apis-and-microservices/basic-node-and-express
// -----------------------------------
var express = require('express');
var app = express();

// 1. meet console
console.log("Hello World");

// 11. set body-parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

// 4. server static files
app.use(express.static('public'));

// 2. meet express
app.get("/hello", function(req, res) {
  res.send("Hello Express")
})

// 7. implement logger func
function logger(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip)
  next()
}

app.use(logger)

// 5. server json and 6. .env files
app.use("/json", function(req, res) {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({"message": "HELLO JSON"})
  } else {
    res.json({"message": "Hello json"})
  }
  
})

// 8. create time server
app.get("/now", function(req, res, next) {
  req.time = new Date().toString();
  next();
},
  function (req, res) {
      res.json({time: req.time})
  });

// 9. get input params
app.use("/:word/echo", function(req, res) {
  res.json({echo: req.params.word})
})

app.route("/name")
  // 10. get query params
  .get(function(req, res) {
    let fullName = req.query.first + " " + req.query.last
    res.json({name: fullName})
  })
  // 12. get body params (post request)
  .post(function(req, res) {
      let fullName = req.body.first + " " + req.body.last
      res.json({name: fullName})
})

// 3. server html files
app.use("/", function(req, res) {
 res.sendFile(__dirname + "/views/index.html")
})

module.exports = app;
