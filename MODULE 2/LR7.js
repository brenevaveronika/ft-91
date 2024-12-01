class Mark {
    constructor(subject, mark) {
        this.subject = subject;
        this.mark = mark; 
    }
}
class Student {
    constructor(lastName, firstName) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.marks = [];
    }

    setMarks(marksArray) {
        marksArray.forEach(({ subject, mark }) => {
            this.addMark(subject, mark);
        });
    }

    averageMark() {
        if (this.marks.length === 0) {
            return 0;
        }
        const total = this.marks.reduce((sum, item) => sum + item.mark, 0);
        return total / this.marks.length;
    }

    addMark(subject, mark) {
        const newMark = new Mark(subject, mark);
        this.marks.push(newMark);
    }

    printInfo() {
        console.log(`Фамилия: ${this.lastName}`);
        console.log(`Имя: ${this.firstName}`);
        console.log("Оценки:");
        this.marks.forEach((item) => {
            console.log(`  ${item.subject}: ${item.mark}`);
        });
        console.log(`Средняя оценка: ${this.averageMark().toFixed(2)}`);
    }
}

function sortStudentsByAverageMark(students) {
    const n = students.length;
    let gap = Math.floor(n / 2);

    // Сортировка Шелла
    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            const temp = students[i];
            let j;
            for (j = i; j >= gap && students[j - gap].averageMark() > temp.averageMark(); j -= gap) {
                students[j] = students[j - gap];
            }
            students[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }

    return students;
}
console.log("ПЕРВОЕ ЗАДАНИЕ");
console.log("\n");

const students = [
    new Student('Иванов', 'Иван'),
    new Student('Петров', 'Петр'),
    new Student('Сидоров', 'Сидор'),
];

students[0].setMarks([{ subject: 'Математика', mark: 5 }, { subject: 'Физика', mark: 4 }]);
students[1].setMarks([{ subject: 'Математика', mark: 3 }, { subject: 'Физика', mark: 4 }]);
students[2].setMarks([{ subject: 'Математика', mark: 4 }, { subject: 'Физика', mark: 5 }]);

console.log("До сортировки:");
students.forEach(student => student.printInfo());

sortStudentsByAverageMark(students);

console.log("\nПосле сортировки:");
students.forEach(student => student.printInfo());

console.log("\n");
console.log("ВТОРОЕ ЗАДАНИЕ");
console.log("\n");

function sortStudents(students) {
    students.sort((a, b) => {
        const fullNameA = `${a.lastName} ${a.firstName}`;
        const fullNameB = `${b.lastName} ${b.firstName}`;
        return fullNameA.localeCompare(fullNameB);
    });
}

function binarySearchStudent(students, lastName, firstName) {
    let left = 0;
    let right = students.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const student = students[mid];

        if (student.lastName === lastName && student.firstName === firstName) {
            return student;
        } else if (student.lastName < lastName || (student.lastName === lastName && student.firstName < firstName)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return null;
}

const students2 = [
    new Student('Бренева', 'Вероника'),
    new Student('Советкина', 'Полина'),
    new Student('Усанова', 'Алиса'),
    new Student('Попроцкий', 'Глеб'),
];

students2[0].setMarks([{ subject: 'Математика', mark: 5 }, { subject: 'Физика', mark: 4 }]);
students2[1].setMarks([{ subject: 'Математика', mark: 3 }, { subject: 'Физика', mark: 4 }]);
students2[2].setMarks([{ subject: 'Математика', mark: 4 }, { subject: 'Физика', mark: 5 }]);
students2[3].setMarks([{ subject: 'Математика', mark: 4 }, { subject: 'Физика', mark: 3 }]);

sortStudents(students2);

console.log("Отсортированные студенты:");
students2.forEach(student => student.printInfo());

const lastNameToSearch = 'Бренева';
const firstNameToSearch = 'Вероника';
const foundStudent = binarySearchStudent(students2, lastNameToSearch, firstNameToSearch);

if (foundStudent) {
    console.log(`\nСтудент найден:`);
    foundStudent.printInfo();
} else {
    console.log(`\nСтудент с фамилией "${lastNameToSearch}" и именем "${firstNameToSearch}" не найден.`);
}