var hoje = new Date();

var options = { weekday: 'long', month: 'long', day: 'numeric' };

var dia = hoje.toLocaleDateString('pt-BR',options);

document.querySelector("h1").innerText = dia;