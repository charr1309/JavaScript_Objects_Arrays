console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
// const numbers = [2,22,12,17,18,39,129];

// function arraySum(arr){
//     let sum = 0;
//     arr.forEach((num) => {
//         sum += num;
//     });
    
//     return sum;
// }
// let sum = arraySum(numbers);
// console.log(sum);
//Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const Book = {
    title : "The Da Vinci Code",
    author: "Dan Brown",
    pages: 300,
    haveRead: 1,
    info : function() {
        console.log(`${this.title} is written by ${this.author} and has ${this.pages} pages`);
    }
};
console.log(Book.info());