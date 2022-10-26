document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('mind').addEventListener('click', async () => {
        let response = await fetch('products.json');
        let eredmeny = await response.json();
        kiIras(eredmeny.products);
    });

    document.getElementById('abc').addEventListener('click', async () => {
        let response = await fetch('products.json');
        let eredmeny = await response.json();

        let sorrend = eredmeny.products.sort(function(a, b){
            let elso = a.title.toUpperCase();
            let masodik = b.title.toUpperCase();

            if(elso < masodik){
                return -1;
            }else if( elso > masodik){
                return 1;
            }else{
                return 0;
            }
        });
        kiIras(sorrend);
    });

    document.getElementById('legdragabbElol').addEventListener('click', async () => {
        let response = await fetch('products.json');
        let eredmeny = await response.json();

        let dragabb = eredmeny.products.sort((a, b) => {
            if(a.price < b.price){
                return 1;
            }else if(a.price > b.price){
                return -1;
            }else {
                return 0;
            }
        });
        kiIras(dragabb);
    });
    
    document.getElementById('leirasbanKeres').addEventListener('click', async () => {
        let response = await fetch('products.json');
        let eredmeny = await response.json();

        let filter = eredmeny.products.filter(e => e.description.toUpperCase().includes(document.getElementById('szoveg').value.toUpperCase()));
        kiIras(filter);
    });

    document.getElementById('ajanlat').addEventListener('click', async () => {
        let response = await fetch('products.json');
        let eredmeny = await response.json();

        let olcsobb = eredmeny.products.filter(e => e.price <=100);
        let sorrend = olcsobb.sort((a, b) => {
            if(a.rating < b.rating){
                return 1;
            }else if(a.rating > b.rating){
                return -1;
            }else {
                return 0;
            }
        });

        kiIras(sorrend);
    });

    function kiIras(termekek){
        let termekLista = document.getElementById('adatok');
        termekLista.textContent = '';

        for (let p of termekek){
            let li = document.createElement('li');
            li.innerHTML = p.id + ". " + p.title + " - " + p.description + "<br>Price: " + p.price + " - Discount: " + p.discountPercentage + "%<br>Rating: " + p.rating + " - Stock: " + p.stock + "<br>Brand: " + p.brand+ " - Category: " + p.category;
            termekLista.appendChild(li);
        }
    }
});
