function isPerfectNumber(x) {
    if (x <= 1) return false;
    let sum = 0;
    for (let i = 1; i <= x / 2; i++) {
        if (x % i === 0) {
            sum += i;
        }
    }
    return sum === x;
}
const input = prompt("Введите целое число: ");
const x = parseInt(input, 10);
if (isNaN(x)) {
    alert("Ошибка: введено не число. Пожалуйста, введите целое число.");
} else {
    if (isPerfectNumber(x)) {
        alert(`${x} является совершенным числом.`);
    } else {
        alert(`${x} не является совершенным числом.`);
    }
}