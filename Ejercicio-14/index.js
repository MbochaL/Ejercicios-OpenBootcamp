const boton = document.querySelector('#btn');

boton.addEventListener('click', () => {
    alert('Se ha hecho click')
})

$(()=>  {
    $(".btn2").on("click", () => {
        console.log("Hola, estoy utilizando JQuery");
    })
})
