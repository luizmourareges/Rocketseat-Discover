const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
    const items = [
        {
            title: "V",
            message: "asco"
        },
        {
            title: "I",
            message: "mpossivel ser feliz"
        },
        {
            title: "D",
            message: "eixa os garotos brincar"
        },
        {
            title: "A",
            message: "h lelek lek lek"
        }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get("/sobre", function (req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log("Servidor rodando");