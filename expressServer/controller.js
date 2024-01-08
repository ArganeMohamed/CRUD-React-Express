const db = require("./db");

exports.getUsers = async (req, res) => {
    await db.query("SELECT * FROM users", (err, resault) => {
        if (err) throw err;
        console.log(resault);
        res.send(resault);
    })
}

exports.addUser = async (req, res) => {
    const nom = req.body.nom;
    const email = req.body.email;
    const telephone = req.body.telephone;
    await db.query("INSERT INTO users (nom, email, telephone) VALUES (?,?,?)",[nom, email, telephone], (err, resault) => {
        if (err) throw err;
        console.log(" USER INSERTED CORRECTLY (: ");
        res.send(nom);
    })
}

exports.search = (req, res) => {
    const search = req.body.search;
    const sql = " SELECT * FROM users WHERE nom LIKE ? ";
    db.query(sql, `%${search}%`, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
} 

exports.deleteUser = (req, res) => {
    const code = req.body.id;
    const sql = "DELETE FROM users WHERE code = ?";
    db.query(sql, code, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
}

exports.singleUser = (req, res) => {
    const code = req.body.code;
    const sql = "SELECT * FROM users WHERE code = ?";
    console.log(code)
    db.query(sql, code, (err,data) => {
        if (err) throw err;
        res.send(data);
        console.log(data);
    })
}

exports.updateUser = (req, res) => {
    const code = req.body.code;
    const nom = req.body.nom;
    const email = req.body.email;
    const telephone = req.body.telephone;
    
    const sql = "UPDATE users SET nom = ? , email = ? , telephone = ? WHERE code = ?";
    db.query(sql, [nom, email, telephone, code], (err, resault) => {
        if (err) throw err;
        res.send(resault);
    })
}

