//global variables
var submitBtn = document.getElementById("todoSubmit");
var list = document.getElementById("todoList");
var appStorage = window.localStorage;

window.onload = fillList;
function fillList() {
    if (appStorage.length > 0) {
        for (let i = 0; i < appStorage.length; i++) {
            let newLi = createNewLi(appStorage.getItem(i));
            let newBtn = createNewInput("submit", "delBtn", "Delete");
            newBtn.addEventListener("click", (event) => {
                event.preventDefault();
                //delete the parent node
                newBtn.parentElement.remove();
            })
            newLi.appendChild(newBtn);
            list.appendChild(newLi);
        }
    }
}

//create Element
function createNewLi(liText) {
    let newLi = document.createElement("li");
    newLi.innerText = liText;
    return newLi;
}

//reusable newInput Function
function createNewInput(inputType, inputId, inputValue) {
    let newInput = document.createElement("input");
    newInput.type = inputType;
    newInput.id = inputId;
    newInput.value = inputValue;
    return newInput;
}


function delFromLocalStorage(textCheck) {
    for (let i = 0; i < appStorage.length; i++) {
        if (appStorage.getitem(i) === textCheck) {
            console.log("matches");
        } else {
            console.log("not working");
        }
    }
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    //we get the input values
    var inputContent = document.getElementById("todoText");
    //add these to the lists now
    let newBtn = createNewInput("submit", "delBtn", "Delete");
    //add a event listener to the new button

    console.log(inputContent.value);
    //this needs to be a check, check what value the current id is or smething

    appStorage.setItem(list.childNodes.length, inputContent.value);
    let newLi = createNewLi(inputContent.value);
    newBtn.addEventListener("click", (event) => {
        event.preventDefault();
        //delete the parent node

        // for (let i = 0; i < appStorage.length; i++) {
        //     //delete item if find
        //     console.log(`the content: ${inputContent.value} and the storage item ${appStorage.getItem(i)}`)
        //     if (inputContent.value === appStorage.getItem(i)) {
        //         console.log("found item");
        //         appStorage.removeItem(i);
        //     }
        // }
        newBtn.parentElement.remove();

    })

    //append the children
    newLi.appendChild(newBtn);
    list.appendChild(newLi);

    //reset the inputContent
    inputContent.value = "";
})


