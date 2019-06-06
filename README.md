# Sensor Variable Font - meteo
El proyecto da un uso semántico a las tipografías variables en interfaces gráficas, estableciendo una relación entre la propia tipografía y los datos recogidos por diferentes sensores.

Providing variable fonts with a semantic use in graphic interfaces to establish a relationship between typography and the data collected by different sensors.

## Prototipo Nº3. Sensor de temperatura y agua aplicado a un panel informativo interactivo

![Sensor Variable Font - meteo](/img/sensorvariablefont-meteo.jpg)

En el tercer prototipo se pretende explorar la relación entre sensores que detecten fenómenos climatológicos con las capacidades expresivas de la tipografía en el espacio público de las ciudades. Para ello se ha empleado un sensor de temperatura y de nivel de agua (simulando un sensor de lluvia) en un panel informativo electrónico o más comúnmente conocido como mupi.

Por un lado estaría el sensor de temperatura, concretamente el modelo LM35. En este caso los valores pueden ser muy amplios, desde temperaturas por debajo de los cero grados a temperaturas hasta los 50º, por lo que se ha considerado oportuno para los propósitos del prototipo limitarnos entre 20º y 45º. El valor registrado se actualiza cada 1000 milisegundos. El otro sensor empleado que detecta el nivel de agua, registra valores que oscilan entre 2 y 265.

Y por otro la tipografía variable Source Sans Variable, tanto en su versión Roman para reproducir la temperatura, como la versión Italic para representar el grosor de las gotas de lluvia. En ambos casos se ha hecho uso del eje de variación Peso, con un valor mínimo de 200 y un valor máximo de 900.

La Función significativa empleada ha sido secuencialidad y continuidad. El propósito ha sido reflejar de una manera progresiva y acorde el fenómeno meteorológico registrado con la tipografía. Si aumenta la temperatura y/o los valores de lluvia aumenta el peso de la tipografía.

Una vez que se ha establecido la intención significativa se prosigue con la Función normalizadora que establece una relación entre los valores mínimos y máximos correspondientes de los sensores y tipografía.
Finalmente una vez que el valor normalizado se ha transformado a partir del proceso de significación se decide aplicar a todos los glifos.
