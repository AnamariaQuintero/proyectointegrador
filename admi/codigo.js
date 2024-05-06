function generarCodigo() {
    
    let letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let codigo = [];
    
    for (let i = 0; i < 6; i++) {

        let status = Math.round(Math.random());
        
        if (status == 1) {
            let index = Math.round(Math.random() * letras.length);
            codigo.push(letras[index]);
        } else {
            let number = Math.round(Math.random() * 9);
            codigo.push(number);
        }
    }

    let frase =`El código generado es: ${codigo.join("")}`;
    document.querySelector(".codigoGenerado").innerText = frase;
    document.querySelector(".generarCodigoButton").setAttribute("hidden", true);
    localStorage.setItem("codigo", codigo.join(""));
}

function verificarCodigo() {
    
    let codigoIngresado = document.querySelector(".codigoInput").value;
    let codigoGenerado = localStorage.getItem("codigo");

    if (codigoIngresado === codigoGenerado) {
        document.querySelector(".mensaje").innerText = "Se registra asistencia";
        // let boton = document.createElement("button");
    document.querySelector(".container").setAttribute("hidden", true);

        // boton.innerText = "Volver";
        // boton.classList.add("botonVolver");
        // boton.addEventListener("click", () => {
        //     window.location.href = "profesor.html";
        // });
        
        // document.querySelector(".codigoContainer").appendChild(boton);
        
    } else {
        document.querySelector(".mensaje").innerText = "Codigo no valido";
        let reintentar = document.createElement("button");
        reintentar.innerText = "Volver a intentar";
        reintentar.classList.add("botonVolver");
        reintentar.addEventListener("click", () => {
            window.location.href = "../profesor/asistenciaprofesor.html";
        });
        
        document.querySelector(".container").appendChild(reintentar);
    }

}
