const express = require("express");
const app= express();
const { controller } = require("./controller");

app.get("/", (req, res) =>{
    res.send("Tienda de repuestos ");
} );


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

    controller.getAutopartes(res);


});
 app.get("/autopartes/:id_autoparte", (req, res) => {
      let id_autoparte= req.params.id_autoparte
    controller.getAutopartesid( id_autoparte, res)
});

app.get("/autopartes/envio", (req, res) => {
    controller.getEnviosid(res);
})

exports.app = app;