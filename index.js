let inputbox = document.querySelector("#input-box");
let list = document.querySelector("#list");

inputbox.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        addItem(this.value)
        this.value = ""
    }
})

let addItem = (inputbox) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputbox}<i></i>`;

    listItem.addEventListener("click", function(){
        this.classList.toggle("done")
    })

    listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove();
    })

    list.appendChild(listItem);
}