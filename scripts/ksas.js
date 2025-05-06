const fs = require("fs");

const ksas = JSON.parse(fs.readFileSync("data/master_ksa.json", "utf8"));
exports.ksas = ksas;
