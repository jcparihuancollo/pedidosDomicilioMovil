const express = require('express');
const router = express.Router();
const con = require('../db/Base');

const Cliente= require('../Models/Cliente')


router.get('/', function(req, res) {
    let values = [];
    values.push(req.query.usuario);
    values.push(req.query.contrasena);
    con.query( Cliente.view , values, (error, results, fields)=>{
        if (error) {
                res.send(error)
           }else{
            
               res.send(results)
           }
    })
});

router.post('/', function(req, res) {
    let values = [];
    values.push(req.body.nombre);
    values.push(req.body.usuario);
    values.push(req.body.email);
    values.push(req.body.contrasena);
    values.push(req.body.celular);
    values.push(req.body.direccion);
    con.query(Cliente.add,values , (err,result)=>{
        if (err) {
                res.send(err)
           }else{
               res.send(result)
           }
    })
});

router.put('/', function(req, res) {
    let values = [];
    values.push(req.body.nombre);
    values.push(req.body.ci);
    values.push(req.body.id);
    con.query(Persona.edit,values , (err,result)=>{
        if (err) {
                res.send(err)
           }else{
               res.send(result.rows)
           }
    })
});


router.delete('/', function(req, res) {
    let values = [];
    values.push(req.query.id);
    con.query(Persona.del,values , (err,result)=>{
        if (err) {
                res.send(err)
           }else{
               res.send(result.rows)
           }
    })
});

module.exports = router;