/* eslint-disable */
const { Usuario } = require("../db/db");

const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
const bycrypt = require("bcrypt");

const createAndLogin = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const passwordHash = await bycrypt.hash(password, 10);
    const [user, created] = await Usuario.findOrCreate({
      where: { email },
      defaults: { username, password: passwordHash },
    });
    await user.setType_User(1);

    if (created) {
      login(req, res);
    } else {
      login(req, res);
    }
  } catch (error) {
    console.log(error);
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const expiresIn = 60 * 60;
    const user = await Usuario.findOne({ where: { email } });
    let token;
    if (user) {
      const passwordCompare = await bycrypt.compare(password, user.password);
      if (passwordCompare) {
        token = jwt.sign({ user }, secret, { expiresIn: expiresIn });
      }
      console.log(token);
      res.json({ token, expiresIn });
    } else {
      res.send("Incorrect user or password");
    }
  } catch (e) {
    console.log(e);
  }
};

const verifyTokens = (req, res, next) => {
  const bearerHeaders = req.headers["authorization"];

  if (typeof bearerHeaders !== "undefined") {
    const token = bearerHeaders.split(" ")[1];
    jwt.verify(token, secret, (error, authData) => {
      if (error) {
        console.log("entro en el error");
        return res.sendStatus(403);
      } else {
        console.log("entro en el req.user");
        req.user = authData.user.id;
        next();
      }
    });
  } else {
    return res.sendStatus(403);
  }
};

const profile = async (req, res) => {
  try {
    console.log("entro a profile");
    if (req.user) {
      const user = await Usuario.findOne({
        where: { id: req.user },
        attributes: { exclude: ["id", "password"] },
      });

      res.json(user);
    }
  } catch (error) {
    console.log(error);
  }
};

const addOrUpdateAddress = async (req, res) => {
  try {
    const { address } = req.body;

    const user = await Usuario.findOne({
      where: { id: req.user },
      attributes: { exclude: ["id", "password"] },
    });

    await user.update({ address });

    res.json(user);
  } catch (e) {
    console.log(e);
    res.json({ msg: e });
  }
};

module.exports = {
  createAndLogin,
  verifyTokens,
  profile,
  addOrUpdateAddress,
  login,
};
