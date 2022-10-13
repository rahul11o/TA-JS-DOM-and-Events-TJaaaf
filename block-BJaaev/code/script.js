let root = document.querySelector("ul");
let inputText = document.querySelector("#todo");
let left = document.querySelector(".left")
let inp_footer = document.querySelector(".inp-footer")
let active = document.querySelector(".active");
let all = document.querySelector(".all");
let completed = document.querySelector(".completed");
let clr_completed = document.querySelector(".clr-completed");
left.innerText = 0;
let allTodos = [];
let isFalse =[];
let isTrue = [];




function handlekeyup(event){
    if(event.keyCode === 13 && event.target.value !==""){
         todos = {
            name : event.target.value,
            isDone : false
        };
    
       allTodos.push(todos);
        event.target.value = "";
        createUi(allTodos, root);
    }
}

function handleDelete(event){
    let id = event.target.dataset.id ;
    allTodos.splice("id", 1)
    createUi(allTodos,root)
}
function handleInput(event){
    let id = event.target.dataset.id ;
    allTodos[id].isDone = !allTodos[id].isDone
    createUi(allTodos, root)
}


   function handleActive(event){
    localStorage.setItem("todos", JSON.stringify(allTodos))
    createUi(allTodos, root);
    allTodos = isFalse;
    createUi(allTodos, root);
    allTodos = JSON.parse(localStorage.getItem("todos"))
}
function handlecompleted(event){
    createUi(allTodos, root);
    allTodos = isTrue;
   createUi(allTodos,root)
    allTodos = JSON.parse(localStorage.getItem("todos"))
}
function handleAll(event){
    createUi(allTodos, root)
}
function handleClear(event){
   allTodos = isFalse;
   createUi(allTodos, root)
}


function createUi(data, rootElem){
    rootElem.innerHTML ="";
    isFalse = [];
    isTrue =[];
    if (data.length !== 0){
        inp_footer.style.display = "flex"
    }else{
        inp_footer.style.display = "none";
    }
    data.forEach((elem, index) =>{
     let li =  document.createElement("li");
     let mainInput =  document.createElement("input")
     mainInput.type = "checkbox"
     mainInput.classList.add("circle")
     mainInput.checked = elem.isDone;
     mainInput.setAttribute("data-id", index)
     mainInput.addEventListener("input", handleInput)
     let p = document.createElement("p");
     p.innerText = elem.name;
     tog = document.createElement("div");
     tog.append(mainInput, p)
     tog.classList.add("tog")
     let span = document.createElement("span");
     span.setAttribute("data-id", index)
     span.innerText = "✖️";
     span.addEventListener("click", handleDelete)
     li.append(tog, span)
     rootElem.append(li);

    if(elem.isDone == false){
        isFalse.push(elem)
    }
    else{
        isTrue.push(elem)
    }
    left.innerText = isFalse.length;
    })
}

inputText.addEventListener("keyup", handlekeyup);
active.addEventListener("click", handleActive);
all.addEventListener("click", handleAll);
completed.addEventListener("click", handlecompleted);
clr_completed.addEventListener("click", handleClear);