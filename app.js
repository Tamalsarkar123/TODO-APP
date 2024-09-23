let input1 = document.querySelector(".tsk");
let div1=document.querySelector(".to-item")
 let input2 = document.querySelector(".dt");
let btn = document.querySelector(".add");
let section = document.querySelector(".to-div");

btn.addEventListener("click", function () {
    let div1=document.createElement("div");
    div1.classList.add("to-item");
    
    let li = document.createElement('li');
    li.classList.add("tsk-name");
    li.innerText = input1.value;
    div1.appendChild(li);
    input1.value = "";
    
    let li2 = document.createElement('li');
    li2.classList.add("date");
    li2.innerText = input2.value;
    div1.appendChild(li2);
    input2.value = "";
    
    
    let btnDel = document.createElement("button");
    btnDel.innerText = "delete";
    btnDel.classList.add("bt");
    div1.appendChild(btnDel);
    
    section.append(div1);
    btnDel.addEventListener("click",()=>{
        div1.remove()
    })
})





