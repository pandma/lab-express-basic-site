const express = require("express")
const hbs = require("hbs")
const app = express()
const path = require("path")

app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))

// hbs.registerPartial(path.join(__dirname, "views", "partials"))


app.get("/", (req, res) => {
    res.render("index")
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/pinguin", (req, res) => {
    res.render("pinguilia-galery")
})

app.listen(3000, () => console.log(' on port 3000'));