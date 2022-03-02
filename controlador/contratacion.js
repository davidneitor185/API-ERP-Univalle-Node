/* reate table contratacion(
    idPersona varchar primary key ,
    Nombre_persona varchar not null ,
    Telefono varchar not null ,
    Email varchar not null ,
    Titulo_profesional varchar not null ,
    Años_experiencia varchar not null ,
    Departamento varchar not null
);*/


const pool = require("./conexion");

//Metodo para listar las producciones de contrataciones de la db
const getContrataciones = async (req, res) => {
  try {
    const response = await pool.query(
      "select * from contratacion"
    );
    res.send(response.rows);
  } catch (e) {
    console.log(e);
  }
};

//Metodo para agregar nuevas contrataciones:
const addContrataciones = async (req, res) => {
	const id = req.body.idpersona;
	const nombre = req.body.nombre_persona;
	const tel = req.body.telefono;
	const email = req.body.email;
	const titulo = req.body.titulo_profesional;
	const years = req.body.años_experiencia;
	const depto = req.body.departamento;

  try {
    const response = await pool.query(
      `insert into contratacion values ('${id}', '${nombre}', '${tel}', '${email}', '${titulo}', '${years}', '${depto}')`
    );
    res.send(response.rows);
  } catch (e) {
    console.log(e);
  }
};

//Metodo para eliminar las personas de la entrevista
const deleteContratacion = async (req, res) => {
	const id = req.params.idpersona;
  try {
    const response = await pool.query(
      `delete from contratacion where idpersona = '${id}'`
    );
    res.send(response.rows);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
	getContrataciones,
	addContrataciones,
	deleteContratacion
}