
const datos = {
    nombre: "",
    email: "", 
    mensaje: ""
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerText);
email.addEventListener('input', leerText);
mensaje.addEventListener('input', leerText);

//submit 

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const { nombre, email, mensaje} = datos;

    if (nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', true);
        return;
    }
    
    mostrarAlerta('Formulario enviado correctamente');
    
    console.log('form envd');
});

function leerText(event) {

    datos[event.target.id] = event.target.value;

}

function mostrarAlerta(mensaje, error=null) {

    const alerta = document.createElement('p');
    alerta.textContent = mensaje;    

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto')
    }
    formulario.insertAdjacentElement('beforeend',alerta);

    setTimeout(()=> {
        alerta.remove();
    },3000);
}
