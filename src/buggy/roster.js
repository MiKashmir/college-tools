const fs = require("node:fs");
const path = require("node:path"); // Додано імпорт модуля path

// Повертає список групи з файлу data/roster.txt (одне ім’я на рядок).
function readRoster() {
  // Переносимо шлях всередину функції та використовуємо його у readFileSync
  const filePath = path.join(__dirname, '../../data/roster.txt'); 
  return fs.readFileSync(filePath, "utf8").split(/\r?\n/).filter(Boolean);
}
module.exports = { readRoster };