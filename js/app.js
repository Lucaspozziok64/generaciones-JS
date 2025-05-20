
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
            return ("<p>Perteneces a la generación Silent Generation. Tu rasgo característico es la Austeridad😐</p>");
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
        return `
            <li class="list-group-item"><strong>Nombre:</strong> ${this.nombre}</li>
            <li class="list-group-item"><strong>Edad:</strong> ${this.edad}</li>
            <li class="list-group-item"><strong>DNI:</strong> ${this.dni}</li>
            <li class="list-group-item"><strong>Sexo:</strong> ${this.sexo}</li>
            <li class="list-group-item"><strong>Peso:</strong> ${this.peso} kg</li>
            <li class="list-group-item"><strong>Altura:</strong> ${this.altura} cm</li>
            <li class="list-group-item"><strong>Año de nacimiento:</strong> ${this.anioNacimiento}</li>
        `;
    }
}

let persona;

const crearPersona = (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const sexo = document.getElementById('sexo').value;
    const dni = document.getElementById('dni').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const anioNacimiento = document.getElementById('anioNacimiento').value;

    const spanNombre = document.getElementById('nombreResultado');
    spanNombre.textContent = nombre;

    persona = new Persona(nombre, edad, sexo, dni, peso, altura, anioNacimiento);

    document.getElementById('contenedorOpciones').style.display = 'block';
    formulario.reset();
}

const mostrarDatos = () => {
    document.getElementById('resultado').innerHTML = `<li class="list-group-item">${persona.mostrarDatos()}</li>`;
}

const mostrarGeneracion = () => {
    document.getElementById('resultado').innerHTML = `<li class="list-group-item">${persona.mostrarGeneracion()}</li>`;
}

const formulario = document.getElementById('miFormulario')
formulario.addEventListener('submit', crearPersona);
const capturaDatos = document.getElementById('miFormulario')
mostrarDatos.addEventListener('click', mostrarDatos);