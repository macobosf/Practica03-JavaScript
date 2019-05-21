
function saludo(saludo) {
	alert(saludo);
}

function insertar(num) {
	document.getElementById("textview").value = document.getElementById("textview").value + num;	 
}

function igual() {
	var exp = document.getElementById("textview").value;
	if (exp) {
		document.getElementById("textview").value = eval(exp);	
	}
}

function div() {
	var aux = document.getElementById("textview").value;
	aux = 1 / aux;
	var res = aux;
	document.getElementById("textview").value = res;
}

function raiz() {
	//var texto = "Ingrese un valor"
	var aux = document.getElementById("textview").value;
	aux = (Math.sqrt(aux));
	var res = aux;
	document.getElementById("textview").value = res;
	/*if (aux === null) {
		document.getElementById("textview").value = texto;
	}else{
		var res = aux;
		document.getElementById("textview").value = res;
	}*/
}

function masmenos() {
	var exp = document.getElementById("textview").value;
		if (exp > 0){
			document.getElementById("textview").value = "-" + exp;
		}else{
			aux = exp.replace(/[-|(|)]/g, "");
			document.getElementById("textview").value = aux;
		}
}

function limpiar() {
	document.getElementById("textview").value = "";
}

function regresar() {
	var exp = document.getElementById("textview").value;
	document.getElementById("textview").value = exp.substring(0,exp.length-1);
}