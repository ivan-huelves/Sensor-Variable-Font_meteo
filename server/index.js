/*Se necesita instalar Node.Js https://nodejs.org/es/
Cargar en la placa Arduino StandardFirmata
Instalar con npm install lo descrito en package.json

Info sensores
http://johnny-five.io/examples/temperature-lm35/
*/

//INICIO CONFIGURACIÓN
'use strict';
//Johnny-five es una librería para controlar Arduino con Js
const five = require("johnny-five");
//Framework para Node.js
const express = require('express'); //Framework para Node.js
const app = express();
const server = require('http').createServer(app);
//Librería para comunicar cliente y servidor en tiempo real
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/public/index.html')
});
// FIN CONFIGURACIÓN

//DECLARACIÓN DE VARIABLES
//sensor temperatura LM35
let sensor;
let valorSensor;
let valorNormalizado;

//sensor agua
let sensor2;
let valorSensor2;
let valorNormalizado2;

// control de la Arduino
five.Board().on('ready', function() {
  console.log('Tenemos conexión con Arduino');
 
  //Configuración sensores en la placa
  sensor = new five.Thermometer({
    controller: "LM35", //nombre del sensor
    pin: "A0", //donde está pinchado el sensor
    freq: 1000 //frecuencia con la que lee el sensor
  });

  sensor2 = new five.Sensor({
    pin: "A2", //donde está pinchado el sensor
    freq: 1000 //frecuencia con la que lee el sensor
  });

  //Registro los valores del sensor en tiempo real
  sensor.on("change", function() {
    
    valorSensor = this.celsius; //recojo en un variable el valor transformado
    
    //FUNCIÓN NORMALIZADORA DEL MODELO
    //el constrain es para limitar los valores máximos y mínimos. Los dos primeros los límites
    //del sensor y los dos segundos los del eje de variación
    //los dos siguientes es para limitar los valores
        valorNormalizado = five.Fn.constrain(five.Fn.map(valorSensor, 20, 45, 200, 900),200,900);
    console.log("Temperatura: " + valorSensor);
  });


  sensor2.on("change", function() {
    
    valorSensor2 = this.value; //recojo en un variable el valor transformado
    valorNormalizado2 = five.Fn.constrain(five.Fn.map(valorSensor2, 2, 265, 200, 900),200,900);
    console.log("Agua: " + valorSensor2);
  });

})

//COMUNICACIÓN EN TIEMPO REAL ENTRE EL SERVIDOR Y EL CLIENTE
io.on('connection', function(socket){
    //esto es para ver que estamos conectados
    console.log(`cliente: ${socket.id}`)
    //envio el valor cada X tiempo al cliente
    setInterval(() => {
      socket.emit('envioValorSensorNormalizado', valorNormalizado, valorNormalizado2, valorSensor, valorSensor2) //con emit envío un valor
    }, 1000)

})
// FIN COMUNICACIÓN

//En qué puerto
const port = process.env.PORT || 3000;
server.listen(port);
console.log(`Accede en el navegador a http://localhost:${port}`);
