const fs   = require("fs");
const Ajv  = require("ajv");
const ajv  = new Ajv({ allErrors: true });

const schema = JSON.parse(fs.readFileSync("schemas/ksa.schema.json", "utf8"));
const validate = ajv.compile(schema);

const ksas = JSON.parse(fs.readFileSync("data/master_ksa.json", "utf8"));

let errors = 0;

ksas.forEach(k => {
  const ok = validate(k);
  if (!ok) {
    errors++;
    console.log(`❌  ${k.ksa_id || "(missing id)"}\n`, validate.errors);
  }
});

if (errors) {
  console.error(`\n${errors} invalid KSA record(s)`);
  process.exit(1);
} else {
  console.log("✅  All KSAs conform to schema");
}
