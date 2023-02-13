const lista = document.querySelector('#listado');

fetch('./datos.json')
    .then((res) => res.json())
    .then((data) => {
        data.forEach((producto) => {
            const li = document.createElement('li')
            li.innerHTML = `

<div>
<h4>${producto.nombre}</h4>   
<p>${producto.estatura}</p>
<p>Codigo: ${producto.genero}</p>
<img src="${producto.imagen}" alt="${producto.nombre}">

</div>

</hr>
`
            lista.appendChild(li)
        });
    })
