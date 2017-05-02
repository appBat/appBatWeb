'use strict';

/**
 * @ngdoc function
 * @name proyectoUApp.controller:BaseobjetivosCtrl
 * @description
 * # BaseobjetivosCtrl
 * Controller of the proyectoUApp
 */
angular.module('proyectoUApp')
  .controller('BaseobjetivosCtrl', function ($scope ,$firebaseArray) {
     
  	//lista de objetos a insertar en la base de datos
  	$scope.listaInsertar = [] ;
  	//lista de usuarios cargador en el archivo 
  	$scope.baseObjetivos;
  
  	//insertar los  datos cargador en listaInsertar
	$scope.inserta = function(){
		//se obtiene referencia de la base
		var ref = firebase.database().ref();
		//se elimina el nodo para insertar lo nuevo
		 ref.child("BaseObjetivos").remove();
		//recorre el arreglo con los datos obtenidos
		//for (var i = 0; i < 10; i++) {  //comentar esta linea y desconmentar al de abajo pra que haga todas las inserciones 
			for (var i = 0; i < $scope.listaInsertar.length; i++) {
				//el primer dato que tiene los excabezados es ignorado con esta condicion
				if(i > 0){
					console.log($scope.listaInsertar[i]);
    			    //var newPostKey = firebase.database().ref().child("BaseConsultar").push().key;
    			    ref.child("BaseObjetivos").push(
    			    		{
    			    		  gerente : $scope.listaInsertar[i].gerente ,
    			    		  ruta : $scope.listaInsertar[i].ruta ,
    			    		  marca : $scope.listaInsertar[i].marca ,
    			    		  objetivoVenta : $scope.listaInsertar[i].objetivoVenta ,
    			    		  ventasAcomuladas : $scope.listaInsertar[i].ventasAcomuladas ,
    			    		  efectividadVentas : $scope.listaInsertar[i].efectividadVentas ,
    			    		  baseClientes : $scope.listaInsertar[i].baseClientes ,
    			    		  clientesConCompra : $scope.listaInsertar[i].clientesConCompra ,
    			    		  porcentajeCobertura : $scope.listaInsertar[i].porcentajeCobertura ,
    			    		  objetivoVisita : $scope.listaInsertar[i].objetivoVisita ,
    			    		  objetivoPedido : $scope.listaInsertar[i].objetivoPedido ,
    			    		  visitas : $scope.listaInsertar[i].visitas ,
    			    		  pedidos : $scope.listaInsertar[i].pedidos ,
    			    		  efectividadVisitas : $scope.listaInsertar[i].efectividadVisitas ,
    			    		  efectividadPedidos : $scope.listaInsertar[i].efectividadPedidos 
    			    		}    			   				
    			   	);
				}	
		}
	}


  	//funcion que lee el archivo y lo almacena en el objeto workbook para su posterior interpretacion
     $scope.readUser = function (workbook) {
        /* DO SOMETHING WITH workbook HERE */
        console.log(workbook);
        console.log(workbook.Sheets);
        $scope.baseObjetivos = workbook.Sheets.Base_de_Objetivos;
        console.log($scope.baseObjetivos);
        //variable que  va aumanetando  a medida que recorre las celdas, cuandoo llegue a la numero 7
	    //el valor del contador vuelve a ser 0
	    $scope.contadorColumnas1 =  0 ;
        //almacena los valores de una fila, para que sea insertada e la DB  
        $scope.objetoCreacion = {};
        //Empieza a recorrer  la hoja  "Base_a_Consultar"
        console.log( "valor columnas " +  $scope.contadorColumnas1);
        console.log( "valor titulos " +  $scope.contadorTitulos);
        Object.keys($scope.baseObjetivos).forEach(function(key) {
        	console.log("Entra for = " + $scope.contadorColumnas1);
            //console.log($scope.baseAConsultar[key] );
        		//valida el valor del contador de columnas 
        		if($scope.contadorColumnas1 === 0 ){
        		 //agrega el valor de la ruta 
        		  $scope.objetoCreacion.gerente = $scope.baseObjetivos[key].w ;         			
        		  console.log("agrega gerente");
        		  //suma 1 al contador
        		  $scope.contadorColumnas1++;  
        		  return;
        		}
        		if($scope.contadorColumnas1 === 1 ){
        		 	//agrega el valor del gerente
        			$scope.objetoCreacion.ruta = $scope.baseObjetivos[key].w ;         			
        			console.log("agrega ruta");
        			//suma 1 al contador
	        		$scope.contadorColumnas1++;  
	        		return; 
        		}
        		if($scope.contadorColumnas1 === 2 ){
        		    //agrega el valor de la fecha
        		   	$scope.objetoCreacion.marca = $scope.baseObjetivos[key].w ;         			
        	     	console.log("agrega marca");
        		 	//suma 1 al contador
        		  	$scope.contadorColumnas1++;  
        			return;
        		}
        		if($scope.contadorColumnas1 === 3 ){
        		    //agrega el valor de la marca
        		   	$scope.objetoCreacion.objetivoVenta	 = $scope.baseObjetivos[key].w ;         			
        			console.log("agrega objetivo venta");
        		    //suma 1 al contador
        		  	$scope.contadorColumnas1++;  
        			return;
        		}
        		if($scope.contadorColumnas1 === 4 ){
        		    //agrega el valor de la marca
        		   	$scope.objetoCreacion.ventasAcomuladas	 = $scope.baseObjetivos[key].w ;         			
        			console.log("agrega venas acomuladas");
        		    //suma 1 al contador
        		  	$scope.contadorColumnas1++;  
        			return;
        		}
        		if($scope.contadorColumnas1 === 5 ){
        		    //agrega el valor de la marca
        		   	$scope.objetoCreacion.efectividadVentas	 = $scope.baseObjetivos[key].w ;         			
        			console.log("agrega efectividad ventas");
        		    //suma 1 al contador
        		  	$scope.contadorColumnas1++;  
        			return;
        		}
        		if($scope.contadorColumnas1 === 6 ){
        		    //agrega el valor de la marca
        		   	$scope.objetoCreacion.baseClientes	 = $scope.baseObjetivos[key].w ;         			
        			console.log("agrega efectividad ventas");
        		    //suma 1 al contador
        		  	$scope.contadorColumnas1++;  
        			return;
        		}

        		if($scope.contadorColumnas1 === 7 ){
        		    //agrega el valor de la marca
        		   	$scope.objetoCreacion.clientesConCompra	 = $scope.baseObjetivos[key].w ;         			
        			console.log("agrega clientes con compra");
        		    //suma 1 al contador
        		  	$scope.contadorColumnas1++;  
        			return;
        		}
        		if($scope.contadorColumnas1 === 8 ){
        		    //agrega el valor de la marca
        		   	$scope.objetoCreacion.porcentajeCobertura	 = $scope.baseObjetivos[key].w ;         			
        			console.log("agrega porcentaje cobertura");
        		    //suma 1 al contador
        		  	$scope.contadorColumnas1++;  
        			return;
        		}
        		if($scope.contadorColumnas1 === 9 ){
        		    //agrega el valor de la marca
        		   	$scope.objetoCreacion.objetivoVisita	 = $scope.baseObjetivos[key].w ;         			
        			console.log("agrega objetivo visita");
        		    //suma 1 al contador
        		  	$scope.contadorColumnas1++;  
        			return;
        		}

        		if($scope.contadorColumnas1 === 10 ){
        		    //agrega el valor de la marca
        		   	$scope.objetoCreacion.objetivoPedido	 = $scope.baseObjetivos[key].w ;         			
        			console.log("agrega objetivo pedido");
        		    //suma 1 al contador
        		  	$scope.contadorColumnas1++;  
        			return;
        		}
        		if($scope.contadorColumnas1 === 11 ){
        		    //agrega el valor de la marca
        		   	$scope.objetoCreacion.visitas	 = $scope.baseObjetivos[key].w ;         			
        			console.log("agrega visitas");
        		    //suma 1 al contador
        		  	$scope.contadorColumnas1++;  
        			return;
        		}
        		if($scope.contadorColumnas1 === 12 ){
        		    //agrega el valor de la marca
        		   	$scope.objetoCreacion.pedidos	 = $scope.baseObjetivos[key].w ;         			
        			console.log("agrega pedidos");
        		    //suma 1 al contador
        		  	$scope.contadorColumnas1++;  
        			return;
        		}
        		if($scope.contadorColumnas1 === 13 ){
        		    //agrega el valor de la marca
        		   	$scope.objetoCreacion.efectividadVisitas	 = $scope.baseObjetivos[key].w ;         			
        			console.log("agrega efectividad visitas");
        		    //suma 1 al contador
        		  	$scope.contadorColumnas1++;  
        			return;
        		}
        	
        		
        		if($scope.contadorColumnas1 === 14 ){
        		    //agrega el valor de las ventas
    		    	$scope.objetoCreacion.efectividadPedidos = $scope.baseObjetivos[key].w ;         			    			  
    			    console.log("******** objeto creacion************");
    			    console.log($scope.objetoCreacion);
    			    //$scope.listaInsertar[$scope.contadorNormal] = JSON.stringify($scope.objetoCreacion) ;
    			    $scope.listaInsertar.push($scope.objetoCreacion) ;
    			    console.log($scope.listaInsertar);
    			    //reinicia el valor del contador
					$scope.contadorColumnas1 = 0;
					//el objeto se reinicializa
					$scope.objetoCreacion = {};
					//actualiza en el html 
					$scope.$apply();
					return;        	                			
        		}				   
		});      
      }
  });


