var changer = document.getElementById("changer");
var box_color = document.getElementById("box_color");

function myFunction(){
    color = changer.value;
    box_color.style.backgroundColor = color;
}

changer.addEventListener("change",function myFunction(){
    color = changer.value;
    box_color.style.backgroundColor = color;
})
