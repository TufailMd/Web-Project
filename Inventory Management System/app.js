// Browser-compatible version using prompt
// const userAns = prompt("Enter Company Name:");

// if (userAns && userAns.toLocaleLowerCase() === 'gfg') {
//     console.log("You are a part of the very huge learning community.");
// } else {
//     console.log("Have a look at GeeksforGeeks; they solve many of your technical doubts.");
// }






let str = document.querySelector(".cta-btn");
let page = document.querySelector('.page');
let newPage = document.querySelector('.container-md');
let cpName = document.querySelector('.cp');
let mainBtnDiv = document.querySelector('.main-div');
let itemSubmited = document.querySelector(`.itemSubmit`);
let itemAdded = document.querySelector(`.itemAdd`);
let addItemsDiv = document.querySelector(`#addItems`);
// bytns
let btns = document.querySelectorAll('.btns');

let btAdd = document.querySelector('.btn-primary');
let btUpdate = document.querySelector('.btn-info');
let btSrcName = document.querySelector('.btn-warning');
let btSrcId = document.querySelector('.btn-success');
let btView = document.querySelector('.btn-secondary');
let btDel = document.querySelector('.btn-danger');

let form = document.querySelector(`#form1`);



let tblBody = document.querySelector('tbody');


// let detail = ["name","id","qty", "price","status","date"];
// let detail = ["name","id","qty", "price"];

var inventoryItems = [
    // {
    //     name:"ds",
    //     id:"23",
    //     qty:"32",
    //     price:"32",
    //     status:"32",
    //     date:"12"
    // }
];

// str.addEventListener('click', (event) =>{
//     event.stopPropagation();
//     page.classList.add("remove");
//     newPage.classList.remove('remove');
//     const cp = prompt("Enter Company Name:");
//     cpName.innerText = cp;
// });

str.addEventListener('click', handleCTAButtonClick);

function handleCTAButtonClick(event) {
  event.stopPropagation();
  page.classList.add("remove");
  newPage.classList.remove('remove');
  const cp = prompt("Enter Company Name:");
  cpName.innerText = cp;
}


async function makeTable(name, id, qty, price) {
    let tbls = document.querySelector("table");
    // console.dir(tbls);
    
    if (tbls.classList.contains("remove")) {
        tbls.classList.remove("remove");
    }

    let tblRow = document.createElement('tr');

    if (inventoryItems.length % 2 == 0) {
        tblRow.classList.add('table-primary');
    }else{
        tblRow.classList.add('table-secondary');
    }
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');

    td1.innerText = id;
    td2.innerText = name;
    td3.innerText = qty;
    td4.innerText = price;
    
    console.log(td1);
    console.log(td2);
    console.log(td3);
    console.log(td4);
    

    tblRow.append(td1);
    tblRow.append(td2);
    tblRow.append(td3);
    tblRow.append(td4);

    tblBody.append(tblRow);

}


// add item

async function addItem() {
    addItemsDiv.classList.remove("remove");
    // let idx = 0;
    // if (inventoryItems.length != 0) {
    //     let idx = inventoryItems.length+1;
    // }

    itemAdded.addEventListener('click', async (event) => {
        event.stopPropagation();
    
        let names = document.querySelector('.d1 input');
        let ids = document.querySelector('.d2 input');
        let qtys = document.querySelector('.d3 input');
        let prices = document.querySelector('.d4 input');
        
        // Check if all fields are filled
        if (names.value === "" && ids.value === "" && qtys.value === "" && prices.value === "") {
            return;
        }else if (names.value === "" || ids.value === "" || qtys.value === "" || prices.value === "") {
            console.log("inside isFilled: if");
            alert("Please fill all details!!");
            return; // Exit early to prevent further execution
        }
    
        console.log("inside itemAdded 'if'");
        inventoryItems.push({ name: names.value, id: ids.value, qty: qtys.value, price: prices.value });
        await makeTable(names.value, ids.value, qtys.value, prices.value);
    
        // Clear inputs only when successfully added
        // console.log("inside isFilled: else");
        names.value = "";
        ids.value = "";
        qtys.value = "";
        prices.value = "";
    });    

    itemSubmited.addEventListener('click', async (event) => {
        event.stopPropagation();
    
        let names = document.querySelector('.d1 input');
        let ids = document.querySelector('.d2 input');
        let qtys = document.querySelector('.d3 input');
        let prices = document.querySelector('.d4 input');
        let isFilled = false;
    
        if (names.value === "" && ids.value === "" && qtys.value === "" && prices.value === "") {
            addItemsDiv.classList.add("remove");
            mainBtnDiv.classList.remove('remove');
            isFilled = true; // Mark as filled to bypass the error alert
        } else if (names.value !== "" && ids.value !== "" && qtys.value !== "" && prices.value !== "") {
            inventoryItems.push({ name: names.value, id: ids.value, qty: qtys.value, price: prices.value });
            isFilled = true;
            await makeTable(names.value, ids.value, qtys.value, prices.value);
            addItemsDiv.classList.add("remove");
            mainBtnDiv.classList.remove('remove');
            names.value = "";
            ids.value = ""; 
            qtys.value = ""; 
            prices.value = "";
        }
    
        if (!isFilled) { // Only trigger alert when the condition is genuinely unmet
            console.log("inside isFilled: if");
            alert("Please fill all details!!");
        }
    });    
}

async function viewItem() {
    console.log("inside view");
    addItemsDiv.classList.remove("remove");

    form.classList.add("remove");

    let tbls = document.querySelector("table");
    // console.dir(tbls);
    
    let td = document.querySelector("table td");
    
    if (td != null) {
        tbls.classList.remove("remove");
    }else{
        let nrf = document.querySelector(`.noRecordFound`);
        nrf.classList.remove('remove');
    }

    

}

async  function choose() {
    let butt = this;
    console.log(butt);
    
    mainBtnDiv.classList.add('remove');

    if (butt.innerText == "Add new items") {
        await addItem();
    }else  if (butt.innerText == "Update item details") {
        updateItem();
    }else if (butt.innerText == "Search items by name") {
        searchByName();
    }else  if (butt.innerText == "Search items by ID") {
        searchById();
    }else if (butt.innerText == "View all items") {
        await viewItem();
    }else if (butt.innerText == "Delete items") {
        deleteItem();
    }   
}

// for (bt of btns) {
//     bt.addEventListener('click',choose)   
// }
btAdd.addEventListener('click',choose);
btView.addEventListener('click',choose);

