const express = require ('express');
const {primeraNacional} = require('../datos/equipos.js').equiposFutbol;
const routerSegunda = express.Router();
routerSegunda.use(express.json());





routerSegunda.get('/',(req,res)=>{
  res.send(JSON.stringify(primeraNacional));
});

routerSegunda.get('/:localidad',(req,res)=>{
  const localidad = req.params.localidad;
  const resultados = primeraNacional.filter(equipo => equipo.localidad===localidad);

  if (resultados.length === 0){
      return res.status(404).send(`no se a encontrado ubicacion de tal ${localidad}`);
}
if(req.query.ordenar === 'hinchas'){
  return res.send(JSON.stringify(resultados.sort((a,b)=> b.hinchas - a.hinchas)));
}

  res.send(JSON.stringify(resultados));
});

module.exports = routerSegunda;