let inputText = document.querySelector("input");
let root = document.querySelector("ul");


allMovie =[];

function handleKeyup(event){
    console.dir(event);
    if(event.keyCode === 13 && event.target.value !== ""){
       let movie = {
        name: event.target.value,
        isWatched: false,
       };
       allMovie.push(movie);
       event.target.value = "";

       createUi();
    };
};
function handleclick(event){
let id = event.target.dataset.id;
allMovie.splice(id, 1);
createUi();
}
function handleinput(event){
    let id =  event.target.dataset.id;
    allMovie[id].isWatched =! allMovie[id].isWatched;
    createUi();
}
function createUi(){
root.innerHTML = "";
allMovie.forEach((elem , index) =>  {
let li = document.createElement("li");
let input = document.createElement("input");
input.type = "checkbox";
input.checked = elem.isWatched;
input.setAttribute("data-id", index)
input.addEventListener("input", handleinput)
let p = document.createElement("p");
p.innerText = elem.name;
let span = document.createElement("span");
span.setAttribute("data-id", index)
span.innerText = "❌";
span.addEventListener("click", handleclick)
li.append(input, p ,span);
root.prepend(li);
})
};

inputText.addEventListener("keyup", handleKeyup);
