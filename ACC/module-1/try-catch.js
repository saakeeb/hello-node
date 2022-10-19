/**
 * we can use try catch block to through error to user 
 * We have to use function declaration  here, not expression
 * 
 * we throug manual error by throw
 * 
 * we keep track of error by manual error function
 */

const { errorHandling, two } = require('./import-export.js');
// const two = require('./import-export.js');
two();
async function getData (){
     try {
         let name = "undefined.find()";
         const emailError = new Error('Email already exist');
         throw emailError;
     } catch (error) {
        // console.log(error.message);
         errorHandling(error);
     }
}



getData();
console.log("Syncronous Log");