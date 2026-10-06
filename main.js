// creamos variable, accedemos al documento de la pagina y obtenemos el elemento por su id
const btn = document.getElementById('btn-menu');
const contenedorNavbar = document.getElementById('contenedor-navbar');

// funcion de abrir el navbar al dar click en el boton de categorias
btn.addEventListener('click', (e) => {
    // preventDefault para evitar que haga otras funciones
    e.preventDefault();
    // accedemos a la lista de clases del contenedorNavbar y con "toggle" agregamos la clase 'active'
    contenedorNavbar.classList.toggle('active');
});

// funcion para cerrar el contenedorNavbar al dar click fuera de las categorias
contenedorNavbar.addEventListener('click', (e) => {

    // condicional para que no cierre el contenedorNavbar si damos click en una categoria no cierre el navbar
    if(e.target === contenedorNavbar) {
        contenedorNavbar.classList.remove('active');
    }
})