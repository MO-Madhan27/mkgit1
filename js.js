var popover=document.querySelector(".popoverlay")
var popbox=document.querySelector(".popbox")
var popbtn=document.getElementById("addpop")

popbtn.addEventListener("click",function(){
    popover.style.display="block"
    popbox.style.display="block"

})

var cancelbtn=document.getElementById("cancelnote")

cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popover.style.display="none"
    popbox.style.display="none"

})

var container=document.querySelector(".container")
var addnote=document.getElementById("addnote")
var title1=document.getElementById("title")
var title2=document.getElementById("title2")
var para=document.getElementById("para")

addnote.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book_cont")
    div.innerHTML=`
        <h2>${title1.value}</h2>
        <h2>${title2.value}</h2>
        <p>${para.value}</p>
        <button onclick="delnote(event)">Delete</button>
    <button onclick="markCompleted(event)">Completed</button>

        `
    container.append(div)

    title1.value = "";
    title2.value = "";
    para.value = "";

    popover.style.display="none"
    popbox.style.display="none"
})

function delnote(event){
    event.target.parentElement.remove()
}


function markCompleted(event) {
    const note = event.target.parentElement; // this is the .book_cont div
    note.style.backgroundColor = "green";
    note.style.color = "white";
}