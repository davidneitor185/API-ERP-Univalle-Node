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
    /*try {
        //const {empleado, estado, comentarios, costo, cliente} = req.body;
        const empleadoAsignado = req.body.empleado;
        const estado = req.body.estado;
        const comentarios = req.body.comentarios;
        const costoTotal = req.body.costo;
        const cliente = req.body.cliente;


        const response = await pool.query(
            `INSERT INTO ordenservicio(empleadoasignado, estado, comentarios, costototal, cliente)
                VALUES (${empleadoAsignado}, ${estado}, ${comentarios}, ${costoTotal}, ${cliente})`
        );
        /*const response = await pool.query(
            `INSERT INTO ordenservicio (empleadoasignado, estado, comentarios, costototal, cliente)
            VALUES ($1, $2, $3, $4, $5)`, [empleadoAsignado, estado, comentarios, costoTotal, cliente]
        );*/

        //res.send(response.rows);
    /*}catch(error) {
        //res.send("Error");
        console.log(error);
    }*/
    console.log(req.body);
    res.send("se ha creado una orden xdxdxd");
};

module.exports = {
    getOrdenesServicio,
    PostOrdenesServicio
};