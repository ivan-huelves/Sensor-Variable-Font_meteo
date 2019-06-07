const socket = io()

//Con "on" escucho los valores envaidos por emit
socket.on('envioValorSensorNormalizado', function(valorNormalizado, valorNormalizado2, valorSensor, valorSensor2){ //Con on escucho los valores envaidos por emit
 
  //PASO EL VALOR DE ARDUINO A UNA VARIABLE DEFINIDA EN CSS
  let ejevariacion = document.getElementById("valorModificaEjeVariacion"); //creo una variable para asignar a una propiedad en CSS
  let ejevariacion2 = document.getElementById("valorModificaEjeVariacion2"); //creo una variable para asignar a una propiedad en CSS

  //FUNCION SIGNIFICATIVA
  ejevariacion.style.setProperty('--peso', valorNormalizado);//--nombre eje variación
  ejevariacion2.style.setProperty('--pesoItalic', valorNormalizado2);//--nombre eje variación

  //PARA MOSTRAR LOS VALORES EN EL HTML
  let valor = document.getElementById("muestroValorSensor");
  let valorBis = document.getElementById("muestroValorSensorBis");
  let valor2 = document.getElementById("muestroValorSensor2");
  let valor3 = document.getElementById("muestroValorEjeVariacion");
  let valor4 = document.getElementById("muestroValorEjeVariacion2");

  valor.innerHTML = `${valorSensor}º`;
  valorBis.innerHTML = `${valorSensor}`;
  valor2.innerHTML = `${valorSensor2}`;
  valor3.innerHTML = `${valorNormalizado}`;
  valor4.innerHTML = `${valorNormalizado2}`;

})
