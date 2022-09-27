const Ninja = require("./ninja");

class Sensei  extends Ninja{
    constructor(nombre, salud, velocidad, fuerza) {
        super(nombre, salud, velocidad, fuerza)
        this.nombre = nombre;
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;

    }
    speakWisdom(){
        this.drinkSake();
        let mensaje = this.salud;
        console.log(mensaje+" lo ques sea en este momento")

    }
    showStats(){
        console.log(this.nombre,this.salud,this.velocidad,this.fuerza)
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

