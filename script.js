var expenseModal = document.getElementById("expenseModal");
var addExpenseButton = document.getElementById("addExpenseButton");
var closeButton = document.getElementsByClassName("closeButton")[0];

addExpenseButton.onclick = function () {
    expenseModal.style.display = "block";
}

closeButton.onclick = function () {
    expenseModal.style.display = "none";
}

var submitButton = document.getElementById("submitButton")

submitButton.onclick = function (addExpense) {

    var expenseName = document.getElementById("expenseName").value;


    var expenseAmount = document.getElementById("expenseAmount").value;


    var expenseCatagory = document.getElementById("expenseCatagory").value;




    if (expenseName == "") {
        // displayModal();
        console.log("please make a submission")
    }

    if (expenseAmount == "") {
        // displayModal();
        console.log("please make a submission")
    }

    if (expenseCatagory == "") {
        // displayModal();
        console.log("please make a submission")
    }


    addExpense.preventDefault();

    var nameListEl = $('#name-list')

    var expenseNameItem = $("<li>" + expenseName + "</li>");

    expenseNameItem.appendTo(nameListEl);

    $(expenseName);



    var amountListEl = $('#amount-list')

    var expenseAmountItem = $("<li>" + expenseAmount + "</li>");

    expenseAmountItem.appendTo(amountListEl);

    $(expenseAmount);



    var catagoryListEl = $('#catagory-list')

    var expenseCatagoryItem = $("<li>" + expenseCatagory + "</li>");

    expenseCatagoryItem.appendTo(catagoryListEl);

    $(expenseCatagory);


    expenseModal.style.display = "none";
}




//localStorage.setItem("expenseName", JSON.stringify(expenseName))

//localStorage.setItem("expenseAmount", JSON.stringify(expenseAmount))

//localStorage.setItem("expenseCatagory", JSON.stringify(expenseCatagory))



//var expenseName = localStorage.getItem("expenseName")
//console.log(expenseName)

//var expenseAmount = localStorage.getItem("expenseAmount")
//console.log(expenseAmount)

//var expenseCatagory = localStorage.getItem("expenseCatagory")
//console.log(expenseCatagory)








