const Tarea = require("./tarea");

/**
 * _listado:
 *      {'uuid-123712-123123-2:{id:12, desc:}}
 */
class Tareas {
    _listado = {};

    constructor() {
        this._listado = {};
    }

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            listado.push(this._listado[key]);
        });
        return listado;
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    listadoCompleto() {
        console.log();
        this.listadoArr.forEach((tarea, i) => {
            const idx = `${i +1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;
            const info = `${idx}. ${desc} :: ${estado}`;
            console.log(info);
        });
    }

    listarCompletadasPendientes(completadas = true) {
        console.log();
        let idx = 1;
        this.listadoArr.forEach(tarea => {
            const { desc, completadoEn } = tarea;
            if ((completadoEn !== null) === completadas) {
                const estado = (completadoEn) ? completadoEn.green : 'Pendiente'.red;
                const info = `${(idx + '.').green} ${desc} :: ${estado}`;
                console.log(info);
                idx++;
            }
        });
    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    toggleCompletadas(ids = []) {
        this.listadoArr.forEach(tarea => {
            if (!ids.includes(tarea.id))
                this._listado[tarea.id].completadoEn = null;
            else if (!tarea.completadoEn)
                this._listado[tarea.id].completadoEn = new Date().toISOString();
        });
    }
}


module.exports = Tareas;