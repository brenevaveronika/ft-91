// Напишите функцию, принимающую на вход массив вещественных
// чисел и возвращающую сумму элементов, расположенных после
// последнего элемента равного нулю.

function getSum(arr) {
    const lastZeroIndex = arr.lastIndexOf(0);

    if (lastZeroIndex === -1) {
        return 0;
    }

    let sum = 0;
    for (let i = lastZeroIndex + 1; i < arr.length; i++) {
        sum += Math.abs(arr[i]);
    }
    return sum;
}

const numbers = [1.5, 0, 2.3, 3.1, 0, 4.5, -5.6];
const result = getSum(numbers);
console.log(result);


// Напишите функцию, принимающую на вход вещественную
// прямоугольную матрицу и возвращающую сумму элементов в тех
// строках, которые содержат хотя бы один отрицательный элемент.

function getMatSum(matrix) {
    sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        str = matrix[i]
        strFil = str.filter(number => number < 0)
        console.log(strFil)
        if (strFil.length > 0) {
            sum += str.reduce((accumulator, cur) => accumulator + cur, 0)
        }
    }
    return sum
}
const matrix = [
    [1, 2, -1],
    [0, 1, 3],
    [-2, 3, 4]
]
const result2 = getMatSum(matrix);
console.log(result2);