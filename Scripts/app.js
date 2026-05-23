const buscador = document.getElementById("buscador");
const productos = document.querySelectorAll(".producto");

buscador.addEventListener("keyup", () => {

    const texto = buscador.value.toLowerCase();

    productos.forEach(producto => {

        const nombre = producto.innerText.toLowerCase();

        if(nombre.includes(texto)){
            producto.style.display = "block";
        } else {
            producto.style.display = "none";
        }

    });

});

const botonesComprar = document.querySelectorAll(".comprar-btn");

botonesComprar.forEach(boton => {

    boton.addEventListener("click", () => {

        alert("Producto agregado al carrito");

    });

});

const formulario = document.getElementById("formularioContacto");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    if(nombre === "" || correo === "" || mensaje === ""){

        alert("Todos los campos son obligatorios");

    } else {

        alert("Mensaje enviado correctamente");
        formulario.reset();

    }

});

const modoOscuroBtn = document.getElementById("modoOscuroBtn");

modoOscuroBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});