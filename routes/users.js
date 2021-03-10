var express = require('express');
var router = express.Router();
var usuario = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Esto solo realiza el proceso de autenticacion
//pero no tiene elemnetos de SEGURIDAD
router.post('/login',(req,res,next)=>{
  //console.log(req.body.email,req.body.paaswd );
  usuario.login(req.body.email,req.body.paaswd, ( e , d )=>{
    if (d) {
        req.send("Login correcto");
        ses=req.session;
        console.log(ses.id);
        //crear la sesion
        /*
        1.- reutilizar la sesion original del chrome
        2.- hacer una nueva, deshechando la de web browser
        */

    } else {
      res.json(e);
    }
  });
});


module.exports = router;
