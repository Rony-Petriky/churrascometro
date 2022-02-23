let inputadulto = document.getElementById("adultos");
let inputcrianca = document.getElementById("criancas");
let inputducarao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");


function calcular() {
	
	let adultos = inputadulto.value;
	let criancas = inputcrianca.value;
	let duracao = inputducarao.value;



	let qtdtotalcarne = carnepp(duracao)*adultos + (carnepp(duracao)/2 * criancas);
	let qtdtotalbebidas = bebidaspp(duracao)*adultos + (bebidaspp(duracao)/2 * criancas);
	let qtdtotalcerveja = cervejapp(duracao)*adultos;
	
	resultado.innerHTML = '<p>'+ qtdtotalcarne/1000+ ' Kg de carne</p>'
	resultado.innerHTML += '<p>'+ Math.ceil (qtdtotalbebidas/2000) +' Garrafas de refrigerante</p>'
	resultado.innerHTML += '<p>'+ Math.ceil(qtdtotalcerveja/365)+ ' Latas de cerveja</p>'



}
	function carnepp(duracao) {
		if (duracao >= 6) {
			return 650;
		}else{
			return 400;
		}

	}
		function cervejapp(duracao) {
		if (duracao >= 6) {
			return 2000;
		}else{
			return 1200;
		}
		
	}
			function bebidaspp(duracao) {
		if (duracao >= 6) {
			return 1500;
		}else{
			return 1000;
		}
		
	}
