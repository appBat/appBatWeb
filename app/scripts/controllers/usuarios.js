'use strict';

/**
 * @ngdoc function
 * @name proyectoUApp.controller:UsuariosCtrl
 * @description
 * # UsuariosCtrl
 * Controller of the proyectoUApp
 */
angular.module('proyectoUApp')
  .controller('UsuariosCtrl', function ($scope ,$firebaseArray ) {
    
  	//lista de objetos a insertar en la base de datos
  	$scope.listaInsertar = [] ;
  	//lista de usuarios cargador en el archivo 
  	$scope.usuarios;
  
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
    			    ref.child("Usuarios").push(
    			    		{
    			    		  ruta : $scope.listaInsertar[i].ruta ,
    			    		  codigo : $scope.listaInsertar[i].codigo ,
    			    		  regional : $scope.listaInsertar[i].regional ,
    			    		  gerente : $scope.listaInsertar[i].gerente ,
    			    		  vendedor : $scope.listaInsertar[i].vendedor ,
    			    		  cedula : $scope.listaInsertar[i].cedula 
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
        $scope.usuarios = workbook.Sheets.Usuarios
        console.log($scope.usuarios);
        //variable que  va aumanetando  a medida que recorre las celdas, cuandoo llegue a la numero 7
	    //el valor del contador vuelve a ser 0
	    $scope.contadorColumnas1 =  0 ;
        //almacena los valores de una fila, para que sea insertada e la DB  
        $scope.objetoCreacion = {};
        //Empieza a recorrer  la hoja  "Base_a_Consultar"
        console.log( "valor columnas " +  $scope.contadorColumnas1);
        console.log( "valor titulos " +  $scope.contadorTitulos);
        Object.keys($scope.usuarios).forEach(function(key) {
        	console.log("Entra for = " + $scope.contadorColumnas1);
            //console.log($scope.baseAConsultar[key] );
        		//valida el valor del contador de columnas 
        		if($scope.contadorColumnas1 === 0 ){
        		 //agrega el valor de la ruta 
        		  $scope.objetoCreacion.ruta = $scope.usuarios[key].w ;         			
        		  console.log("agrega ruta");
        		  //suma 1 al contador
        		  $scope.contadorColumnas1++;  
        		  return;
        		}
        		if($scope.contadorColumnas1 === 1 ){
        		 	//agrega el valor del gerente
        			$scope.objetoCreacion.codigo = $scope.usuarios[key].w ;         			
        			console.log("agrega codigo");
        			//suma 1 al contador
	        		$scope.contadorColumnas1++;  
	        		return; 
        		}
        		if($scope.contadorColumnas1 === 2 ){
        		    //agrega el valor de la fecha
        		   	$scope.objetoCreacion.regional = $scope.usuarios[key].w ;         			
        	     	console.log("agrega regional");
        		 	//suma 1 al contador
        		  	$scope.contadorColumnas1++;  
        			return;
        		}
        		if($scope.contadorColumnas1 === 3 ){
        		    //agrega el valor de la marca
        		   	$scope.objetoCreacion.gerente	 = $scope.usuarios[key].w ;         			
        			console.log("agrega gerente");
        		    //suma 1 al contador
        		  	$scope.contadorColumnas1++;  
        			return;
        		}
        		if($scope.contadorColumnas1 === 4 ){
        		     //agrega el valor del codigo sku
        		     $scope.objetoCreacion.vendedor = $scope.usuarios[key].w ;         			
        		     console.log("agrega vendedor");
        		     //suma 1 al contador
        		     $scope.contadorColumnas1++;  
        			 return;
        		}
        		
        		if($scope.contadorColumnas1 === 5 ){
        		    //agrega el valor de las ventas
    		    	$scope.objetoCreacion.cedula = $scope.usuarios[key].w ;         			    			  
    			    console.log("********************");
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


