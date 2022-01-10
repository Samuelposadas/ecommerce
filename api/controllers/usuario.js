const { Usuario } = require("../db/db");

const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
const bycrypt = require("bcrypt");

const createAndLogin = async (req, res) => {
  const { email, username, password } = req.body;
  const passwordHash = await bycrypt.hash(password, 10);
  const [user, created] = await Usuario.findOrCreate({
    where: { email },
    defaults: { username, password: passwordHash },
  });

  if (created) {
    login(req, res);
  } else {
    login(req, res);
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await Usuario.findOne({ where: { email } });
  let token;
  if (user) {
    const passwordCompare = await bycrypt.compare(password, user.password);
    if (passwordCompare) {
      token = jwt.sign({ user }, secret, { expiresIn: 60 * 60 });
    }
    res.json({ token });
  } else {
    res.send("usuario o contraseña incorrecta");
  }
};

const verifyTokens = (req, res, next) => {
  const bearerHeaders = req.headers["authorization"];

  if (typeof bearerHeaders !== "undefined") {
    const token = bearerHeaders.split(" ")[1];
    req.token = token;
    next();
  } else {
    res.sendStatus(403);
  }
};

const verifyUser = (req, res) => {
  jwt.verify(req.token, secret, (error, authData) => {
    if (error) {
      res.sendStatus(403);
    } else {
      req.user = authData.user;
    }
  });
};

const profile = async (req, res) => {
  verifyUser(req, res);

  const user = req.user;

  res.json(user.username);
};

const addOrUpdateAddress = async (req, res) => {
  try {
    verifyUser(req, res);
    const { address } = req.body;

    const user = await Usuario.findOne({ where: { email: req.user.email } });

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
