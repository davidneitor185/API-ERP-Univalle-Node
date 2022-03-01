const pool = require("./conexion");

const postItem = async (req, res) => {
  
    const {iditem, nombreitem} = req.body;
    try {
        const response = await pool.query(
            `INSERT INTO item(iditem, nombreitem)
            VALUES('${iditem}', '${nombreitem}')`
        );
        res.send(response.rows);
    } catch (e) {
        console.log(e);
    }
};

const getItems = async (req, res) => {
    try {
        const response = await pool.query(
            `SELECT * FROM item`
        );
        res.send(response.rows);
    } catch (e) {
        console.log(e);
    }
};


module.exports = {
    postItem,
    getItems
};