
//checar o tipo de usuario do sistema
function check(argument) {
	var titulo1 = document.getElementById('titulo').value;
	var senha = document.getElementById('senha').value;

	var titulo2 = titulo1.split("");
	var titulo = titulo2[0] + titulo2[1] + titulo2[2] + titulo2[3];

	console.log(titulo);

	if (titulo == '0101') {
		window.location.href = "../Eleicao/home_chefe.html";
	}else if (titulo == '0202') {
		window.location.href = "../Eleicao/home_mesario.html";
	// }else if (titulo == '0303') {
	// 	window.location.href = "../Eleicao/home.html";
	}else{
		window.location.href = "../Eleicao/home.html";
		// alert("Fatal error");
	}
}