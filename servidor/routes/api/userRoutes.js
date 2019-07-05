const Users = require("../../models/users");
const { decrypt, encrypt } = require("../../utils");

const API_PATH = "/api";

module.exports = app => {
  app.post(`${API_PATH}/login`, async (req, res) => {
    const { email, password } = req.body;

    try {
      const result = await Users.findOne({
        where: {
          email: email
        }
      });

      const user = result.dataValues;
      const decode = await decrypt(password, user.password);

      if (user.email === email && decode) {
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

    const user = await Users.findOne({
      where: {
        email: email
      }
    });

    if (!user) {
      try {
        const hash = await encrypt(password);
        const newUser = await Users.create({
          name: name,
          surname: surname,
          email: email,
          password: hash
        });

        return res.json({
          message: "Registro Exitoso"
        });
      } catch (err) {
        res.status(500).json({ message: "Algo salio mal", err });
      }
    } else {
      res.status(500).json({ message: "Usuario Existente" });
    }
  });
};
