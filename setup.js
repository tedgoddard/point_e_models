const fs = require("fs")

const allFiles = fs.readdirSync(".")
const models = allFiles.filter(name => name.endsWith(".json") && name != "index.json")
fs.writeFileSync("index.json", JSON.stringify(models))
