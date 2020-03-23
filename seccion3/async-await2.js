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

let getEmpleado = async(id) => {
    empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el id ${id}`);
    } else {
        return empleadoDB;
    };
};

let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`No se encontro salario para el usuario ${empleado.nombre}`);
    } else {
        return { nombre: empleado.nombre, salario: salarioDB.salario };
    };
};

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `El salario de ${resp.nombre} es de: ${resp.salario}$`;
};

getInformacion(1)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));