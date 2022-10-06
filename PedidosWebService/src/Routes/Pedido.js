const express = require('express');
const router = express.Router();
const con = require('../db/Base');

const Pedido= require('../Models/Pedido')
const Detalle= require('../Models/Detalle')

router.get('/',  function(req, res) {
    let values = [];
    if (req.query.tipo == 0) {
        values.push(req.query.idcli);
    } else {
        values.push(req.query.idop);
    }
    con.query( req.query.tipo == 0 ? Pedido.view : Pedido.list , values, (error, results)=>{
        if (error) {
                res.send(error)
           }else{
                let ordenado = results.map(item =>{
                    return {
                        idPedido : item.idPedido ,
                        descripcion : item.descripcion ,
                        fechaHoraPedido : item.fechaHoraPedido ,
                        fechaHoraEntrega : item.fechaHoraEntrega ,
                        precioTotal : item.precioTotal ,
                        estadoPedido : item.estadoPedido ,
                        idRestaurante : item.idRestaurante,
                        idCliente  : item.idCliente ,
                        nombre : item.nombre ,
                        celular : item.celular ,
                        direccion : item.direccion ,
                        idOperario : item.idOperario ,
                        detalle : item.detalle.split(',').map(i=> {
                            s = i.split('-');
                            return {
                                nombre : s[0] ,
                                cantidad : s[1],
                                precio : s[2]
                            };
                        })
                    }
                })
               res.send(ordenado)
           }
    })
});

router.post('/', function(req, res) {
    let values = [];
    values.push(req.body.descripcion);
    values.push(req.body.pedido);
    values.push(req.body.entrega);
    values.push(req.body.total);
    values.push(req.body.estado);
    values.push(req.body.idres);
    values.push(req.body.idcli);
    values.push(req.body.idop);
    let detalle = Array.from( req.body.detalle);
    con.query(Pedido.add,values , (err,result)=>{
        if (err) {
                res.send(err)
           }else{
             let idpedido = result.insertId 
             detalle.map(i =>{
                let d = [];
                d.push(idpedido) 
                d.push(i.idProducto) 
                d.push(i.cantidad) 
                d.push(i.precio) 
                con.query(Detalle.add , d , (err,result)=>{})
             })
               res.send(result)
           }
    })
});
router.put('/', function(req, res) {
    let values = [];
    values.push(req.body.estado);
    values.push(req.body.idpedido);
    con.query(Pedido.edit,values , (err,result)=>{
        if (err) {
                res.send(err)
           }else{
               res.send(result)
           }
    })
});

module.exports = router;