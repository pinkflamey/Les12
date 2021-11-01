
function changeBGImage(){
    var element1 = document.body;
    element1.classList.toggle("bg-dark");
    var element2 = document.getElementById("title");
    element2.classList.toggle("title-dark");
    var element3 = document.getElementById("content");
    element3.classList.toggle("content-dark");
}