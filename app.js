const menuSale = [
    {
        id: 1,
        price: 9.5,
        category: "TARTINE",
        items: [{
            name: "SMASHED AVO",
            description: "Pain toasté, avocat écrasé, feta, dukkah, jus de citron vert",
            notes: "Supplement: Jambon serrano / 3",
        },
        ]
    },
    {
        id: 2,
        category: "GAUFRES",
        price: 9.5,
        items: [
            {
                name: "Salmon | Cream cheese",
                description: "Saumon fumé, philadelphia aux herbes, aneth, graines, sur une gaufre toastée",
                notes: ""
            },
            {
                name: "Serrano | Parmesan",
                description: "Jambon serrano, parmesan, pesto maison, chimichurri, sur une gaufre toastée",
                notes: ""

            }
        ]

    },

]

const menuSucre = [{
    id: 3,
    category: "TARTINE",
    price: 7.5,
    items: [{ name: "PB DELIGHT", description: "Pain toasté, beurre de cacahuète,banane, amandes, miel, cannelle", notes: "" }
    ]
}
    ,
{
    id: 4,
    category: "PORRIDGE BOWLS",
    price: 8.9,
    items: [{ name: "ORIGINAL GANGSTER", description: "Flacons d'avoine,banane, praliné, beurre de cacahuète & caramel,graines de courage, sirop d'érable", notes: "" },
{
    name:"APPLEY EVER AFTER",
    description:"Flacons d'avoine, lait d'avoine, pommes à la cannelle, granola, amandes, pépites de chocolat noir, sirop d'érable", notes:" ",
}]
}
]




const sectionSale = document.querySelector(".menu-sale");
const sectionSucre = document.querySelector(".menu-sucre");


window.addEventListener("DOMContentLoaded", function () {
    const displayMenu = (menu) => {
        return (
            menu.map(function (item) {
                return `<article class="menu-item">
        <div class="item-info">
            <header class="header-items">
                <h4>${item.category}</h4>
                <h4 class="price">${item.price}</h4>
            </header>

            ${item.items.map(function (dish) {
                    return `<h4>${dish.name}</h4>
                <p>${dish.description}</p>
                <h5>${dish.notes}</h5>`
                }).join("")}
            
        </div>
    </article>

    `
            }))
    };

    const displaySale = displayMenu(menuSale).join(" ");
    console.log(displaySale);
    const displaySucre = displayMenu(menuSucre).join(" ");
    sectionSale.innerHTML = displaySale;
    sectionSucre.innerHTML = displaySucre;

});