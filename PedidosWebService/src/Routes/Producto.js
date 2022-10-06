const express = require('express');
const router = express.Router();
const con = require('../db/Base');

const Producto= require('../Models/Producto')


router.get('/', function(req, res) {
    let values = [];
    values.push(req.query.idres);
    
    con.query( req.query.idres != 0 ? Producto.list : Producto.view,req.query.idres == 0 ? [] : values, (error, results, fields)=>{
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
    values.push(req.body.ci);
    con.query(Persona.add,values , (err,result)=>{
        if (err) {
                res.send(err)
           }else{
               res.send(result.rows)
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