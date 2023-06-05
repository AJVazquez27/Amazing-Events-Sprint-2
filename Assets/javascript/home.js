let card = document.getElementById ("cards")

function cargarCards(event) {
return ` 
<div class="card borderPink backPink mt-3 mb-2" style="width: 18rem;">
    <img src="${event.image}" class="card-img-top" alt="${event.name}">
    <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <div class="d-flex justify-content-evenly centerI">
            <p class="price">Price: $${event.price}</p>
            <a href="#" class="btn btn-primary">More details</a>
        </div>
    </div>
</div>`
}

function cargarDatos (events){
    let template = ""
    for (let event of events) {
        template += cargarCards(event)
    }
    card.innerHTML += template
}

cargarDatos(data.events)