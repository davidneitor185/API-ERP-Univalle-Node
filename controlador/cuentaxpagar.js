const pool = require("./conexion");

const getCuentasxpagar= async (req, res) => {
    try {
      const response = await pool.query(
        `SELECT * FROM cuentaxpagar ORDER BY idcuentaxp ASC`
      );
      res.send(response.rows);
    } catch (e) {
      console.log(e);
    }
  };

const postCntxpagar = async (req, res) =>{

  const {ordencompra, proveedor, cobroto, tiempopago, estado} = req.body;
  try {
    const response = await pool.query(
    	`INSERT INTO cuentaxpagar(ordencompra, proveedor, cobroto, tiempopago, estado)
      VALUES(${ordencompra}, ${proveedor}, ${cobroto}, '${tiempopago}', '${estado}')
      RETURNING idcuentaxp`
  );
  res.send(response.rows);
  } catch (e) {
    console.log(e);
  }
};  

const getFullCtnxp = async (req, res) =>{
  const id = req.params.id;
  try {
    const response = await pool.query(
      `select cuentaxpagar.ordencompra, cuentaxpagar.cobroto, cuentaxpagar.tiempopago,
      detalle_cobros.cantidad, detalle_cobros.precio, detalle_cobros.item,
      item.nombreitem, proveedor.proveedor
      from cuentaxpagar
	    inner join proveedor on proveedor.id_proveedor = cuentaxpagar.proveedor
      inner join detalle_cobros on detalle_cobros.cuentaxpagar = cuentaxpagar.idcuentaxp
      inner join item on item.iditem = detalle_cobros.item
	    where cuentaxpagar.idcuentaxp = $1`, [id]
    );
    res.send(response.rows);
  } catch (e) {
    console.log(e);
  }
};

const putCtnxp = async (req, res) =>{
  const id = req.params.id;
  try {
    const response = await pool.query(
    `update cuentaxpagar set estado = 'Anulado' where idcuentaxp = ${id}`
    );
    res.send(response.rows);
  } catch (e) {
    console.log(e);
  }
};

const putTotal = async (req, res) =>{
  const {
    idcuentaxp,
    cobroto
  } = req.body;
  try {
    const response = await pool.query(
      `update cuentaxpagar set cobroto = ${cobroto} where idcuentaxp = ${idcuentaxp}`
      );
    res.send(response.rows);
  } catch (e) {
    console.log(e);
  }
};

 const getCtxpR = async (req, res) =>{
  try {
    const response = await pool.query(
      `SELECT * FROM cuentaxpagar left join recibo_pago
       on cuentaxpagar.idcuentaxp = recibo_pago.cuentaxp
        ORDER BY idcuentaxp ASC`
    );
    res.send(response.rows);
  } catch (e) {
    console.log(e);
  }
 };

  module.exports = {
    getCuentasxpagar,
    postCntxpagar,
    getFullCtnxp, 
    putCtnxp,
    putTotal,
    getCtxpR
  };