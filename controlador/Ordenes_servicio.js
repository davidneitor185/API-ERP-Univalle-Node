const pool = require('./conexion')


//Metodo GET para listar las ordens de servicio
const getOrdenesServicio = async (req, res) => {
    try {
        const response = await pool.query(
            "select * from OrdenServicio"
        );
        res.send(response.rows);
    }catch(e) {
        console.log(e);
    }
};

//Metodo PUSH para agregar ordenes de Servicio
const PostOrdenesServicio = async (req, res) => {
    try {
        //const {empleado, estado, comentarios, costo, cliente} = req.body;
        const empleadoAsignado = req.body.empleado;
        const estado = req.body.estado;
        const comentarios = req.body.comentarios;
        const costoTotal = req.body.costo;
        const cliente = req.body.cliente;

        // Posibles estados: 'Asignada', 'En tramite', 'Cancelada', 'Cerrada'
        const response = await pool.query(
            `INSERT INTO ordenservicio(empleadoasignado, estado, comentarios, costototal, cliente)
                VALUES (${empleadoAsignado}, '${estado}', '${comentarios}', ${costoTotal}, ${cliente})`
        );
        /*const response = await pool.query(
            `INSERT INTO ordenservicio (empleadoasignado, estado, comentarios, costototal, cliente)
            VALUES ($1, $2, $3, $4, $5)`, [empleadoAsignado, estado, comentarios, costoTotal, cliente]
        );*/

        //Envia una string a la funcion que la invoca
        res.send("Se ha creado la Orden con exito");
    }catch(error) { 
        res.send("Error al crear la Orden de Servicio");
        console.log(error);
    }
    //Imprime en la cmd del servidor:
    console.log(req.body);
};

const DeleteOrdenesServicio = async (req, res) => {
    try {
        const idOrdenServicio = req.params.id;

        const response = await pool.query(
            `DELETE FROM ordenservicio WHERE idordenservicio = ${idOrdenServicio}`);
        res.send("Se ha borrado con exito");
    }catch(error) {
        console.log(error);
        res.send("No se ha borrado");
    }
}

module.exports = {
    getOrdenesServicio,
    PostOrdenesServicio,
    DeleteOrdenesServicio
};