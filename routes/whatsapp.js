var express = require("express");
var router = express.Router();

/* GET Prospecto por Tipo y Numero de Documento */
router.get("/validate-webhook", async function (req, res, next) {
  console.log("req", req.body, req.params);
  res.status(200);
  res.send("procemetrix-2022");
});

module.exports = router;
