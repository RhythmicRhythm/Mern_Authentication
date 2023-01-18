const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const errorHandler = require("./middleWare/errorMiddleware");
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());


// cors 
app.use(
  cors({
    origin: ["http://localhost:3000", "https://rhythm-merna-frontend.onrender.com"],
    credentials: true,
  })
);

// Routes Middleware
app.use("/api/users", userRoute)

// Routes
app.get("/", (req, res) => {
    res.send("Home Page");
  });

//Error Middleware
app.use(errorHandler);  

// // heroku
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("../frontend/build"));
//   app.get("*", (req, res) =>{
//   res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
//   })
// }



// Connect to DB and start server
const PORT = process.env.PORT || 5000;
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));