const pool = require('./conexion');

//Metodo get para listar las nominas:
const getNominas = async (req, res) => {
	try {
		const response = await pool.query(
		`select * from nomina join funcionario f on Nomina.funcionario = f.id_funcionario`);

		res.send(response.rows);
	}catch(error) {
		console.log(error);
	}
}

//Metodo para listar informacion adicional de la nomina
const getInfoNomina = async (req, res) => {
	const idnomina = req.params.id;
	try {
		const response = await pool.query(
			`select * from nomina join funcionario f on nomina.funcionario = f.id_funcionario`);
		res.send(response.rows);

	}catch(error) {
		console.log(error);
	}
};

//Metodo para listar los pagos de nominas
const getPagosNomina = async (req, res) => {
	try {
		const response = await pool.query(
			'select * from descuentopagonomina');
		res.send(response.rows);
	}catch(error) {
		console.log(error);
	}
}

//Metodo para agregar pagos de nomina
const postPagarNomina = async (req, res) => {
	const nopago = req.body.nopago;
	const nomina = req.body.nomina;
	const cuentacontable = req.body.cuentacontable;
	const fecharealizacion = req.body.fecharealizacion;

	try {
		const response = await pool.query(
			`insert into descuentopagonomina values ('${nopago}', '${nomina}', ${cuentacontable}, '${fecharealizacion}')`);
		res.send(response.rows);
		console.log("Se ha insertado :)");
	}catch(error) {
		console.log(error);
	}
};

//Metodo para agregar nominas
const postNomina = async (req, res) => {
	const id = req.body.idnomina;
	const funcionario = req.body.funcionario;
	const fecha = req.body.fechadepago;
	const devengado = req.body.totaldevengos;
	const deducciones = req.body.totaldeducciones;
	const pago = req.body.pagototal;
	//const juju = req.body.tupapa;

	try {
		const response = await pool.query(`
			insert into nomina values ('${id}', ${funcionario}, '${fecha}', ${devengado}, ${deducciones}, ${pago})`);
		res.send(response.rows);
		console.log(id + " " + funcionario + " " + fecha + " " + devengado + " " + deducciones + " " + pago + " ");
		console.log("si se creo :)");
	}catch(error) {
		console.log("soy el puto erro");
		console.log(error);
	};
};

//Metodo para eliminar Nominas
const deleteNomina = async (req, res) => {
	const idnomina = req.params.id;
	try {
		const response = await pool.query(`delete from nomina where idnomina = '${idnomina}'`);
		res.send(response.rows);
		console.log("Se borro la mierda esa");
	}catch(error) {
		console.log(error);
	};
};

module.exports = {
	getNominas,
	getInfoNomina,
	getPagosNomina,
	postPagarNomina,
	postNomina,
	deleteNomina
};