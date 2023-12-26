const express = require ('express');
const {primeraDivicion} = require('../datos/equipos.js').equiposFutbol;
const routerPrimera = express.Router();
routerPrimera.use(express.json());

routerPrimera.get('/',(req,res) =>{
  res.send(JSON.stringify(primeraDivicion));
});
routerPrimera.get('/:apodo',(req,res)=>{
  const apodo = req.params.apodo;
  const resultados = primeraDivicion.filter(equipo => equipo.apodo === apodo);

  if (resultados.length === 0){
      return res.status(404).send(`no se a encontrado descripcion de tal equipo${apodo}`);
  }
  res.send(JSON.stringify(resultados));
});
routerPrimera.get('/:apodo/:nivel',(req,res)=>{
  const apodo = req.params.apodo;
  const nivel = req.params.nivel;
  const resultados = primeraDivicion.filter(equipo => equipo.apodo===apodo && equipo.nivel===nivel);

  if (resultados.length === 0){
      return res.status(404).send(`no se a encontrado descripcion de tal equipo${apodo} de el nivel${nivel}`);
  }
  res.send(JSON.stringify(resultados));
});

routerPrimera.post('/',(req,res)=>{
  let nuevosEquipos = req.body;
  primeraDivicion.push(nuevosEquipos);
  res.send(JSON.stringify(primeraDivicion));
});

routerPrimera.put('/:id',(req,res)=>{
  const actualizarEquipos = req.body;
  const id = req.params.id;
  const indice = primeraDivicion.findIndex(equipo=> equipo.id == id);
  if(indice >= 0){
    primeraDivicion[indice] =actualizarEquipos;
  }
  res.send(JSON.stringify(primeraDivicion))

});

routerPrimera.patch('/:id',(req,res)=>{
  const infoActualizada = req.body;
  const  id = req.params.id;

  const indice = primeraDivicion.findIndex(equipo=>equipo.id == equipo);

  if(indice >= 0) {
    const equiposModificados = primeraDivicion[indice];
    Object.assign(equiposModificados,infoActualizada);

  }
  res.send(JSON.stringify(primeraDivicion));
});

 routerPrimera.delete('/:id',(req,res) => {
  const id = req.params.id;
  const indice = primeraDivicion.findIndex(equipo => equipo.id == id);

  if (indice >= 0){
    primeraDivicion.splice(indice,1);
  }
  res.send(JSON.stringify(primeraDivicion));
 });


module.exports = routerPrimera;



