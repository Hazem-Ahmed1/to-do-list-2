let load = document.querySelector('.load'); // for loading //
let taskName = document.querySelectorAll('.name');
let addBtn = document.querySelector('#btn-1');
let noTask = document.querySelector('.noTasks');
let tasks = document.querySelector('.allTasks');
let notValidmsg = document.querySelector(".notValidmsg");

window.onload = function () {
    load.remove();
}

let whenNoTasksShow = ()=>{
    if(tasks.childElementCount == 0){
        noTask.classList.remove("none");
    }
}


let addTask = (name ,image ,dates) => {
    let info = taskName[0].value;

    if (name.trim() == 0 || image.trim() == 0 || dates.trim() == 0) {
        notValidmsg.classList.remove("none")
    }
    if (name.trim() == 0) {
        notValidmsg.innerHTML = "<p class='m-0 text-center'>Enter a valid data</p>"
    }
    else if (image.trim() == 0) {
        notValidmsg.innerHTML = "<p class='m-0 text-center'>Enter a valid url</p>"
    }
    else if (dates.trim() == 0) {
        notValidmsg.innerHTML = "<p class='m-0 text-center'>Enter a valid date</p>"
    }

    else {
        noTask.classList.add('none');
        notValidmsg.classList.add("none");
        tasks.innerHTML += `<div class="task"style">
        <div>
        <img width='40px' class='rounded newImg' style="cursor:pointer ;" src='${image}'>
        </div>
        <i class="delete fa-solid fa-trash text-danger float-right"></i>
        <p class="m-0">${info}</p>
        <p class='m-0'>${dates}</p>
        </div>`;
        taskName.value ="";

    }


}

let inputTaskFor = ()=>{
    let allTask ={
        name:taskName[0].value,
        image:taskName[1].value,
        dates:taskName[2].value
    }
    addTask(allTask.name , allTask.image, allTask.dates)
}



addBtn.addEventListener('click', inputTaskFor);

document.addEventListener('click', function(t){
    if(t.target.classList.contains('delete')){
        t.target.parentElement.remove();
    }
    whenNoTasksShow();
})


//================ dark&light ===================//

let icon =document.querySelector(".theme i");
let main = document.getElementById("main")

 let theme = (l)=>{
    if(l.target.classList.contains("fa-moon")){
        l.target.classList.replace("fa-moon","fa-sun");
        main.href = "css/dark.css"
        
    }
    else{
        l.target.classList.replace("fa-sun","fa-moon");
        main.href = "css/main.css"
    }

}

icon.addEventListener('click',theme);

let bigImg = document.querySelector('#bigImg');
let model = document.querySelector(".popup-img");
let out = document.querySelector('.exit');

document.addEventListener('click',function(u){
    if(u.target.classList.contains('newImg')){
        model.classList.remove('none')
        model.classList.add("block")
        bigImg.src = u.target.src 
    }
})

out.onclick = function(){
    model.classList.remove('block');
    model.classList.add('none');
}



















