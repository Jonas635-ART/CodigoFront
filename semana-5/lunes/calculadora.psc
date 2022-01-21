Algoritmo calculadora
	definir total Como Entero
	definir operacion Como Caracter
	escribir "ingresa tu operacion"
	leer operacion
	mientras (operacion <> "") Hacer
		escribir "Ingresa el primer numero"
		leer a
		escribir "Ingresa el segundo numero"
		leer b
		segun operacion hacer
			"+": escribir "el resultado de la suma es: " Suma(a,b)
			"-": escribir "el resultado de la resta es: " Resta(a,b)
			"/": escribir "el resultado de la division es: " division(a,b)
			De Otro Modo:
				escribir "no soporta esta operacion"
		FinSegun
		escribir ""
		escribir "ingresa su operacion"
		leer operacion
	FinMientras
	escribir "se cerro calculadora"
	
FinAlgoritmo
funcion suma_retorno = Suma(a, b)
	suma_retorno = a + b
FinFuncion
funcion resta_retorno = Resta(a, b)
	resta_retorno = a - b
FinFuncion
funcion division_retorno = division(a, b)
	division_retorno = a / b
FinFuncion

	