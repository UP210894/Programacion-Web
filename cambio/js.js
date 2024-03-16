const btn = document.getElementById('btn'); 

const title = document.getElementById('title'); 

const input = document.getElementById('textInput'); 

const container = document.getElementById('container'); 

window.addEventListener("load", () => {
    // alert("La ventana terminó de cargar!!!"); 
})

btn.addEventListener('click', function(){
    //document.getElementById('titulo').innerText = "Cambio de Título!"; 
    //title.innerText = "Cambio el titulo"; 
    //console.log("Me dieron Click!!!");
    //const inputValue = input.value;  
    //container.innerHTML =  inputValue;   
}); 

btn.addEventListener('dblclick', ()=>{
    //console.log("Di doble Click!!!"); 
    fetch('/info.json')
        .then((responce)=>{
            console.log(responce);
            return responce.text();  
        })
        .then(()=>{
            console.log(text)
        })
})