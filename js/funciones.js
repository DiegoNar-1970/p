const opciones=document.querySelector(".opciones")
const botonRegistrar = document.querySelector(".boton");
const botonSubir = document.querySelector(".boton2");
const botonCalcular = document.querySelector(".boton3");
const containerPrin = document.querySelector(".contenedora");
const contentNota=document.querySelector(".contentNota")
containerPrin.style.display="none"

const buscarID=()=>{
    const input_estudiante=document.querySelector(".contentIdEstudiante").value;
    const idEstudiante=input_estudiante
    return new Promise((resolve, reject) => {
        if(window.isNaN(idEstudiante)||idEstudiante===undefined){reject("Dato incorrecto")}
        resolve(idEstudiante)
    })}

const agregarId=()=>{
    const input_estudiante=document.querySelector(".contentIdEstudiante");
    return  new Promise((resolve,reject)=>{
        if(input_estudiante.value===undefined||window.isNaN(input_estudiante.value)) reject("Valores incorrectos")
        resolve(input_estudiante.value)
    })
}
const agregarNota=()=>{
const NotaEstudiante=document.querySelector(".contentNota");
return new Promise((resolve, reject) => {
    const nota=parseFloat(NotaEstudiante.value);
    if(nota===undefined||window.isNaN(nota)) reject("Valores incorrectos")
    resolve(nota)
})
}
const registrarNombre=()=>{
return new Promise((resolve, reject) => {
    if($.isNumeric(contentNota.value)) reject("Tipo de dato incorrecto")
    resolve(contentNota.value);
})}
export { agregarId, agregarNota, buscarID, registrarNombre };

