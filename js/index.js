let lista = [];

function getCategories(){
    fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(response =>{
        categorias.innerHTML = `<option>todos</option>`
        for(let i = 0; i < response.length; i++){
            categorias.innerHTML += `<option>${response[i]}</option>`;
        }
        // response.map(r => {
        //     categorias.innerHTML += `<option>${r}</option>`;
        // })
    })
} getCategories();

async function getProducts(){
    try {
        const request = await fetch('https://fakestoreapi.com/products');
        const response = await request.json();
        lista = (response)
        renderlist(response);
        return;
    } catch (error) {
        alert("produtos não encontrados :/")
    }
} 
getProducts();

function orderingBy(){
    renderlist(lista.toSorted((a, b) => ordenacao.value == 1 ? a.price - b.price : b.rating.rate - a.rating.rate))
}

function filteredBy(){
    if(categorias.value === 'todos'){
        renderlist(lista)
    } else{
        renderlist(lista.filter((item) => item.category == categorias.value))
    }
}

function renderlist(arr){
    produtos.innerHTML = '';
    arr.map(produto => {
        produtos.innerHTML += 
    `<li class="card">
        <div class="card-imagem">
            <img src="${produto.image}" alt="">
            <div class="card-nota">${produto.rating.rate}</div>
        </div>
        <div class="card-info">
            <h3>${produto.title}</h3>
            <h6>${produto.category}</h6>
            <h4>$${produto.price}</h4>

        </div>
    </li>`;
    })
}