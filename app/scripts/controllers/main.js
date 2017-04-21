'use strict';

/**
 * @ngdoc function
 * @name proyectoUApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proyectoUApp
 */
angular.module('proyectoUApp')
  .controller('MainCtrl', function ($scope ,$firebaseArray ) {
    //arreglo que  almacena la informacion de cada una de las  hojas de archivo
  	
  	$scope.baseAConsultar;
  	$scope.listaInsertar = [] ;
  
  	//insertar los  datos cargador en listaInsertar
	$scope.inserta = function(){
		//recorre el arreglo con los datos obtenidos
		for (var i = 0; i < 20; i++) {
			//for (var i = 0; i < $scope.listaInsertar.length; i++) {
				//el primer dato que tiene los excabezados es ignorado con esta condicion
				if(i > 0){
					console.log($scope.listaInsertar[i]);

					var ref = firebase.database().ref();
    			    //var newPostKey = firebase.database().ref().child("BaseConsultar").push().key;
    			    ref.child("BaseConsultar").push(
    			    		{
    			    		  ruta : $scope.listaInsertar[i].ruta ,
    			    		  gerente : $scope.listaInsertar[i].gerente ,
    			    		  fecha : $scope.listaInsertar[i].fecha ,
    			    		  codigoSku : $scope.listaInsertar[i].codigoSku ,
    			    		  descripcion : $scope.listaInsertar[i].descripcion ,
    			    		  ventas : $scope.listaInsertar[i].ventas 
    			    		}    			   				
    			   	);

				}
			
		}


	}


  	//funcion que lee el archivo y lo almacena en el objeto workbook para su posterior interpretacion
     $scope.read = function (workbook) {
        /* DO SOMETHING WITH workbook HERE */
        console.log(workbook);

        console.log("*****************");


        console.log(workbook.Sheets);
        $scope.baseAConsultar = workbook.Sheets.Base_a_Consultar
        $scope.baseJson  =  JSON.stringify($scope.baseAConsultar); 
        console.log("*****************");

        console.log("*****************");
        console.log("*****************");
        console.log("*****************");
        console.log($scope.baseAConsultar);

        console.log("*****************");
        console.log("*****************");
        console.log("*****************");
        //variable que  va aumanetando  a medida que recorre las celdas, cuandoo llegue a la numero 7
	    //el valor del contador vuelve a ser 0
	    $scope.contadorColumnas =  0 ;
	    $scope.contadorNormal = 0  ;
        //almacena los valores de una fila, para que sea insertada e la DB  
        $scope.objetoCreacion = {};
        //Empieza a recorrer  la hoja  "Base_a_Consultar"
        console.log( "valor columnas " +  $scope.contadorColumnas);
        console.log( "valor titulos " +  $scope.contadorTitulos);
        Object.keys($scope.baseAConsultar).forEach(function(key) {
            //console.log($scope.baseAConsultar[key] );
        		//valida el valor del contador de columnas 
        		if($scope.contadorColumnas === 0 ){
        		 //agrega el valor de la ruta 
        		  $scope.objetoCreacion.ruta = $scope.baseAConsultar[key].w ;         			
        		  console.log("agrega ruta");
        		  //suma 1 al contador
        		  $scope.contadorColumnas++;  
        		  return;
        		}
        		if($scope.contadorColumnas === 1 ){
        		 	//agrega el valor del gerente
        			$scope.objetoCreacion.gerente = $scope.baseAConsultar[key].w ;         			
        			//console.log("agrega gerente");
        			//suma 1 al contador
	        		$scope.contadorColumnas++;  
	        		return; 
        		  
        		}
        		if($scope.contadorColumnas === 2 ){
        		    //agrega el valor de la fecha
        		   	$scope.objetoCreacion.fecha = $scope.baseAConsultar[key].w ;         			
        		//	console.log("agrega fecha");
        		 	//suma 1 al contador
        		  	$scope.contadorColumnas++;  
        			return;
        		}
        		if($scope.contadorColumnas === 3 ){
        		    //agrega el valor de la marca
        		   	$scope.objetoCreacion.marca	 = $scope.baseAConsultar[key].w ;         			
        		//	console.log("agrega marca");
        		    //suma 1 al contador
        		  	$scope.contadorColumnas++;  
        			return;
        		}
        		if($scope.contadorColumnas === 4 ){
        		     //agrega el valor del codigo sku
        		     $scope.objetoCreacion.codigoSku = $scope.baseAConsultar[key].w ;         			
        		  //   console.log("agrega codigoSku");
        		     //suma 1 al contador
        		     $scope.contadorColumnas++;  
        			 return;
        		}
        		if($scope.contadorColumnas === 5 ){
        		    //agrega el valor del descripcion
        		   	$scope.objetoCreacion.descripcion = $scope.baseAConsultar[key].w ;         			
        		//	console.log("agrega descripcion");
					//suma 1 al contador       		  
        		    $scope.contadorColumnas++;  
        		    return;
        		   
        		}
        		if($scope.contadorColumnas === 6 ){
        		    //agrega el valor de las ventas
    		    	$scope.objetoCreacion.ventas = $scope.baseAConsultar[key].w ;         			
    			  
    			    console.log("********************");
    			    console.log($scope.objetoCreacion);
    			    //$scope.listaInsertar[$scope.contadorNormal] = JSON.stringify($scope.objetoCreacion) ;
    			    $scope.listaInsertar.push($scope.objetoCreacion) ;
    			    console.log($scope.listaInsertar);
    			    $scope.contadorNormal++;
    			    //reinicia el valor del contador
					$scope.contadorColumnas = 0;
					//el objeto se reinicializa
					$scope.objetoCreacion = {};
					//actualiza en el html 
					$scope.$apply();
					return;
        	        
        			
        		}
				   
				      		
        		
        		

        	
		    

		});
      


      }


  });

