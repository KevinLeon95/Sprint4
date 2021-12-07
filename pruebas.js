const express= require("express");
const app= express();

const srcRoutes= require ("./src");

app.use("/", srcRoutes);

const server= app.listen(3000, ()=>{
    let host= server.address().address;
    let port= server.address().port;
    console.log("Aplicacion conectada exitosamente en http//", host, port);
});