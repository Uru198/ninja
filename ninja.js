
class Ninja {
    constructor(nombre, salud, velocidad, fuerza) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad || 3;
        this.fuerza = fuerza || 3;
    }
    sayName() {
        console.log(this.nombre);
    }
    showStats(){
        console.log(this.nombre,this.salud,this.velocidad,this.fuerza);
    }
    drinkSake(){
        console.log(this.salud += 10);
    }
   
}

const  ninja1 = new Ninja("Horus", 10, 7,15);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

module.exports = Ninja;





