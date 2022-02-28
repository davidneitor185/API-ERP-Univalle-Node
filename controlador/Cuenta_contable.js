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

module.exports = {
	getCuentaContable
}