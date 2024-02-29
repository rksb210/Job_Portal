const express = require("express")
const app = express();


app.use(express.json())
const morgan = require("morgan")
app.use(morgan("dev"))

const cors = require('cors')
app.use(cors())

const dotenv = require("dotenv")
dotenv.config();


const ConnectDB = require('./mongoose/config')

const PORT = process.env.PORT || 8000;

const Add_Jobs_Router = require("./routes/add_jobs")
const Apply_Jobs_Router = require("./routes/apply_jobs")

app.use("/add", Add_Jobs_Router);
app.use("/apply", Apply_Jobs_Router);

ConnectDB();
app.listen(PORT, () => {
  console.log(`Server statred at port : http://localhost:${PORT}`);
});


