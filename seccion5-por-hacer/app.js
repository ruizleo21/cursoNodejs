require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarAchivo');
const { inquirerMenu, pausa, leerInput, listadoABorrar, confirmar, mostrarListadoCheckList } = require('./helpers/inquierer');
const Tareas = require('./models/tareas');
const main = async() => {
    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();
    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarCompletadasPendientes();
                break;
            case '4':
                tareas.listarCompletadasPendientes(false);
                break;
            case '5':
                const ids = await mostrarListadoCheckList(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                break;
            case '6':
                const id = await listadoABorrar(tareas.listadoArr);
                if (id !== '0') {
                    const ok = await confirmar('¿Está seguro?');
                    if (ok) tareas.borrarTarea(id);
                }
                break;
        }
        guardarDB(tareas.listadoArr);
        if (opt !== '0') await pausa();
    } while (opt !== '0');
};

main();