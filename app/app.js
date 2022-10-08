const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');

const data = [];

app.get('/', (req, res) => {
    res.render('form');
})

app.post('/', (req, res) => {
    data.push(req.body)
    res.render('form');
})

app.get("/productos", (req, res) => {
    res.render('table', {data});
});

app.listen(PORT, (err) => {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port " + PORT);
});