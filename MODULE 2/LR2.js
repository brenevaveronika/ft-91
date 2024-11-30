// пункт 1
function maxMiltiply(x1, x2, x3) {
    let result;
    if (x1 > x2) {
        if (x2 > x3) {
            result = x1 * x2
        }
        else {
            result = x1 * x3
        }
    }
    else {
        result = x2 * x3
    }
    console.log(`Результат функции для чисел ${x1}, ${x2}, ${x3}: ${result}`)
}
maxMiltiply(4, -1, 9)


// пункт 2

function introduce(name, title = "рядовой") {
    console.log(`Здравствуйте, меня зовут ${name}, и я ${title}.`);
}

introduce("Иван");
introduce("Алексей", "капитан");

// пункт 3

function func(userSet, name, age, job) {
    return userSet(name, age, job);
}
function userSet(name, age, job) {
    console.log(`Привет! Меня зовут ${name}, мне ${age} и я ${job}`)
}

func(userSet, 'Вероника', 19, 'программист')

// пункт 4

function doubleTriple(num) {
    return (num % 2 === 0)
        ? () => num ** 2
        : () => num ** 3;
}

const even = doubleTriple(4);
console.log(even());

const odd = doubleTriple(3);
console.log(odd());

// пункт 5

function factorial(n) {
    if (n < 0) {
        return undefined;
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(0));
console.log(factorial(5));
console.log(factorial(-1));