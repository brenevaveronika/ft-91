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

    getMarksBySubject(subject) {
        return this.marks.filter(mark => mark.subject === subject);
    }

    removeMarksBySubject(subject) {
        this.marks = this.marks.filter(mark => mark.subject !== subject);
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

const student = new Student("Иванов", "Иван");
const marksArray = [
    { subject: "Математика", mark: 5 },
    { subject: "Физика", mark: 4 },
    { subject: "Химия", mark: 5 },
    { subject: "История", mark: 3 }
];
student.setMarks(marksArray);
student.printInfo();

const mathMarks = student.getMarksBySubject("Математика");
console.log("Оценки по Математике:");
mathMarks.forEach(mark => {
    console.log(`  ${mark.subject}: ${mark.mark}`);
});

student.removeMarksBySubject("Математика");
console.log("\nПосле удаления оценок по Математике:");
student.printInfo();