const coffeeMenu = [
    {
        id:3,
        title:"Coffee.",
        price:"", 
        items: [
            {name:"ESPRESSO",price:"1.8 / 2.5"},
            {name:"AMERICANO",price: "1.8 / 2.5"},
            {name:"MACCIATO",price:"2 / 2.7"},
            {name:"PICCOLO",price:"2.8"},
            {name:"CAPPUCCINO",price:"3.8 / 4.5"},
            {name:"LATTE",price:"3.8 / 4.5"},
            {name:"FLAT WHITE",price:"3.8 / 4.3"},
            {name:"MOCHA",price:"4 / 4.7"},
]}, 
    {
        id:4,
        title:"Tea & Infusions.", 
        price:2.9,
        items:[{name:"EARL GREY | VERT CITRUS & ALOE VERA | GUARANA, POMME & PECHE | CITRON & GINGEMBRE | HIBISCUS & FRUITS ROUGES | ROOIBOS CREME CARAMEL",price:""}]
    },
    {
        id:5,
        title:"Specials.", 
        price:"",
        items:[
            {name:"RED HOT CHILI MOCHA",price:5},
            {name:"PUMPKIN LATTE", price:5},
            {name:"GINGERBREAD LATTE", price:5},
            {name:"DIRTY CHAI",price:5} 
                ]
    },

    {
        id:6,
        title:"Not Coffee But Delicious.",
        price:"",
        items:[
            {name:"MATCHA LATTE",price:5,desc:""}, 
            {name:"CHAI LATTE",price:4.5,desc:""}, 
            {name:"CHOCOLAT CHAUD", price:4.5,desc:""},
            {name:"GOLDEN LATTE", price:5,desc:""},
            {name:"HUG IN A MUG", price:4.5, desc:"GINGEMBRE, ORANGE, MIEL, CITRON VERT, CANNELLE"}]

    },

// {
//     id:7,
//     title:"Laits végétaux.",
//     price:0.5,
//     desc:"Avoine | Amande | Noix de coco",
// },
// {
//     id:8,
//     title:"Sirops Bio.",
//     price:0.5,
//     desc:"Vanille| Caramel | Noix de Coco | Noisette"
// }
    
]


const cafeMenu = document.querySelector(".coffee-menu");

window.addEventListener("DOMContentLoaded",function() {
    const showMenu = (menu) => {
        return (menu.map(function(item) {

            return `<div class="menu-section">
            <header class="heading">
            <h4>${item.title}</h4>
            <h4>${item.price}</h4>
            </header>
                    
                    ${item.items.map(function(type){
                    return `<div><div class="coffee-type">
                            <p>${type.name}</p>
                            <p>${type.price}</p>
                            
                            </div>
                            <p class="coffee-desc">${type.desc ? type.desc : ""}</p>
                            </div>`
            }).join(" ")}
            </div>`
            
        }))
    };

    const displayCoffee = showMenu(coffeeMenu).join(" ");
    console.log(displayCoffee);
    cafeMenu.innerHTML = displayCoffee;
});