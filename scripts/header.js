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


const inputSearch = document.getElementById("search");
const searchList = document.getElementById("search-list");
const searchBtn = document.getElementById("buttonSEARCH");

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputSearch.value !== "") {
        const results = vins.filter(vin => vin.titre.toLowerCase().includes(inputSearch.value.toLowerCase()) || vin.titre2.toLowerCase().includes(inputSearch.value.toLowerCase())
        );
        results.map(item => {
            searchList.style.display = "block";
            const a =  document.createElement("a");
            a.href=`product.html?titre=${item.titre}&titre2=${item.titre2}`;
            const li = document.createElement("li");
            li.textContent = `${item.titre} ${item.titre2}`
            a.appendChild(li);
            searchList.appendChild(a);
        })
    }else{
        searchList.style.display = "none";
    }
})



