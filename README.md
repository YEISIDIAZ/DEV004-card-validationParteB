La función isValidCard comprueba mediante el algoritmo de Luhn si una tarjeta de crédito es válida o no.

La función  maskify  sirve para que enmascare  el numero de TARJETA DE CREDITO asignada por el usuario, oculta los primeros numeros y deja solo ver los cuatro ultimos.

Solicita el número de tarjeta y verifica que el valor ingresado sea diferente de 0 y letras.

tambien verifica que sea mayor igual a 14 y menor igual a 16

El valor se separa número a número y luego se invierte al revés, ya que el número que identifica la tarjeta es el último y lo queremos en la primera posición.

La suma de todos los números de tarjeta se realiza y almacena.

si el resultado de la suma de todos los numeros pasados por el algoritmo de LUHN en su residuo es cero (0) la tarjeta ingresada es valida de lo contrario es invalida.

A partir del segundo número, se seleccionan en posiciones intercaladas, excluyendo siempre al primero.

Los números seleccionados se multiplican por 2 y si el resultado es mayor a 9, se resta por 9.

El resultado de la multiplicación se suma con los números que no fueron seleccionados.

El valor total de la suma se divide por 10, si el resto es igual a 0, la tarjeta es verdadera. De lo contrario, es una tarjeta no válida.

