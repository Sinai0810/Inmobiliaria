function mostrarPropiedades (propiedad, contenedorID, max = 4) {
    const contenedor = document.getElementById(contenedorID);
    contenedor.innerHTML= '' ; 
    for (let i  = 0 ; i < Math.min (max, propiedad.length); i++) {
        const propiedades = propiedad [i] ; 
        contenedor.innerHTML += `
        <div class = "card" > 
         <img src = "${propiedades.src}"  alt ="${propiedad.nombre}">
         <h3> ${propiedades.nombre}</h3>
         <p> ${propiedades.descripcion}</p>
         <p> ${propiedades.ubicacion}</p>
         <p> ${propiedades.habitaciones}</p>
         <p> ${propiedades.costo}</p>
         <p> ${propiedades.smoke ?  '✅ Se permite fumar': ' 🚫 No se permte fumar' } </p>
         <p> ${propiedades.pets ?  '✅ Se permite mascotas': ' 🚫 No se permte mascotas' } </p>
         </div>

        `;

    }
        
 

}


mostrarPropiedades(propiedades_alquiler, "propiedades-alquiler");
mostrarPropiedades(propiedades_venta, "propiedades-venta");



