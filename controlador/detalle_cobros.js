const pool = require("./conexion");

const postDetaCobro = async (req, res) => {

    const {cuentaxpagar, cantidad, precio, item} = req.body;
    try {
        const response = await pool.query(
            `INSERT INTO detalle_cobros(cuentaxpagar, cantidad, precio, item)
            VALUES(${cuentaxpagar}, ${cantidad}, ${precio}, '${item}')`
        );
        res.send(response.rows);
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    postDetaCobro
};