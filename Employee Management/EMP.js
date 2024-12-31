var readlineSync = require('readline-sync');
var userName = readlineSync.question("May I know your Company Name: ");
console.log("");

var emp = [];

// Add a new employee
function newEmployee() {
    var i = Math.floor(Math.random() * 10000) + 1;
    console.log(`Id: ${i}`);
    var n = readlineSync.question("Enter Employee Name: ");
    var r = readlineSync.question("Enter Employee Role: ");
    var a = readlineSync.question("Enter Employee Age: ");
    var s = readlineSync.question("Enter Employee Salary: ");
    emp.push({ id: i, name: n, role: r, age: a, salary: s });
    console.log("New employee added successfully.\n");
}

// View all employees
function viewEmp() {
    if (emp.length === 0) {
        console.log("No employees to display.\n");
        return;
    }
    emp.forEach((employee, index) => {
        console.log(`---------------- Employee ${index + 1}: ----------------`);
        console.log(`Id: ${employee.id}`);
        console.log(`Name: ${employee.name}`);
        console.log(`Role: ${employee.role}`);
        console.log(`Age: ${employee.age}`);
        console.log(`Salary: ${employee.salary}`);
        console.log(`--------------------------------------------------\n`);
    });
}

// Search for an employee by ID
function search() {
    if (emp.length === 0) {
        console.log("No employees to search.\n");
        return -1;
    }
    var serId = readlineSync.question("Enter employee id: ");
    for (let i = 0; i < emp.length; i++) {
        if (emp[i].id == parseInt(serId)) {
            console.log(`---------------- Employee Details: ----------------`);
            console.log(`Id: ${emp[i].id}`);
            console.log(`Name: ${emp[i].name}`);
            console.log(`Role: ${emp[i].role}`);
            console.log(`Age: ${emp[i].age}`);
            console.log(`Salary: ${emp[i].salary}`);
            console.log(`--------------------------------------------------\n`);
            return i;
        }
    }
    console.log("Employee not found.\n");
    return -1;
}

// Update an employee
function updateEmp() {
    var idx = search();
    if (idx === -1) return;
    var r = readlineSync.question("Enter Employee Role: ");
    var a = readlineSync.question("Enter Employee Age: ");
    var s = readlineSync.question("Enter Employee Salary: ");
    emp[idx].role = r;
    emp[idx].age = a;
    emp[idx].salary = s;
    console.log("Employee details updated successfully.\n");
}

// Delete an employee
function deleteEmp() {
    var idx = search();
    if (idx === -1) return;
    emp.splice(idx, 1);
    console.log("Employee details deleted successfully.\n");
}

// Menu loop
console.log("--------------", userName, "--------------\n");
var isLoop = true;
while (isLoop) {
    var num = readlineSync.question(
        "--------------Choose an option--------------\n\n1. Add a new employee\n2. View all employees\n3. Search for an employee by ID\n4. Update employee details\n5. Delete an employee\n6. Exit the program\n------------------------------------\n\nEnter your choice: "
    );
    switch (num) {
        case '1':
            newEmployee();
            break;
        case '2':
            viewEmp();
            break;
        case '3':
            search();
            break;
        case '4':
            updateEmp();
            break;
        case '5':
            deleteEmp();
            break;
        case '6':
            console.log("Exiting the program. Goodbye!\n");
            isLoop = false;
            break;
        default:
            console.log("Invalid choice! Please try again.\n");
    }
}