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

//Q3
//3a & 3b addTask function
let array = [];
const addTask = (task) => {
    array.push(task);
    console.log(`Task "${task}" has been added.`);
    return array.length;
};

console.log(addTask("Check Email")); // Task added and length returned
console.log(addTask("Do Homework"));
console.log(addTask("Go Shopping"));

//3c List all tasks
const listAllTask = () => {
    console.log("Listing all tasks:");
    array.forEach(task => console.log(task));
};
listAllTask();

//3d Deleting a Task
const deleteTask = (task) => {
    const index = array.indexOf(task);
    if (index > -1) {
        array.splice(index, 1);// note The splice() method in JavaScript is used to modify the contents of an array by removing, replacing, or adding new elements.
        console.log(`Task "${task}" has been removed.`);
    } else {
        console.log(`Task "${task}" not found.`);
    }
    return array.length;
};
// Removes task and returns the new length
console.log(deleteTask("Do Homework")); 
//Show remaining tasks
listAllTasks(); //error here
