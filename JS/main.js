//Declaracion de la clase

class Racer {

    constructor(marca, velocidad){
        this.marca = marca,
        this.velocidad = velocidad
    }

}

let c1 = new Racer("Red_Racer", 100);
let c2 = new Racer("Blondie_Racer",150);
let c3 = new Racer("Long_Tail_Racer",90);
let c4 = new Racer("Angry_Fighter",88);

let coche1 = "";
let coche2 = "";

let traductorCoches = {
    "Red_racer" : c1,
    "Blondie_racer" : c2,
    "Long_Tail_Racer" : c3,
    "Angry_Fighter" : c4
}

const cambiarPantalla = (pantallaDestino) => {

    //Primer paso, generamos array con todas las fases

    let arrayDeFases = ["1","2","3","4"];

    //Filtramos el array que contiene las fases, le quitamos el valor que corresponde
    //a la pantalla de destino
    arrayDeFases = arrayDeFases.filter(iterador => !pantallaDestino.includes(iterador));

    //Asignamos el valor de estilo block al display de aquella section que queremos
    //que sea visible
    document.getElementById(pantallaDestino).style.display = "block";

    for (let cadaPosicion of arrayDeFases) {
        
        document.getElementById(cadaPosicion).style.display = "none";

    }
    
}

const seleccionarCoche = (cocheElegido) => {

    console.log(traductorCoches[cocheElegido]);
    if(coche1 != ""){
        coche2 = traductorCoches[cocheElegido];
        
        setTimeout(()=>{

            //funcion que rellena los datos de la siguiente pantalla
            
            showRacers();

            cambiarPantalla("3");
        },500)
        
        
    } else {

        coche1 = traductorCoches[cocheElegido];

    }
    
}

const showRacers = () => {

    //efectuar los cambios de datos a través de innerHTML
    document.getElementById("pantalla3").innerHTML = `<p>${coche1.marca}</p>
    <p>${coche2.marca}</p>`;
};