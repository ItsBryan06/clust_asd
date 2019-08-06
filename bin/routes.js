const express = require("express");
const app= express();
const { controller } = require("./controller");

app.get("/", (req, res) =>{
    res.send("Tienda de repuestos BBJK");
} );

/* app.get("/proveedores", (req, res)=>{
   let usuarios = [
        {nombre: "Bryan", password:"123"},
        {nombre: "Ana", password:"132"},
    ]
    res.send(usuarios);
    controller.getProveedores(res);


}); */

app.get("/proveedores", (req, res) => {
    controller.getProveedor(res);
})

app.get("/proveedores/:id_proveedor", (req, res)=>{
    let id_proveedor= req.params.id_proveedor
    controller.getProveedorid(id_proveedor, res);
});


app.get("/clientes", (req, res)=>{
    controller.getClientes(res);


});

app.get("/clientes/:id_cliente", (req, res)=>{
    let id_cliente= req.params.id_cliente
    controller.getClientesid(id_cliente, res);
});

    app.get("/clientes/:id_cliente/envios", (req, res) => {
    let id_cliente= req.params.id_cliente
    controller.getEnvios( id_cliente, res)
});
app.get("/autopartes", (req, res)=>{
 /*   let usuarios = [
        {nombre: "Bryan", password:"123"},
        {nombre: "Ana", password:"132"},
    ]
    res.send(usuarios);*/
    controller.getAutopartes(res);


});
 app.get("/autopartes/:id_autoparte", (req, res) => {
    /*res.send("Se ha enviado a Bryan 4 llantas");*/
    let id_autoparte= req.params.id_autoparte
    controller.getAutopartesid( id_autoparte, res)
});

 /*app.get("/autopartes/proveedores", (req, res) => {
    res.send("proveedores de las autopartes");
});*/
exports.app = app;