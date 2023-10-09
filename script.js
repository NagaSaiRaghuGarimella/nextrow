const myVideoFile = document.getElementById("myVideo");
const popForm =  document.getElementById("form-popup");
 
myVideoFile.onended = function(){
    popForm.style.display = "block";
}