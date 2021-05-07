const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración'
};

function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {

    console.log(nombre, apellido, poder, edad);

}

imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [h1, h2, h3] = heroes;

console.log(h1, h2, h3);