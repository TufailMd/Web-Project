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

let detail = ["name","id","qty", "price","status","date"];

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

str.addEventListener('click', () =>{
    page.classList.add("remove");
    newPage.classList.remove('remove');
    const cp = prompt("Enter Company Name:");
    cpName.innerText = cp;
});



// add item

function addItem() {
    addItemsDiv.classList.remove("remove");
    let idx = 0;
    if (inventoryItems.length != 0) {
        let idx = inventoryItems.length+1;
    }

    itemAdded.addEventListener('click', () =>{

        let names = document.querySelector('.d1 input');
        let ids = document.querySelector('.d2 input');
        let qtys= document.querySelector('.d3 input');
        let prices = document.querySelector('.d4 input');
        let status = document.querySelector('.d5 input');
        let dates = document.querySelector('.d6 input');
        
        inventoryItems.push({ name: names.value, id: ids.value, qty: qtys.value, price: prices.value, status: status.value, date: dates.value });
        
    })
    itemSubmited.addEventListener('click', () =>{
        addItemsDiv.classList.add("remove");
        mainBtnDiv.classList.remove('remove');
    })
}

function choose() {
    let butt = this;
    
    mainBtnDiv.classList.add('remove');

    if (butt.innerText == "Add new items") {
        addItem();
    }else  if (butt.innerText == "Update item details") {
        updateItem();
    }else if (butt.innerText == "Search items by name") {
        searchByName();
    }else  if (butt.innerText == "Search items by ID") {
        searchById();
    }else if (butt.innerText == "View all items") {
        viewItem();
    }else if (butt.innerText == "Delete items") {
        deleteItem();
    }   
}




for (bt of btns) {
    bt.addEventListener('click',choose)   
}




