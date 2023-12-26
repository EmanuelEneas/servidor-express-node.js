const express = require ('express');
const app = express();

const{equiposFutbol} =require('./datos/equipos.js');

///Routers
const routerPrimera = require('./routers/primeraDivicion.js');
app.use('/api/equipos/primeraDivicion',routerPrimera);

const routerSegunda = require('./routers/primeraNacional.js');
app.use('/api/equipos/primeraNacional',routerSegunda);


app.get('/',(req,res) => {
    res.send('mi primer servidor con Express')
});

app.get('/api/equipos',(req,res) =>{
    res.send(JSON.stringify(equiposFutbol))
});





const Puerto = process.env.Port || 3000;

app.listen(Puerto,()=>{
console.log(`el servidor esta escuchando${Puerto}...`)
});