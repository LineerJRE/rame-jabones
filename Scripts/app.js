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