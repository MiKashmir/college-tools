// Повертає сторінку списку. Нумерація сторінок починається з 1.
function paginate(items, page, size) {
  const startIndex = (page - 1) * size;
  return items.slice(startIndex, startIndex + size);
}
module.exports = { paginate };
