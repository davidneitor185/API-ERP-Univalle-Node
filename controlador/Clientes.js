const pool = require('./conexion');

//Metodo GET para conseguir los ID de los clientes
const getClienteIDs = async (req, res) => {
    try {
        const response = await pool.query(
            "select idcliente as id from cliente"
        );

        res.send(response.rows);
    }catch(error) {
        console.log(error);
    }
}

module.exports = {
    getClienteIDs
};