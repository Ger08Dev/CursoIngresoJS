/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

var app= angular.module("FerreteIluminacion",[]);
app.controller("controladorIluminacion",function($scope)
	{
		$scope.datos=[];
		$scope.datos.lamparitas='';
		$scope.datos.marca='';
		$scope.datos.precioTotal='';
		$scope.datos.precioFinal='';

		
		$scope.precioimp='';


		$scope.resultado = '';

		$scope.CalcularPrecio=function()
		{
			$scope.datos.precioTotal = (Number($scope.datos.lamparitas))*35;

			if (Number($scope.datos.lamparitas)>=6) 
			{
				$scope.datos.precioFinal= (Number($scope.datos.precioTotal))*0.5;
			}

			if (Number($scope.datos.lamparitas)==5) 
			{
				if($scope.datos.marca == "ArgentinaLuz")
				{
					$scope.datos.precioFinal= (Number($scope.datos.precioTotal))*0.6;
				}
				else
				{
					$scope.datos.precioFinal= (Number($scope.datos.precioTotal))*0.7;	
				}
				
			}

			if (Number($scope.datos.lamparitas)==4) 
			{
				if($scope.datos.marca == "ArgentinaLuz" || $scope.datos.marca == "FelipeLamparas")
				{
					$scope.datos.precioFinal= (Number($scope.datos.precioTotal))*0.75;
				}
				else
				{
					$scope.datos.precioFinal= (Number($scope.datos.precioTotal))*0.8;	
				}
				
			}

			if (Number($scope.datos.lamparitas)==3) 
			{
				if($scope.datos.marca == "ArgentinaLuz")
				{
					$scope.datos.precioFinal= (Number($scope.datos.precioTotal))*0.85;
				}
				else if($scope.datos.marca == "FelipeLamparas")
				{
					$scope.datos.precioFinal= (Number($scope.datos.precioTotal))*0.9;	
				}
				else
				{
					$scope.datos.precioFinal= (Number($scope.datos.precioTotal))*0.95;
				}
				
			}

			if (Number($scope.datos.lamparitas)<=2) 
			{
				$scope.datos.precioFinal= (Number($scope.datos.precioTotal));
			}

			if (Number($scope.datos.precioFinal)>=120) 
			{
				
				$scope.resultado= "$"+(Number($scope.datos.precioFinal)*1.10).toFixed(2) +"- Usted pago $"+ (Number($scope.datos.precioFinal)*0.10 ) + " de IIBB";
				
			}
			else
			{
				$scope.resultado= "$"+Number($scope.datos.precioFinal);
			}

		}


	});
