// Запуск прикладів для перевірки пояснень асистента (завдання 2–3).
// Змінюйте вхідні дані й спостерігайте за результатом.
const { parseSchedule } = require("../src/legacy/schedule");
const { memo, groupBy } = require("../src/legacy/memo");

const text = `
# розклад групи 456-Д
Вт | 10:10 | Розробка клієнт-серверних застосувань
Пн | 08:30 | Методи та засоби AI | ауд. 214
Пн | 10:10 | WEB-технології
`;
console.log(parseSchedule(text));

let calls = 0;
const slowSquare = memo((n) => { calls++; return n * n; });
slowSquare(4); slowSquare(4); slowSquare(5);
console.log("викликів функції:", calls);

console.log(groupBy(["кіт", "пес", "їжак", "сом"], (w) => w.length));
