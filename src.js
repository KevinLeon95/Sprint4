const express = require ("express");
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
const village= require("./villages");
const news = require ("./news");

//GET municipios
app.get("/api/epidemiologic-monitor/villages", (req, res) =>{
    res.json(village);
})

//GET news
app.get("/api/epidemiologic-monitor/news", (req, res)=>{
    res.json(news);
})

//POST municipios
app.post("/api/epidemiologic-monitor/villages", (req, res) => {
    let id= req.body.id;
    let municipio=  req.body.municipio;
    let departamento= req.body.departamento;
    let numeroCasos= req.body.numeroCasos;
    let numeroMujeres= req.body.numeroMujeres;
    let numeroHombres= req.body.numeroHombres;
    let numeroRecuperados= req.body.numeroRecuperados;

    village.push({id: id, municipio: municipio, departamento: departamento, numeroCasos: numeroCasos, numeroMujeres: numeroMujeres, numeroHombres: numeroHombres, numeroRecuperados: numeroRecuperados});

    res.json(village);
});



module.exports = app;