const prompt = require("readline-sync");

const matrixProduct = require('./utils.js').matrixProduct;
const sumOfMatrices = require('./utils.js').sumOfMatrices;
const sumOfEachRow = require('./utils.js').sumOfEachRow;
const wordCount = require('./utils.js').wordCount;
const trimTheString = require('./utils.js').trimTheString;

let mat1 = [ [1, 2, 3], [-2, 3, -4], [4, -5, 6] ];
let mat2 = [ [-1, 3, 9], [3, -4, 7], [3, 8, 1] ];
let str = "   Hello everyone, my name is Vahe.    ";

let a = matrixProduct(mat1, mat2);
let b = sumOfMatrices(mat1, mat2);
let c = sumOfEachRow(mat1);
let d = prompt.question("The sentence: ");
let e = wordCount(d);
let f = trimTheString(str);