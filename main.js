const servicio = [
    {
        nombre: "actas",
        precio: 120,
    },
    {
        nombre: "clases",
        precio: 7
    },
    {
        nombre: "ciudadania",
        precio: 250

    },
];

let carrito = [];

let seleccion = prompt("¿Desea elegir un servicio?");

while (seleccion != "si" && seleccion != "no") {
    alert("Ingrese una opcion");
    seleccion = prompt("¿Desea elijir un servcio? si o no");
    
}

if (seleccion == "si") {
    alert("a continuacion la lista de servicios disponibles");
    let todosLosServicio = servicio.map((servicio) => servicio.nombre + " " + "€" + servicio.precio);
    alert(todosLosServicio.join(" - "));
  } else if (seleccion == "no") {
    alert("Lo esperamos pronto!!");
  }

  while (seleccion != "no") {

    let servicio = prompt ("¿Que servicio agrega al carrito");
    let precio = 0;

    if (
        servicio == "actas"||
        servicio == "clases"||
        servicio == "ciudadania"
        
        ) {
            switch (servicio) {
                case "actas":
                    precio = 150;                    
                    break;
                    
                case "clases":
                    precio = 7;                    
                    break;

                case "ciudadania":
                    precio = 250;                    
                    break;

                default:
                    alert("OPCION NO VALIDA");
                    precio = 0;
                    cantidad = 0;
                    
            }
            let unidades = parseInt(prompt("¿Para cuantas personas necesitas el servicio?"))
            carrito.push ({servicio, unidades, precio})
          }else {
            alert ("Servicio no disponible")

          }
          seleccion = prompt ("¿Desea agregar mas servcicios al carrito?")

          while(seleccion == "no") {
            alert("Servicos cargados al carrito")

            carrito.forEach((carritoFinal)=> {
                console.log(`servicio ${carritoFinal.servicio},unidades ${carritoFinal.unidades},Total a pagar por servicios: ${carritoFinal.unidades * carritoFinal.precio}`)
            });
            break;
          }

        }
        const total = carrito.reduce((acc, servicio) => acc + servicio.precio * servicio.unidades, 0);
        alert(`el total a pagar por su compra es de: €${total}`);         

        alert("Gracias por su compra")
    
  





