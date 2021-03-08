const constructores = new Object({
    constructor_Humano(){
        this.name;
        this.maquina;
        return this;
    }
});
const data = {
    Humanos:{
        name : "Andres",
        maquina : "Siri"
    }
}
const constructor_Humano = constructores.constructor_Humano.bind(data.Humanos);
const Humano = new Object();
Humano.__proto__.constructor = constructor_Humano();
const Metodos = Object.assign(Humano);
Metodos.saludar = ()=>{
    return `Hola ${Humano.__proto__.constructor.name} como estas te saluda ${Humano.__proto__.constructor.maquina}`;
};
Object.freeze(Humano);
console.log(Metodos.saludar());
