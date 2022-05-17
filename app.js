// Написать два класса Group и Student, чтобы их можно было использовать так:

// const feGroup = new Group();
// const firstStudent = new Student('John Doe', [10, 102, 0]);

// feGroup.addStudent(new Student('John Doe', [10, 10, 5, 10]));
// feGroup.addStudent(new Student('Alex Smith', [10, 9, 8]));
// feGroup.addStudent(new Student('Bob Johnson', [9, 10, 10, 8]));

// console.log(feGroup.students); // [{},{},{}]
// console.log(feGroup.getAverageMark()); // 20


// У группы должны быть методы:

// addStudent() - который принимает студента и сохраняет их его у себя в массиве
// getAverageMark() - который возвращает среднее из всех оценок

// и readonly "свойство" students, в котором должен быть массив всех студентов


class Student {
    constructor (name, marks) {
        this.name = name;
        this.marks = marks;
    }
}

const firstStudent = new Student('John Doe', [10, 10, 5, 10]);
const secondStudent = new Student('Alex Smith', [10, 9, 8]);
const thirdStudent = new Student('Bob Johnson', [9, 10, 10, 8]);

class Group {
    constructor () {
        this._students = [];
    }
    addStudent(student) {
        this._students.push(student);
    };
    getAverageMark() {
        return this._students.reduce( 
            (acc,e) => 
                acc += e.marks.reduce( 
                    (acc, e) => 
                        acc += e, 0)/e.marks.length,
                0
        )/this._students.length;
    };
}

const feGroup = new Group();

feGroup.addStudent(firstStudent); 
feGroup.addStudent(secondStudent);
feGroup.addStudent(thirdStudent);

console.log('feGroup._students', feGroup._students); // [{},{},{}]
console.log('feGroup.getAverageMark', feGroup.getAverageMark()); // 9
