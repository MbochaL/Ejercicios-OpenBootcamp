const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const basura = document.querySelectorAll(".basura");

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id", parrafo.id);
        const ghostElement = document.querySelector(".imagenGhost");
        event.dataTransfer.setDragImage(ghostElement, 0, 0);
    });
    parrafo.addEventListener("dragend", (event) => {
        parrafo.classList.remove("dragging");
        if(event.dataTransfer.dropEffect !== "none") {
            $(parrafo).fadeOut(500, function() {
                $(parrafo).remove();
            })
        }
    });

})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    });
    seccion.addEventListener("drop", event => {
        console.log("Drop");
        const id_parrafo = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo)
    });
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    });
    seccion.addEventListener("drop", event => {
        console.log("Drop");
        const id_parrafo = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo)
    });
})

basura.forEach(basura => {
    basura.addEventListener("dragover", event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    })
    basura.addEventListener("drop", event => {
        console.log("Drop");
        const id_parrafo = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_parrafo);
        parrafo.remove();
    })
})


