//Q2a Arrow function returning String
const getName = () => "Data Representation and Querying";
console.log(getName());

//2b
const returnArgument = (argument) => argument;
console.log(returnArgument("Data Representation and Querying"));

//2c Return sum of 2 numbers using arrow function
const getSum = (num1, num2) => num1 * num2;
console.log(getSum(5,5));//Sum should return 25

//2d .map function to multiply each number under 70 by 2
const ages = [25, 31, 42, 77];
const multiplyUnder70 = ages.map(age =>
{   if(age < 70)
    {
        return age * 2;
    }
    else
    {
        return age;
    }
    });
console.log(multiplyUnder70);