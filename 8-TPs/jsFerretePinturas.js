/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/


var app = angular.module("FerretePinturas",[]);
app.controller("controladorPinturas",function($scope)

{
	
	$scope.temp = '';

	$scope.resultado='';

	$scope.FahrenheitCentigrados=function()
	{
		$scope.resultado = (Number($scope.temp)-32)/1.8;
	}


	$scope.CentigradosFahrenheit=function()
	{
		$scope.resultado = (Number($scope.temp)*1.8)+32;
	}
});

