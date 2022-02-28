const pool = require("./conexion");

//Metodo get para las cuentas contables
const getCuentaContable = async (req, res) => {
	try {
		const response = await pool.query(`select * from cuenta_contable`);
		res.send(response.rows);
	}catch(error) {
		console.log(error);
	}
};

const getCContables = async (req, res) => {
    try {
      const response = await pool.query(
        `SELECT * FROM cuenta_contable
        ORDER BY idcuentactle ASC `
        );
      res.send(response.rows);
    } catch (e) {
      console.log(e);
    }
  };


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

const putCContables = async (req, res) =>{
    const {
        idcuentactle,
        montototal
    } = req.body;
    try {
       
        const response = await pool.query(
        `UPDATE cuenta_contable SET montototal = ${montototal}
        WHERE idcuentactle = ${idcuentactle}`
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

module.exports={
    getCContables,
    putCContables,
	getCuentaContable,
  getCuentaCont,
  postCuentaCont
};



	

