// Task 1
// console.log('Task 1')
// const studentArr = [{
//    name: 'Сергей',
//    surname: 'Войлов',
//    ratingPoint: 1000,
//    schoolPoint: 1000,
//    course: 2,
// },
// {
//    name: 'Татьяна',
//    surname: 'Коваленко',
//    ratingPoint: 880,
//    schoolPoint: 700,
//    course: 1,
// },
// {
//    name: 'Анна',
//    surname: 'Кугир',
//    ratingPoint: 1430,
//    schoolPoint: 1200,
//    course: 3,
// },
// {
//    name: 'Станислав',
//    surname: 'Щелоков',
//    ratingPoint: 1130,
//    schoolPoint: 1060,
//    course: 2,
// },
// {
//    name: 'Денис',
//    surname: 'Хрущ',
//    ratingPoint: 1000,
//    schoolPoint: 990,
//    course: 4,
// },
// {
//    name: 'Татьяна',
//    surname: 'Капустник',
//    ratingPoint: 650,
//    schoolPoint: 500,
//    course: 3,
// },
// {
//    name: 'Максим',
//    surname: 'Меженский',
//    ratingPoint: 990,
//    schoolPoint: 1100,
//    course: 1,
// },
// {
//    name: 'Денис',
//    surname: 'Марченко',
//    ratingPoint: 570,
//    schoolPoint: 1300,
//    course: 4,
// },
// {
//    name: 'Антон',
//    surname: 'Завадский',
//    ratingPoint: 1090,
//    schoolPoint: 1010,
//    course: 3
// },
// {
//    name: 'Игорь',
//    surname: 'Куштым',
//    ratingPoint: 870,
//    schoolPoint: 790,
//    course: 1,
// },
// {
//    name: 'Инна',
//    surname: 'Скакунова',
//    ratingPoint: 1560,
//    schoolPoint: 200,
//    course: 2,
// },
// ];

// class Student {
//    static #id = 1;   
//    constructor(enrollee) {           
//       const { name, surname, ratingPoint, schoolPoint, course } = enrollee;

//       this.name = name;
//       this.surname = surname;
//       this.ratingPoint = ratingPoint;
//       this.schoolPoint = schoolPoint;
//       this.course = course;
//       this.id = Student.#id;
//       this.isSelfPayment = null;

//       Student.#id++;
//    }
// };


// const students = [...studentArr].sort((a, b) => a.ratingPoint < b.ratingPoint  ? 1 : -1).map((enrollee) => new Student(enrollee));
// students.map((student, index) => {
//    index <= 4 ? student.isSelfPayment = true : student.isSelfPayment = false;
// })
// console.log(students) 
// console.log(studentArr)


// task2
// class CustomString {
//    constructor(name, First, word){
//       this.name = name;
//       this.First = First;
//       this.word = word;
//    }
//    reverse(){
//       const reverseSplit = this.name.split('')
//       return reverseSplit.reverse().join('');
//    }
//    Firsts(){
//       let upperCaseWord = this.First[0].toUpperCase() + this.First.slice(1);
//       return upperCaseWord;
//    }
//    Words(){
//       let allWordsUpperCase = this.word
//       return allWordsUpperCase.split(' ').map(someWord => someWord.charAt(0).toUpperCase() + someWord.slice(1)).join(' '); 
//    }
// }

// let myString = new CustomString('qwerty', 'qwerty', 'qwerty qwerty qwerty');
// console.log(myString.reverse());
// console.log(myString.ucFirst());
// console.log(myString.ucWords());





// task3


// class Validator{

// constructor(stringtest){

// this.stringtest = stringtest
// }

//   checkIsEmail(){
//     let search = this.stringtest
//     if(search.includes('@')){
//     return true
//     }
//     else{
//       return false
//     }
//   }

//   checkIsDomain(){
//     let search1 = this.stringtest
//     if(search1.includes('google.com')){
//     return true
//     }
//     else{
//       return false
//     }
//  }
  
//  checkIsPhone(){
//   let search2 = this.stringtest
//   if(search2.substr(1, 2).includes('38')){
//     return true
//     }
//     else{
//       return false
//     }

//  }

// }

// const test = new Validator('vasya.pupkin@gmail.com');
// console.log(test.checkIsEmail());

// const test1 = new Validator('vasyagmail.com');
// console.log(test1.checkIsEmail());

// const test2 = new Validator('vasya.pupkin@google.com');
// console.log(test2.checkIsDomain());

// const test3 = new Validator('vasya.pupkin@gmail.com');
// console.log(test3.checkIsDomain());

// const test4 = new Validator('+49 066-949-18-79');
// console.log(test4.checkIsPhone());

// const test5 = new Validator('+38-066-949-18-79');
// console.log(test5.checkIsPhone());










































































