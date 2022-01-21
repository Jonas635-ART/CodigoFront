Algoritmo tareas
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
			"*": escribir "el resultado de la multiplicacion es: " multiplicacion(a,b)
			"^": escribir "el resultado de la potenciacion es: " potenciacion(a,b)
			De Otro Modo:
				escribir "no soporta esta operacion"
		FinSegun
		escribir ""
		escribir "ingresa su operacion"
		leer operacion
	FinMientras
	escribir "se cerro calculadora"
FinAlgoritmo

funcion multiplicacion_retorno = multiplicacion(a, b)
	multiplicacion_retorno = a * b
FinFuncion
	funcion potenciacion_retorno = potenciacion(a, b)
		potenciacion_retorno = a ^ b
FinFuncion
