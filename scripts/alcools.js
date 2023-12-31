
const vins = [
    {
        titre: "Bordeaux",
        titre2: "Croix d'Ardet 75cl",
        prix: "12€90 TTC",
        image: "../assets/La-Croix-DArdit-2019.png"
    },
    {
        titre: "Château",
        titre2: "Trois Moulins 75cl",
        prix: "18€90 TTC",
        image: "../assets/chateau-3-moulin.png"
    },
    {
        titre: "Château",
        titre2: "De Chambert 75cl",
        prix: "22€90 TTC",
        image: "../assets/chateau-chambert.png"
    },
    {
        titre: "Château",
        titre2: "La Blanquerie 75cl",
        prix: "28€90 TTC",
        image: "../assets/la-blanquerie.png"
    },
    {
        titre: "Saint Emilion",
        titre2: "De Marzenac 75cl",
        prix: "30€90 TTC",
        image: "../assets/marzenac.png"
    },
    {
        titre: "Montecillo 75cl",
        titre2: "",
        prix: "42€90 TTC",
        image: "../assets/montecillo.png"
    },
    {
        titre: "Champagne",
        titre2: "Mercier 1L",
        prix: "32€90 TTC",
        image: "../assets/mercier.png"
    },
    {
        titre: "Champagne",
        titre2: "Delamotte 1L",
        prix: "42€90 TTC",
        image: "../assets/delamotte.png"
    },
    {
        titre: "Champagne",
        titre2: "Renard 1L",
        prix: "52€90 TTC",
        image: "../assets/renard.jpg"
    },
    {
        titre: "Champagne",
        titre2: "De Castellane 1L",
        prix: "60€90 TTC",
        image: "../assets/castellane.png"
    },
    {
        titre: "Champagne",
        titre2: "Lamoureux 1L",
        prix: "82€90 TTC",
        image: "../assets/lamoureux.png"
    },
    {
        titre: "Champagne",
        titre2: "Ruinart 1L5",
        prix: "90€90 TTC",
        image: "../assets/ruinart.png"
    },
]

const lesVins = document.querySelector(".les-vins");

vins.map((vin, index) => {
    const cardWine = document.createElement("section");
    cardWine.classList.add("card-wine");
    cardWine.innerHTML = `
        <a href="product.html?titre=${vin.titre}&titre2=${vin.titre2}">
            <div class="vin">
                <img id="bouteille" src=${vin.image} alt="croix d'ardet" height="100" width="">
            </div>
            <p class="titre">${vin.titre}</p>
            <p class="paratitre">${vin.titre2}</p>
            <p class="prix">${vin.prix}</p>
        </a>
        <div id="input_div">
            <img src="../assets/moins.png" class="moins" width="25">
            <input type="text" size="1" value="0" class="count">
            <img src="../assets/ajouter.png" value="+" class="plus" width="30">
            <img src="../assets/champagne.png" class="panier" width="25">
        </div>`;

    lesVins.appendChild(cardWine);
    var count = 0;
    var countEl = document.getElementsByClassName("count");
    var moinsEl = document.getElementsByClassName("moins");
    var plusEl = document.getElementsByClassName("plus");
    var panierEl = document.getElementsByClassName("panier");
    console.log(countEl);

    moinsEl[index].addEventListener("click", minus);
    plusEl[index].addEventListener("click", plus);
    panierEl[index].addEventListener("click", panier);
})

function plus() {
    count++;
    countEl[index].value = count;
}
function minus() {
    if (count > 0) {
        count--;
        countEl[index].value = count;
    }
}
function panier() {
    alert(count + "x " + vin.titre + " " + vin.titre2 + " ajouté(s) au panier");
    count = 0;
    countEl[index].value = count;
}
