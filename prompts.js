const fs = require("fs")

const allFiles = fs.readdirSync(".")
const models = allFiles.filter(name => name.endsWith(".json") && name != "index.json")

for (const name of models) {
  const model = JSON.parse(fs.readFileSync(name))
  if (!model.prompt) {
    model.prompt = name.replace(/\.json$/, "").replace(/_/g, " ")
    fs.writeFileSync(name, JSON.stringify(model))
  }
}
