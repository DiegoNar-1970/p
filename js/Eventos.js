
// i call al the objects for his use
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
// its end her
// variables that we need
    let contador=0
    let contador2=0
    const estudiantes=[];
    const idSet=new Set();
    let id;

// event of to register note
    botonSubir.addEventListener("click",(e)=>{
        const span=document.querySelector(".mensaje")
        contador++
        if(contador>=5){
            return  span.textContent="No puedes ingresar notas" , span.style.color="red"
        }
        else
        buscarID().then((buscarId)=>{
            idEncontrado=buscarId;
            if(!idEncontrado){
                span.textContent="ID no encontrado"
                span.style.color="red"
            }
            else{
                agregarnota=agregarNota()
                return agregarnota
            }
        }).then((agregarnota)=>{
            if(agregarnota){
                for(let i=0;i<estudiantes.length;i++){
                    if(estudiantes[i].cc==idEncontrado){
                        if(!estudiantes[i].notas){
                            estudiantes[i].notas=[]
                        }
                        estudiantes[i].notas.push(agregarnota)
                        span.textContent="Nota registrada"
                        span.style.color="green"
                        console.log(estudiantes)
                    }
                }
            }
        }).catch((error)=>{
            console.log(error)
        })
    })

// event of to register a Estudent
    botonRegistrar.addEventListener("click",(e)=>{
        const span=document.querySelector(".mensaje")
        agregarId().then((idOpbtenido)=>{
            id=idOpbtenido
            if(idSet.has(id)){
                span.textContent="El id ya esta registrado"
                span.style.color="red"
            }
            else{
                idSet.add(id);
                nombre=registrarNombre();
                return nombre
            }
        }).then((nombre=>{
            if(nombre){
            estudiantes.push(new Estudiante((id),nombre));
            span.textContent=`Estudiante ${nombre} se agrego correctamente`
            span.style.color="green"
            console.log(estudiantes)
            }
        }))
        .catch((error)=>{
            console.log(error)
        })
    })
    
    botonCalcular.addEventListener("click",(e)=>{
        const span=document.querySelector(".mensaje")
        contador2++
        if(contador2>=2){
            return span.textContent="solo puedes tener un promedio" , span.style.color="red"
        }
        else{buscarID().then((buscarId)=>{
            idEncontrado=buscarId;
            if(!idEncontrado){
                span.textContent="No existe el id"
                span.style.color="red"
            }
            else{
                for(let i=0;i<estudiantes.length;i++){

                    if(estudiantes[i].cc==idEncontrado){
                        if(!estudiantes[i].promedio){
                            estudiantes[i].promedio=0
                        }
                        const sumaNotas=estudiantes[i].notas.reduce((acumulador,valorActual)=>acumulador+valorActual,0);
                        const promedioNota=sumaNotas/estudiantes[i].notas.length;
                        
                        estudiantes[i].promedio=promedioNota;
                        span.textContent=`El promedio del estudiante ${idEncontrado} es de ${promedioNota} ` , span.style.color="greenS"
                        contador2=0

                    }
                    else{span.textContent="No existe el ID" , span.style.color="red"}
                }
            }
        }).catch((error)=>{
            console.log(error);
        })}

    })
