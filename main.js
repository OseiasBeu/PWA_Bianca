// -------------------------------
if ('serviceWorker' in navigator) {
	navigator.serviceWorker
	.register('./service-worker.js')
	.then(function() { 
		console.log('Service Worker Registered'); 
	}, function(error){
		console.log(error);
	});
}
// ------------------------------

let primeiraTela = document.querySelector('#primeira-tela');
let segundaTela = document.querySelector('#segunda-tela');
let Botao = document.querySelector('#botao');
let Frase = document.querySelector('#frase');

function IniciarContagem(){
	primeiraTela.style.display = 'none';
	segundaTela.style.display = 'flex';
}

Botao.onclick = IniciarContagem;


var countDownDate = new Date("Nov 11, 2018 12:00:00").getTime();

var x = setInterval(function() {

	var now = new Date().getTime();

	var distance = countDownDate - now;

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("temporizador").innerHTML = days + "d " + hours + "h "
	+ minutes + "m " + seconds + "s ";

	if (days >= 1) {
		document.getElementById("frase").innerHTML = "Ainda faltam " + days + " dias para a sua prova, isso quer dizer que ainda dá tempo de focar naquele conteúdo que parece complicado demais.";
	} else if (days == 0 && hours == 24) {
		document.getElementById("frase").innerHTML = "FALTAM " + hours + " HORAS !! Estamos aqui para ajudar você, portanto não se esqueça de descansar bem um dia antes da prova, e tente relaxar, pois o momentode estudos já passou.";
	} else if (days == 0 && hours == 12) {
		document.getElementById("frase").innerHTML = "FALTAM " + hours + " HORAS !!Manter uma boa alimentação ajuda na hora de executar a prova.";
	} else if (days == 0 && hours == 10) {
		document.getElementById("frase").innerHTML = "FALTAM " + hours + " HORAS !! E é comum o nervosismo aparecer, mas mantenha a calma, nós ajudaremos você a ter um bom preparo antes da prova.";
	} else if (days == 0 && hours == 5) {
		document.getElementById("frase").innerHTML = "FALTAM " + hours + " HORAS !! Agora está muito próximo, não é ? Nosso conselho é começar a separar os materiais e o lanchinho que irá levar. Não deixe as coisas pra última hora.";
	} else if (days == 0 && hours == 2) {
		document.getElementById("frase").innerHTML = "Agora chegou a hora de sair de casa e ir até o local destinado a prova. Saia com antecedência para evitar atrasos, acidentes e até perder a prova. E estudamos muito para isso, não é ?";
	} else if (days == 0 && hours == 1) {
		document.getElementById("frase").innerHTML = "FALTA " + hours + " HORAA !! Você deve estar chegando no seu local de prova, certo ? Chegando, certifique-se de que trouxe tudo que precisava, principalmente os documentos viu ? ";
	} else if (days == 0 && hours == 0 && minutes == 40) {
		document.getElementById("frase").innerHTML = "Agora você já pode entrar na sala, após todo esforço e estudos, desejamos a você uma ótima prova. Obrigado por nos permitir fazer parte desse momento com você !! ";
	} else {
		document.getElementById("frase").innerHTML = "BOA PROVA !";
	}

}, 1000);


