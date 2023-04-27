var jwt = require("jsonwebtoken");
const isAuth = async (req, res, next) => {
  var privateKey = await process.env.privet_key;
  const token = await req.headers.authorization;
  jwt.verify(token.split(" ")[1], privateKey, function (err, decoded) {
    if (err) {
      return res
        .status(500)
        .send({ type: "error", message: "unauthorised access ", error: err.JsonWebTokenError });
    } else {
      return next();
    }
  });
};
module.exports = { isAuth };