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
        const empleadoAsignado = req.params.empleado;
        const estado = req.params.estado;
        const comentarios = req.params.comentarios;
        const costoTotal = req.params.costo;
        const cliente = req.params.cliente;

        console.log("su papa");

        /*const response = await pool.query(
            `INSERT INTO ordenservicio(empleadoasignado, estado, comentarios, costototal, cliente)
                VALUES (3, 'En tramite', 'xdxdxd', 1234433, 2)`
        );
        /*const response = await pool.query(
            `INSERT INTO ordenservicio (empleadoasignado, estado, comentarios, costototal, cliente)
            VALUES ($1, $2, $3, $4, $5)`, [empleadoAsignado, estado, comentarios, costoTotal, cliente]
        );*/

        //res.send(response.rows);
    }catch(error) {
        //res.send("Error");
        console.log(error);
    }
};

module.exports = {
    getOrdenesServicio,
    PostOrdenesServicio
};