const pool = require('./conexion');

const PostServiciosOS = async (req, res) => {
	try {
		const idOrdenServicio = req.body.id_orden;

		/*const response = await pool.query(
			`Insert into serviciosos values (${idOrdenServicio}, servicioVendido, precio)`);*/
		console.log(idOrdenServicio);

		// Columnas de la tabla Servicios: orden_servicio, serviciovendido, valorservicio
		// Items: ss234xT, 09Mnb4, Qvc544, 091F, UUa21
	}catch(error) {
		console.log(error);
	}
}

module.exports = {
	PostServiciosOS
};