let empleados = [{
        id: 1,
        nombre: 'Leonardo'
    },
    {
        id: 2,
        nombre: 'melissa'
    },
    {
        id: 3,
        nombre: 'juan'
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id).nombre;
        (empleado) ?
        resolve(empleado): reject(`No existe un empleado con el id ${id}`);
    });
};

// let getSalario = (empleado) => {
//     return new Promise((resolve, reject) => {
//         let salarioDB = salarios.find(salario => salario.id === empleado.id);
//         if (!salarioDB) {
//             reject(`No se encontro salario para el usuario ${empleado.nombre}`);
//         } else {
//             resolve({ nombre: empleado.nombre, salario: salarioDB.salario });
//         }
//     })
// }

// getEmpleado(5).then(empleado => {
//         return getSalario(empleado);
//     })
//     .then(resp => {
//         console.log(`El salario de ${resp.nombre} es de: ${resp.salario}$`);
//     })
//     .catch(err => {
//         console.log(err);
//     });

getEmpleado(1).then(e => console.log(e));