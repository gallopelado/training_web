// Este fichero controla el index.html
// Autor: Juancito

// Cuando se cargue todos los elementos html(DOM)
// Ejecutar, procesar acciones.
document.addEventListener('DOMContentLoaded', () => {
    cargarTabla();
});

const leerUsers = async() => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/users';
        // Funcion fetch
        const res = await fetch(url);
        const data = await res.json();
        
        return data;
    } catch (error) {
        console.error(error);
    }
}

const cargarTabla = async() => {
    const tbody = document.getElementById('tbody_users');
    let cadena = '';
    const datos  = await leerUsers();
    //console.log(datos);
    for(item of datos) {
        // Destructuracion
        const {id,name,username,email} = item;
        cadena += `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${username}</td>
                <td>${email}</td>
            </tr>    
        `;
        
        console.log(`El usuario es ${name}, su Nick es ${username}, su email es ${email}`);
    }
    tbody.innerHTML = cadena;
    
}