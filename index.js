const express = require("express");
var cors = require("cors");
const app = express();
const task = require('./index.json');
const dotenv = require("dotenv");
dotenv.config();

const port = 5000 || process.env.PORT
app.use(cors())
 app.use(express.json())


 app.get('/', async (req, res) => {
  try {
    res.status(200).json(task);
    } catch (err) {
    res.status(500).json("something went wrong");
  }
})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))