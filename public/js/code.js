const modalPelicula = new bootstrap.Modal(document.getElementById('modalPelicula'))

const on = (element, event, selector, handler) =>{
    element.addEventListener(event, e => {
        if (e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    nombre_editar.value = fila.children[1].innerHTML
    year_editar.value = fila.children[2].innerHTML
    genero_editar.value = fila.children[3].innerHTML
    director_editar.value = fila.children[4].innerHTML
    modalPelicula.show()
})