function sayHeyoo (){
    window.alert("Heyoo");
}

window.onload = function(){
    window.alert('NOOOOOOO');
    document.getElementById("main-btn").addEventListener("click", sayHeyoo);
}