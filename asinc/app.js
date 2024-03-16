function getUsers(callback){
    setTimeout(() => {
        const users = [
            { name: 'Rojelio', years: 22},
            { name: 'Luis', years: 30}
        ]

        callback(users);
    }, 2000); 
}

function getUsersWithPromise(name){
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            let error = null; 
            const saludo = "Hola" + name + ", ¿Cómo estas????"; 
            if (name === "Rojelio"){
                error = new Error("Esta mal la persona")
            }
             resolve[saludo, error]; 
        }, 5000);

    }); 
    }


function getInfo(name, callback){
    setTimeout(() => {
        let error = null;
        const saludo = 'Hola' + name + ", ¿Cómo estas????"; 

        if(name === 'Rojelio'){
            error = new Error("Esta mal la persona")
        }

        callback(saludo)
    }, 5000); 
}

getUsers((users) =>{
    for (let i = 0; i < users.length; i++){
        getInfo(users[i].name, (saludo, error) =>{
            if (error !== null){
                console.log("Existe un error", error);
            }
            else{
                console.log(saludo);               
            }
        });
    }
})

function sum(a, b){
    return a+b; 
}

function algo(callback){
    const sum = sum(5, 6); 
}

