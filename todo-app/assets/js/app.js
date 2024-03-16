// Elementos HTML
const userSelect = document.getElementById('select-users');
const userContainer = document.getElementById('user-container');
const taskContainer = document.getElementById('task-container');
const taskButton = document.getElementById("tareas");



// Codígo nesesario para mostrar información


userSelect.addEventListener('change', () => {

    const IdUsuario= parseInt(userSelect.value);
    console.log(IdUsuario);
    updateTheUserAndTasks(IdUsuario);
});

taskButton.addEventListener('click', () => {
    const IdUsuario= parseInt(userSelect.value);
    getTask(IdUsuario).then (task =>{
        showTasks(task);
    })
})


function updateTheUserAndTasks(userId){
    getUser(userId)
    .then(usuario => {
            if (usuario) {
                showUserInformation(usuario);
                return getTask(userId);
            }
    })
}


function getUser(userId) {

    return fetch('data/usuarios.json')
        .then(resp => resp.json())
            .then(usuario => {
                for (let i= 0; i < usuario.length; i++) {
                    if (usuario[i].id=== userId) {
                        return usuario[i];
                    }
                }

        });
}



function showUserInformation(usuario) {
    userContainer.innerHTML= ''; 
        userContainer.innerHTML= `<h3>Información del usuario seleccionado</h3>
            <ul>
                <li>Nombre completo:${usuario.firstname} ${usuario.lastname}</li>
                <li>Email:${usuario.email}</li>
            </ul> `;


}


function getTask(userId) {
    
    return fetch('data/tareas.json')
        .then(resp => resp.json())
                .then(tasks => {
                const tareas = []; 

                // taskContainer.forEach(element => {
                //     if (element[i].userId === userId) {
                //         tareas.push(element[i]); 
                //     }
                // });

                for(let i= 0; i < tasks.length; i++){
                    if (tasks[i].userId === userId){
                        tareas.push(tasks[i]); 
                    }
                }

                console.log(tareas);
                return tareas;
            });

}


function showTasks(tasks) {
    taskContainer.innerHTML= ''; 
    taskContainer.innerHTML += '<h3>Tareas:</h3>';
        if (tasks.length > 0){
            taskContainer.innerHTML += '<ol>'; 
            tasks.forEach(task => {
                const status = task.completed ? 'checked' : '';
                taskContainer.innerHTML += `<li>
                        <label for="task-${task.id}">${task.title}</label>
                        <input type="checkbox" id="task-${task.id}" ${status} onchange="updateTasks(${task.id}, this.checked)">
                    </li>`;
            });

            taskContainer.innerHTML += '</ol>'; 
        }

}

function updateTasks(taskId, completed) {
    console.log(`Tarea ${taskId} completada: ${completed}`);
}


// Fin de codígo 
/**
 * Optiene una lista de todos los usuarios que pueden existir
 * @returns {Promise<User[]>}
 */
function getAllUsers() {
    return fetch('/data/usuarios.json')
        .then(resp => resp.json());
}

/**
 * Optiene una lista de todas las tareas que hay de todos los usuarios
 * @returns {Promise<Task[]>}
 */
function getAllTasks() {
    return fetch('/data/usuarios.json')
        .then(resp => resp.json());
}

/**
 * @typedef User Definición de un usuario
 * @property {number} id Identificador único del usuario
 * @property {string} firtsname Primer nombre del usuario
 * @property {string} lastname Apellido del usuario
 * @property {string} email Correo electrónico del usuario
 */

/**
 * @typedef Task Definición de una tarea de usuario
 * @property {number} id Identificador único de la tarea
 * @property {number} userId Identificador del usuario a quien corresponde la tarea
 * @property {string} title Título de la tarea
 * @property {boolean} completed Estado de la tarea si está completada o no
 */
