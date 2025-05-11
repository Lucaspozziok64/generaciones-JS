
class Persona {
    constructor(nombre, edad, sexo, dni, peso, altura, anioNacimiento) {
        this.nombre = nombre
        this.edad = edad
        this.sexo = sexo
        this.dni = dni
        this.peso = peso
        this.altura = altura
        this.anioNacimiento = anioNacimiento
    }

    mostrarGeneracion() {
        if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
            return ("Perteneces a la generación Silent Generation. Tu rasgo característico es la Austeridad😐");
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
            return ("Perteneces a la generación Baby Boom. Tu rasgo característico es la Ambición🤑");
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
            return ("Perteneces a la generación X. Tu rasgo característico es la Obsesion por el exito😎");
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            return ("Perteneces a la generación Y (millennials). Tu rasgo característico es la Frustración😖");
        } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            return ("Perteneces a la generación Z. Tu rasgo característico es la Irreverencia😜");
        }
        else {
            return ("No perteneces a ninguna generación");
        }
    }

    esMayorEdad() {
        if(this.edad >= 18) {
            console.log(`${this.nombre} Eres mayor de edad`);
        } else {
            console.log(`${this.nombre} Eres menor de edad`);
        }
    }

    mostrarDatos() {
        console.log(`<p>Tu nombre es: ${this.nombre}`);
        console.log(`<p>Tu edad es: ${this.edad} </p>`);
        console.log(`<p>Tu dni es: ${this.dni}</p>`);
        console.log(`<p>Tu sexo es: ${this.sexo}</p>`);
        console.log(`<p>Tu peso es: ${this.peso}</p>`);
        console.log(`<p>Tu altura es: ${this.altura}</p>`);
        console.log(`<p>Tu año de nacimiento es: ${this.anioNacimiento}`);
        console.log(`<p>Tu generación es: ${this.mostrarGeneracion()}</p>`);
    }
}

const persona1 = new Persona('Lucas', '23', 'Masculino', '43566719', '85', '176', '2001');
persona1.mostrarDatos();