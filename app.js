var name = prompt('¿Cual es tu nombre y apellido?');
//obtener primera Iniciales
var firstInitial = name.slice (0,1);
//buscar posicion de la segunda inicial
var secondInitialposition = name.indexOf(' ')+1;
//obtener segunda Inicial
var secondInitial = name.slice (secondInitialposition,secondInitialposition+1);
//mostrar resultado en la web
document.write('Tus iniciales son '+ (firstInitial.toUpperCase()+ secondInitial.toUpperCase()));
