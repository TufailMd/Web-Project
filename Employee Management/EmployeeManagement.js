// import { question } from 'readline-sync';
// var name = prompt("Enter your name: ");
// console.log("Welcome", name);

var readlineSync = require('readline-sync');
var userName = readlineSync.question("May i know your Company Name: ");
// console.log("Welcome", userName,"\n");

console.log("");

var emp = [];

// add emp
function newEmployee() {
    // id, name, role, salary, age
    var i = Math.floor(Math.random()*10000) +1 ;
    console.log(`Id: ${i}`);
    var n = readlineSync.question("Enter Employee Name: ");
    var r = readlineSync.question("Enter Employee Role: ");
    var a = readlineSync.question("Enter Employee Age: ");
    var s = readlineSync.question("Enter Employee Salary: ");
    console.log("\n-----------------------\n");
    console.log("New employee added successfully");
    

    // console.log(`Id: ${i}`);
    // console.log(`Name: ${n}`);
    // console.log(`Role: ${r}`);
    // console.log(`Age: ${a}`);
    // console.log(`Salary: ${s}`);
    
    // var newEmp = {
    //     id:i,
    //     name: n,
    //     role:r,
    //     age:a,
    //     salary:s
    // } ;
    var ep =  {
        id:i,
        name: n,
        role:r,
        age:a,
        salary:s
    };
    emp.push(ep);
}

function viewEmp() {
    if (emp.length == 0) {
        console.log("No employees to display.\n");
        return;
    }else{
        for (let i = 0; i < emp.length; i++) {
            var employee = emp[i];
        
                console.log(`---------------- Employee ${i+ 1}: ----------------`);
                console.log(`Id: ${employee.id}`);
                console.log(`Name: ${employee.name}`);
                console.log(`Role: ${employee.role}`);
                console.log(`Age: ${employee.age}`);
                console.log(`Salary: ${employee.salary}`);
                console.log(`--------------------------------------------------\n`);
        }
    }
}

function search() {
    var idx = 0;
    if (emp.length == 0) {
        console.log("No employees to search.\n");
        return;
    }else{
        var serId = readlineSync.question("Enter employee id: ")
        for (let i = 0; i < emp.length; i++) {
            var employee = emp[i];
        
                if (employee.id == parseInt(serId)) {
                console.log(`---------------- Employee Deatils: ----------------`);
                console.log(`Id: ${employee.id}`);
                console.log(`Name: ${employee.name}`);
                console.log(`Role: ${employee.role}`);
                console.log(`Age: ${employee.age}`);
                console.log(`Salary: ${employee.salary}`);
                console.log(`--------------------------------------------------\n`);
                idx = i;
                return idx; 
                }
        }
    }
}

function updateEmp() {
    var idx = search();
    
        var employee = emp[idx];
        
            console.log(`---------------- Employee new Deatils: ----------------`);
            console.log(`Id: ${employee.id}`);
            console.log(`Name: ${employee.name}`);
            var r = readlineSync.question("Enter Employee Role: ");
            var a = readlineSync.question("Enter Employee Age: ");
            var s = readlineSync.question("Enter Employee Salary: ");
            employee.role = r;
            employee.age = a;
            employee.salary = s;

            console.log("Employee details updated successfully");

            var c = readlineSync.question("Do you want to check the Employee updeted details?(y/n) ");

            if(c == 'y' || c =='Y'){
                console.log(`---------------- Employee Old Deatils: ----------------`);
            console.log(`Id: ${employee.id}`);
            console.log(`Name: ${employee.name}`);
            console.log(`Role: ${employee.role}`);
            console.log(`Age: ${employee.age}`);
            console.log(`Salary: ${employee.salary}`);
            console.log(`--------------------------------------------------\n`);
            }
            
}

function deleteEmp() {
    var idx = search();
    emp.splice(idx,1);
    console.log("Employee details deleted successfully");
}


// console.log("--------------",userName,"--------------\n");
// var num = readlineSync.question("--------------Choose an option--------------\n\n1. Add a new employee\n2.View all employees\n3.Search for an employee by ID\n4.Update employee details\n5.Delete an employee\n5.Exit the program\n------------------------------------\n\nEnter your choice: ");

/*
Add a new employee.
View all employees.
Search for an employee by ID.
Update employee details.
Delete an employee.
Exit the program.
*/

console.log("--------------",userName,"--------------\n");

var isLoop = true;
while (isLoop) {
        var num = readlineSync.question("--------------Choose an option--------------\n\n1. Add a new employee\n2.View all employees\n3.Search for an employee by ID\n4.Update employee details\n5.Delete an employee\n6.Exit the program\n------------------------------------\n\nEnter your choice: ");

    switch (num) {
        case '1':
            console.log("---------Add a new employee-------");
            newEmployee();
            break;
        
        case '2':
            console.log("---------All employees details-------");
            viewEmp();
            break;
   
        case '3':
                console.log("---------Search employees details-------");
                search();
                break;    
                
        case '4':
            console.log("---------Update employees details-------");
            updateEmp();
            break;
        case '5':
                console.log("---------Update employees details-------");
                deleteEmp();
                break;              
        case '6':
            console.log("---------your are successfully exit the program-------");
            isLoop = false;
            break;
        default: 
            console.log("you entered wrong choise!\n");
    }
    
}

/*

*/