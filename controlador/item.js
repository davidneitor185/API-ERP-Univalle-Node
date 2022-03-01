const pool = require("./conexion");

//Metodo para traer los items de la db
const getItems = async (req, res) => {
	try {
		const response = await pool.query(
			`select * from item`);
		res.send(response.rows);
	}catch(error) {
		console.log(error);
	};
};

module.exports = {
	getItems
}