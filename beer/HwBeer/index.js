fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6')
    .then((response) => {
        if (response.status !== 200) {
            console.log('Looks like there was a problem');
            console.log(`Status Code: ${response.status}`);
            return;
        }
        return response.json();
    })

.then((beers) => {
    renderPage(beers);
})

.catch(function(err) {
    console.log('Fetch Error :-S', err);
});

let listOfBeer = document.getElementById("Beer")


function renderPage(beers) {
    beers.map(beer => {
        console.log(beer)
        let newBeers = document.createElement('div');
        newBeers.classList.add('product_text');

        let name = document.createElement('div');
        name.classList.add('nameing');

        let imgProduct = document.createElement('div')
        imgProduct.classList.add('img_picture');

        let input = document.createElement('input')
        input.classList.add('card_id');
        input.type = "hidden";

        let img = document.createElement('img');
        img.classList.add('img_card');
        img.src = beer.image_url;

        let contentProduct = document.createElement('div');
        contentProduct.classList.add('content-web');

        let naming = document.createElement('h3');
        naming.innerText = beer.name

        let count = document.createElement('div');
        count.classList.add('count_in_stock');

        let desc = document.createElement('p')
        desc.innerText = beer.description


        imgProduct.appendChild(input);
        imgProduct.appendChild(img);
        contentProduct.appendChild(naming);
        count.appendChild(desc);
        name.appendChild(imgProduct);
        name.appendChild(contentProduct);
        name.appendChild(count);
        newBeers.appendChild(name)


        listOfBeer.appendChild(newBeers)
    })

}