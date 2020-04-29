let animado = document.querySelectorAll(".animado");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i = 0; i < animado.length; i++){
        let alturaAni = animado[i].offsetTop;
        if(alturaAni - 300 < scrollTop){
            animado[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', mostrarScroll);

/*window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animacion1');
    let posicion = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight/4;

    if(posicion < tamañoPantalla){
        animacion.style.animation = 'mover 1.5s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animacion2');
    let posicion = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight/4;

    if(posicion < tamañoPantalla){
        animacion.style.animation = 'mover 1.5s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animacion3');
    let posicion = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight/4;

    if(posicion < tamañoPantalla){
        animacion.style.animation = 'mover 1.5s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animacion4');
    let posicion = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight/4;

    if(posicion < tamañoPantalla){
        animacion.style.animation = 'mover 1.5s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animacion5');
    let posicion = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight/4;

    if(posicion < tamañoPantalla){
        animacion.style.animation = 'mover 1.5s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animacion6');
    let posicion = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight/4;

    if(posicion < tamañoPantalla){
        animacion.style.animation = 'mover 1.5s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animacion7');
    let posicion = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight/4;

    if(posicion < tamañoPantalla){
        animacion.style.animation = 'mover 1.5s ease-out'
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animacion8');
    let posicion = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight/4;

    if(posicion < tamañoPantalla){
        animacion.style.animation = 'mover 1.5s ease-out'
    }
})*/