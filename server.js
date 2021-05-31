const path = require("path")
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const passport = require("passport")
const session = require("express-session")
const MongoStore = require("connect-mongo") (session)
const connectDB = require("./config/db")

require("dotenv").config({path: "./config/.env"})

require("./config/passport")(passport)

connectDB()

app.set("view engine", "pug")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Sessions
app.use(
  session({
    secret: "very secret",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Set global var
app.use(function (req, res, next) {
  res.locals.user = req.user || null
  next()
})

// Static folder
app.use(express.static(path.join(__dirname, "public")))

// Routes
app.use("/", require("./routes/landing"))
app.use("/auth", require("./routes/auth"))
app.use("/mastery", require("./routes/mastery"))
app.use("/account", require("./routes/account"))

const PORT = process.env.PORT || 3000

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})
