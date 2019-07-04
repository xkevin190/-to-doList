const Users = require("../../models/users");
const API_PATH = "/api";

module.exports = app => {
  app.post(`${API_PATH}/login`, async (req, res) => {
    const { email, password } = req.body;

    try {
      const result = await Users.findAll({
        where: {
          email: email
        }
      });
      const user = result[0].dataValues;
      if (user.email === email && user.password === password) {
        return res.json({
          user
        });
      } else {
        return res.status(500).json({
          message: "email o contraseña incorrecta"
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: "email o contraseña incorrecta"
      });
    }
  });

  app.post(`${API_PATH}/singUp`, async (req, res) => {
    const { name, surname, email, password } = req.body;

    console.log(req.body)
    try {
      const newUser = await Users.create({
        name: name,
        surname: surname,
        email: email,
        password: password
      });

      return res.json({
        message: "Registro Exitoso",
        data: { newUser }
      });
    } catch (err) {
      res.status(500).json({ message: "Algo salio mal" });
    }
  });
};