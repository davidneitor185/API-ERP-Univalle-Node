const pool = require("./conexion");


const getInvent = async (req, res) => {
  try {
    const response = await pool.query(
      `SELECT * FROM inventario JOIN item on inventario.item =item.iditem`
    );
    res.send(response.rows);
  } catch (e) {
    console.log(e);
  }
};

const postEntrada = async (req, res) => {
  let detalles = req.body;
  let idEntrada = "";
  let inventNew = "";
  let crear = false;
  let rowsito = "";
  try {
    const response = await pool.query(
      `INSERT INTO public.entrada(
         "id_orden_compra")
          VALUES (${detalles[0].ordenC})
          RETURNING id_entrada`
    );
    idEntrada = response.rows[0];

    const inventario = await pool.query(
      `SELECT * FROM inventario`
    );

    console.log(inventario.rows);


    detalles.map(async (det) => {


      const response = await pool.query(
        `INSERT INTO public.detalle_entrada(
        identrada, cantidad, estado, iditem)
          VALUES (${idEntrada.id_entrada}, ${parseInt(det.cantidad)}, '${det.estado}', '${det.itemId}')`
      );

      inventario.rows.map(async (row) => {
        
        if (det.itemId == row.item) {
          crear = true;
          rowsito = row; 
         }})
        console.log(crear);
        if (crear) {
          inventNew = await pool.query(
            `UPDATE inventario
          SET cantidad = ${parseInt(rowsito.cantidad) + parseInt(det.cantidad)}
          WHERE idinventario = ${rowsito.idinventario}`)
        } else {
          inventNew = await pool.query(
            `INSERT INTO inventario (
            item, cantidad)
              VALUES ('${det.itemId}', ${parseInt(det.cantidad)})`
          )
        }
        crear=false;            


    })
  } catch (e) {
    console.log(e);
  }


};



module.exports = {
  getInvent,
  postEntrada
};