const express = require('express');
const router = express.Router();
const con = require('../db/Base');
const Usuario= require('../Models/Usuario')
let md5 = require('md5')

router.get('/', function(req, res) {
    let values = [];
    values.push(req.query.nombre);
    values.push(md5(req.query.pass));
    con.query( Usuario.view, values, (err,result)=>{
        if (err) {
                res.send(err)
           }else{
               res.send(result)
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