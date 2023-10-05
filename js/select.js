const opciones=document.querySelector(".opciones")
const botonRegistrar = document.querySelector(".boton");
const botonSubir = document.querySelector(".boton2");
const botonCalcular = document.querySelector(".boton3");
const containerPrin = document.querySelector(".contenedora");
const contentNota=document.querySelector(".contentNota")
containerPrin.style.display="none"
// its where we use the object HTML  "option "
opciones.addEventListener("change", () => {
    const selectedOptions = opciones.selectedOptions;
    botonRegistrar.style.display = "none";
    botonSubir.style.display = "none";
    botonCalcular.style.display = "none";
    containerPrin.style.display="none"
    contentNota.style.display="none"

    for (let i = 0; i < selectedOptions.length; i++) {
        const opcion = selectedOptions[i];
        const valor = opcion.value;

        if (valor === "registrar") {
            botonRegistrar.style.display = "flex";
            containerPrin.style.display="flex"
            contentNota.type="text"
            contentNota.placeholder="Nombre"
            contentNota.style.display="flex"
            contador=0
            contado2=0

        } else if (valor === "subir") {
            containerPrin.style.display="flex"
            botonSubir.style.display = "flex";
            contentNota.type="number"
            contentNota.placeholder="Nota"
            contentNota.style.display="flex"
            contador=0
            contado2=0

        } else if (valor === "calcular") {
            containerPrin.style.display="flex"
            botonCalcular.style.display = "flex";
            contador=0
            contador2=0
        }
    }});