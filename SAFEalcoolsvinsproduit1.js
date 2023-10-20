const params= new URLSearchParams(location.search);

const titreParam = params.get("titre");
const titre2Param = params.get("titre2");


const vins = [
    {
        titre: "Bordeaux",
        titre2: "Croix d'Ardet 75cl",
        prix: "12€90 TTC",
        image: "Images/La-Croix-DArdit-2019.png",
        description : "Bordeaux Croix d'Ardet, c'est l'harmonie des saveurs qui dansent sur votre palais. Des notes de fruits mûrs, une élégance inégalée, et une finale qui laisse une empreinte mémorable. Vivez l'essence de Bordeaux à chaque dégustation."
    },
    {
        titre: "Château",
        titre2: "Trois Moulin 75cl",
        prix: "18€90 TTC",
        image: "Images/chateau-3-moulin.png",
        description : "Le vin est élevé pendant 12 mois à 70% en barriques de chêne dont 25% sont neuves. Le Château Trois Moulins est un vin élégant à la robe rubis, au nez fruité, légèrement boisé, et à la bouche fine, ronde et tannique, avec un final puissant. "
    },
    {
        titre: "Château",
        titre2: "De Chambert 75cl",
        prix: "22€90 TTC",
        image: "Images/chateau-chambert.png",
        description : "Elevé de 12 à 18 mois en fûts de chêne Français, ce vin exprime toute la grandeur des terroirs de coteaux de Cahors: finesse, minéralité, fraicheur. Vin de garde ( 20 ans et plus si conservé dans une bonne cave )."
    },
    {
        titre: "Château",
        titre2: "La Blanquerie 75cl",
        prix: "28€90 TTC",
        image: "Images/la-blanquerie.png",
        description:  "De structure agréable, le Château la Blanquerie est un vin plaisir facile à consommer. Le nez est intense. La bouche est ronde en attaque et chaleureuse en finale, elle présente des arômes d’épices, d’écorces d’orange et de chocolat."
    },
    {
        titre: "Saint Emilion",
        titre2: "De Marzenac 75cl",
        prix: "30€90 TTC",
        image: "Images/marzenac.png",
        description : "En bouche l'équilibre est apporté par la fraicheur et une concentration mesurée. niveaux olfactif de petits fruits rouges et noirs qui s'enrichit de notes d'épices douces et d'arômes légèrement grillés, à l'oeil note vin a une belle robe d'un pourpre soutenu avec une belle brillance."
    },
    {
        titre: "Montecillo 75cl",
        titre2: "",
        prix: "42€90 TTC",
        image: "Images/montecillo.png",
        description : "Le nez est très puissant, fruité, doux avec des arômes de bois américain qui fournit des notes de café au lait et un fond de réglisse typique de la variété Tempranillo. En bouche, il est doux, très large et expressif."
    },
    {
        titre: "Champagne",
        titre2: "Mercier 1L",
        prix: "32€90 TTC",
        image: "Images/mercier.png",
        description :"le style Mercier tantôt gourmand, tantôt frais, met tous les amateurs d’accord. Cuvée de référence et fidèle compagnon des moments de pure convivialité, le Brut Mercier demeure l’expression même de l’authenticité et de l’élégance des champagnes Mercier."
    },
    {
        titre: "Champagne",
        titre2: "Delamotte 1L",
        prix: "42€90 TTC",
        image: "Images/delamotte.png",
        description: "Delamotte Brut est un champagne qui met en appétit. On l'apprécie autant à l'apéritif d'une célébration comme un mariage, qu'entre amis lors d'une simple envie de champagne, autour de gressinsou encore crakers aux graines, sans oublier de croquants radis !"
    },
    {
        titre: "Champagne",
        titre2: "Renard 1L",
        prix: "52€90 TTC",
        image: "Images/renard.jpg",
        description: "La cuvée Brut Nominé de la maison Nominé Renard est un champagne fin et élégant qui vous surprendra par ses arômes de pêche jaune et de biscuit au beurre. Il sera le compagnon idéal de vos apéritifs et fera également des merveilles sur des tagliatelles aux fruits de mer."
    },
    {
        titre: "Champagne",
        titre2: "De Castellane 1L",
        prix: "60€90 TTC",
        image: "Images/castellane.png",
        description:"Le Champagne De Castellane Brut incarne l’essence même de l’élégance et de la tradition champenoise. Ce champagne exceptionnel est le résultat d’un artisanat méticuleux et d’un savoir-faire hérité de générations de vignerons."
    },
    {
        titre: "Champagne",
        titre2: "Lamoureux 1L",
        prix: "82€90 TTC",
        image: "Images/lamoureux.png",
        description:"Sa robe rouge vif viendra séduire nos Dames. Issu d'un travail minutieux de sélection et de vinification pour obtenir ce côté « Glossy » qui qualifie parfaitement cette cuvée. Les Messieurs seront aussi séduits par ce nez chaleureux s’ouvrant sur des notes de fruits rouges et de cerises à l’eau de vie."
    },
    {
        titre: "Champagne",
        titre2: "Ruinart 1L5",
        prix: "90€90 TTC",
        image: "Images/ruinart.png",
        description: " Exclusivement élaborée à partir de chardonnay, c'est un vin délicat entre fraîcheur et rondeur.Cet assemblage issu de différents crus de chardonnay soigneusement sélectionnés offre une expérience gustative fruitée aux notes d’agrumes. La fraîcheur aromatique dans son élégante simplicité."
    },
]

// const vin = vins[0]
const vin = vins.find(vin => vin.titre.includes(titreParam) && vin.titre2.includes(titre2Param));

console.log(vin);



//ajout des information du vin choisi (affichage de son détail)
const titreVin = document.querySelector(".titre");
titreVin.textContent = vin.titre + " " + vin.titre2;

const imageVin = document.querySelector("#bouteille");
imageVin.src = vin.image;

const prixVin = document.querySelector(".prix");
prixVin.textContent = vin.prix;

const descriptionVin = document.querySelector(".description");
descriptionVin.textContent = vin.description;


// système pour l'ajout au panier
var count = 0;
    var countEl = document.querySelector(".count");
    var moinsEl = document.querySelector(".moins");
    var plusEl = document.querySelector(".plus");
    var panierEl = document.querySelector(".panier");
    console.log(countEl);

    moinsEl.addEventListener("click", minus);
    plusEl.addEventListener("click", plus);
    panierEl.addEventListener("click", panier);

    function plus() {
        count++;
        countEl.value = count;
    }
    function minus() {
        if (count > 0) {
            count--;
            countEl.value = count;
        }
    }
    function panier() {
        alert(count + "x " + vin.titre + " " + vin.titre2 + " ajouté(s) au panier");
        count = 0;
        countEl.value = count;
    }