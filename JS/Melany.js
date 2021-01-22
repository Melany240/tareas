$(document).on("click","#btn_registrar",()=> {

		let ap=$("#apellidos").val();
		if( ap.trim().length<5 ){
			$("#msj_apellidos").attr("class","text-danger");
			return false;
		}


		let nm=$("#nombres").val();
		if( nm.trim().length<5 ){
			$("#msj_nombres").attr("class","text-danger");
			return false;
		}

		let tl=$("#telefono").val();
		if( tl.trim().length<5 ){
			$("#msj_telefono").attr("class","text-danger");
			return false;
		}

		let co=$("#correo").val();
		if( co.trim().length<5 ){
			$("#msj_correo").attr("class","text-danger");
			return false;
		}

		let city=$("#ciudad").val();
			if( city.length<5 ){
			$("#msj_ciudad").attr("class","text-danger");
			return false;
		}

		let obj_sexo=$("input[name=sexo]");
		
			
		let sexo="";
		$(obj_sexo).map(function(){ 
			if ($(this).prop('checked')==true){
				sexo=$(this).val();

		}
		});
			if (sexo=="") {
				alerta('error','Seleccionar una opcion','top-mid',true,0);
				return false;
			}

		let terminos=$("#terminos");
		if ($(terminos).prop('checked')==false) {
			
			alerta('error','Debe aceptar los terminos y condiciones','top-mid',true,0);
			return false;
			
			
		}

			alerta('success','DATOS INGRESADOS CORRECTAMENTE','bottom-end',false,3000);
		

		
 });

		//ecmascript  6+++

const alerta=(icon,title,position,showConfirmButton,timer)=>{
		Swal.fire({	
		position:position,
  		icon:icon,
  		title:title,
  		showConfirmButton:showConfirmButton,
  		timer:timer

		})
	
}

 //let ap=$('#apellidos').val();
   ///if(ap.lenght==5){
   	
 //}else{
 //	$('#msj_apellidos').text('Error: Debe escribir sus nombres');
 //	$('#msj_apellidos').attr('class','text-danger');
 //	
 //}

 ///let nm=$('#nombres').val();
 //  if(nm.lenght==0){
//     $('#msj_nombres').attr('class','text-success');
//}else{
//	 $('#msj_nombres').text('Error: Debe escribir sus nombres');
//      $('#msj_nombres').attr('class','text-danger');
//}

//let tl=$('#telefono').val();
//  if(tl.lenght==0){
//     
//      	
//}else{
//	 $('#msj_telefono').text('Error: Debe escribir sus nombres');
//      $('#msj_telefono').attr('class','text-danger');
//}

//let co=$('#correo').val();
//  if(co.lenght==0){
//     
//      
//}else{
//	 $('#msj_correo').text('Error: Debe escribir sus nombres');
//      $('#msj_correo').attr('class','text-danger');
//}
//lert("Formulario Completo")

//}

//){
 