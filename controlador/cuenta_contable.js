const pool = require("./conexion");


const getCuentaCont= async (req, res) => {
    try {
      const response = await pool.query(
        `SELECT * FROM cuenta_contable`
      );
      res.send(response.rows);
    } catch (e) {
      console.log(e);
    }
  };

const postCuentaCont= async(req, res) => {
    try {
      var entidadbancaria = req.body.entidadbancaria;
      var numerocuenta = parseInt(req.body.numerocuenta);
      var fechavencimiento = req.body.fechavencimiento;
      var montototal = parseInt(req.body.montototal);
      var tipo_cuenta = req.body.tipo_cuenta;
  
        const response = await pool.query(
          `INSERT INTO public.cuenta_contable(
            entidadbancaria, numerocuenta, fechavencimiento, montototal, tipo_cuenta)
            VALUES ('${entidadbancaria}', ${numerocuenta}, '${fechavencimiento}', ${montototal},'${tipo_cuenta}')`
        );
        res.send(response.rows);
        
    }catch(e) {
      console.log(e);
    }
  };

  module.exports = {
    getCuentaCont,
    postCuentaCont
};