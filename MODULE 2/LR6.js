function findCommonElements(arr1, arr2) {
    const set1 = new Set(arr1);
    const commonElements = arr2.filter(element => set1.has(element));
    return commonElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const result = findCommonElements(array1, array2);
console.log(`Общие элементы: ${result}`);

function countEntrances(arr) {
    const entrances = new Map();
    for (const element of arr) {
        if (entrances.has(element)) {
            entrances.set(element, entrances.get(element) + 1);
        } else {
            entrances.set(element, 1);
        }
    }
    return entrances;
}

const array = [1, 2, 2, 3, 4, 4, 4, 5];
const result2 = countEntrances(array);
for (const [key, value] of result2) {
    console.log(`${key}: ${value}`);
}

class Student {
    constructor(name, group) {
        this.name = name;
        this.group = group;
    }
}

function countStudentsInLargestGroup(students) {
    const groups = students.map(student => student.group);
    const groupCount = countEntrances(groups);
    let maxCount = 0;
    for (const count of groupCount.values()) {
        if (count > maxCount) {
            maxCount = count;
        }
    }
    return maxCount;
}

const students = [
    new Student('Алиса', '6203'),
    new Student('Полина', '7110'),
    new Student('Вероника', '6201'),
    new Student('Саша', '6203'),
    new Student('Катя', '6201'),
    new Student('Глеб', '6201'),
];

const largestGroupCount = countStudentsInLargestGroup(students);
console.log(`Число студентов в самой большой группе: ${largestGroupCount}`);