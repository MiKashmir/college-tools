// Сума цифр невід’ємного цілого числа: 2026 → 10.
function sumDigits(n) {
  if (n === 0) return 0;
  return (n % 10) + sumDigits(Math.floor(n / 10));
}
module.exports = { sumDigits };
