const pool = require("./conexion");

const getRecibos = async (req, res) =>{
 try {
     const response = await pool.query(
         `SELECT * FROM recibo_pago ORDEr BY cuentaxp ASC`
     );
     res.send(response.rows);
 } catch (e) {
    console.log(e);
 }
};

const postRecibo = async (req, res) =>{
    const {
        idrecibo,
        cuentaxp,
        valorpagado,
        cuentacontable
    } = req.body;
    try {
        const response = await pool.query(
            `INSERT INTO recibo_pago(idrecibo, cuentaxp, valorpagado, cuentacontable)
            VALUES (${idrecibo}, ${cuentaxp}, ${valorpagado}, ${cuentacontable})`
        );
        res.send(response.rows);
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    getRecibos,
    postRecibo
};