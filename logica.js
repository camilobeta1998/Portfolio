let saludo = document.getElementById("saludo");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let profesion = document.getElementById("profesion");
let boton_contactame = document.getElementById("contactame");
let foto = document.getElementById("fotografia");

let cargarImagen = (entradas, observador) => {
        console.log(entradas);
        entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                        entrada.target.classList.add("visible");
                }
        });
};

let observador = new IntersectionObserver(cargarImagen, {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 1.0,
});

observador.observe(saludo);
observador.observe(nombre);
observador.observe(apellido);
observador.observe(profesion);
observador.observe(boton_contactame);
observador.observe(foto);
