const pool = require('./conexion');

const postServiciosOS = async (req, res) => {
	try {
		const id = req.body.id_orden;
		const servicio = req.body.servicio;

		const response = await pool.query(
			`Insert into serviciosos values (${id}, '${servicio}')`);

		console.log("Se ha insertado el servicio");
	}catch(error) {
		console.log(error);
	};
};

const getServiciosOS = async (req, res) => {
	try {
		const response = await pool.query(
			`select * from serviciosos`);
		res.send(response.rows);
	}catch(error) {
		console.log(error);
	};
};

module.exports = {
	getServiciosOS,
	postServiciosOS
};