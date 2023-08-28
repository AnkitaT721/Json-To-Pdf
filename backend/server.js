const app = require("./app");
const dotenv = require("dotenv");

const mongoose = require("mongoose");

//config
dotenv.config({ path: "backend/config.env" });

//connecting to database
mongoose.connect(process.env.DB_URL).then((data) => {
    console.log(`Mongodb connected with server: ${data.connection.host}`);
  });

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`server is working on ${PORT}`);
});