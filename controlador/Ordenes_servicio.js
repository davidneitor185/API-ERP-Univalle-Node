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
        const empleadoAsignado = req.params.empleado;
        const estado = req.params.estado;
        const comentarios = req.params.comentarios;
        const costoTotal = req.params.costo;
        const cliente = req.params.cliente;

        const response = await pool.query(
            `insert into ordenservicio(empleadoasignado, estado, comentarios, costototal, cliente)
                values (${empleadoAsignado}, ${estado}, ${comentarios}, ${costoTotal}, ${cliente})`
        );

        res.send("Exito");
    }catch(error) {
        res.send("Error");
    }
};

module.exports = {
    getOrdenesServicio,
    PostOrdenesServicio
};