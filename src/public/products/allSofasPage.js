
function showProducts(productData) {
    
    
    let card_div = document.getElementById("main-card");
    card_div.innerHTML = null;
    
    productData.forEach(function (el) {
        console.log(el);
        let card = document.createElement("div");
        card.addEventListener("click", function () {
            var discount = el.cutPrice - el.price ;
            var percentOff = Math.round((discount / el.cutPrice) * 100);
          localStorage.setItem("currentItem",JSON.stringify(el))
            
            window.location.href=`/products/productinfo?name=${el.name}&brand=${el.brand}&price=${el.price}&img=${el.img}&cutPrice=${el.cutPrice}&discount=${discount}&percentOff=${percentOff}`       
        })
        
        
        let img_div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.img
        img_div.append(img)
        
        let name_div = document.createElement("div");
        let name = document.createElement("span");
        name.innerHTML = `<br/><b>${el.name}</b>`
        name_div.append(name);
        
        let brand_div = document.createElement("div");
        let brand = document.createElement("span");
        brand.innerHTML = el.brand
        
        let like_div = document.createElement("a");
        let like = document.createElement("img");
        like.src = "https://ii1.pepperfry.com/images/svg/header-wishlist-icon-2021.svg";
        like_div.append(like);
        brand_div.append(brand, like_div);
        
        let price_div = document.createElement("div");
        let price = document.createElement("div");
        price.innerHTML = `<br/><b>₹ ${el.price}</b> <span>₹ ${el.cutPrice}</span>`
        price_div.append(price)

        let save_div = document.createElement("div");
        let save = document.createElement("div");
        save.innerHTML = `Save ₹ ${el.cutPrice - el.price} <a>(${Math.round(((el.cutPrice - el.price) / el.cutPrice) * 100)}% Off)</a>, Limited Time Offer`
        save_div.append(save)

        let ship_div = document.createElement("div");
        let ship = document.createElement("div");
        ship.innerHTML = `<br/><img src="https://ii1.pepperfry.com/images/svg/clip-exp-ship-icon-2018.svg"/> Ships In 1 Day`;
        ship_div.append(ship);
        
        card.append(img_div, name_div, brand_div, price_div, save_div, ship_div)
        card_div.append(card);

    });
    
}

// showProducts(JSON.parse(localStorage.getItem("productData")))

fetch(`https://pepperfrywebsite.herokuapp.com/products`)
.then(function(res){
    return res.json();           
}).then(function (res){
    localStorage.setItem("productData", JSON.stringify(res));
     showProducts(res);
    })

    

    
function sortLH() {
    
        let Products = JSON.parse(localStorage.getItem("productData"));
        
    Products = Products.sort(function (a, b) {
        if(a.brand.toLowerCase() < b.brand.toLowerCase()) return -1;
        if(a.brand.toLowerCase() > b.brand.toLowerCase()) return 1;
        return 0;
    })
    
    showProducts(Products);
    
}

function sortHL() {
    
    let Products = JSON.parse(localStorage.getItem("productData"));

    Products = Products.sort(function (a, b) {
        if(a.brand.toLowerCase() > b.brand.toLowerCase()) return -1;
        if(a.brand.toLowerCase() < b.brand.toLowerCase()) return 1;
        return 0;
    })
    
    showProducts(Products);
    
}


 


function sortBrand() {
    
    let Products = JSON.parse(localStorage.getItem("productData"));
    let newArr = [];
    for (let i = 0; i < Products.length; i++){
        if (Products[i].brand == "CasaCraft by Pepperfry") {
            newArr.push(Products[i]);
        }
    }
    showProducts(newArr);
}

function sortBrand1() {
    let Products = JSON.parse(localStorage.getItem("productData"));
    let newArr = [];
    for (let i = 0; i < Products.length; i++){
        if (Products[i].brand == "Woodsworth by Pepperfry") {
            newArr.push(Products[i]);
        }
    }
    showProducts(newArr);
}

function sortBrand2() {
    let Products = JSON.parse(localStorage.getItem("productData"));
    let newArr = [];
    for (let i = 0; i < Products.length; i++){
        if (Products[i].brand == "by Durian") {
            newArr.push(Products[i]);
        }
    }
    showProducts(newArr);
}

function sortBrand3() {
    let Products = JSON.parse(localStorage.getItem("productData"));
    let newArr = [];
    for (let i = 0; i < Products.length; i++){
        if (Products[i].brand == "by Furnitech") {
            newArr.push(Products[i]);
        }
    }
    showProducts(newArr);
}

function sortBrand4() {
    let Products = JSON.parse(localStorage.getItem("productData"));
    let newArr = [];
    for (let i = 0; i < Products.length; i++){
        if (Products[i].brand == "by Urban Living") {
            newArr.push(Products[i]);
        }
    }
    showProducts(newArr);
}

function sortPrice20() {
    
    let Products = JSON.parse(localStorage.getItem("productData"));
    let newArr = [];
    for (let i = 0; i < Products.length; i++){
        if (Products[i].price < 20000) {
            newArr.push(Products[i]);
        }
    }
    showProducts(newArr);
}

function sortPrice40() {
    
    let Products = JSON.parse(localStorage.getItem("productData"));
    let newArr = [];
    for (let i = 0; i < Products.length; i++){
        if (Products[i].price < 40000 && Products[i].price > 20000) {
            newArr.push(Products[i]);
        }
    }
    showProducts(newArr);
}

function sortPrice60() {
    
    let Products = JSON.parse(localStorage.getItem("productData"));
    let newArr = [];
    for (let i = 0; i < Products.length; i++){
        if (Products[i].price > 40000) {
            newArr.push(Products[i]);
        }
    }
    showProducts(newArr);
}
function gohome(){
    window.location.href = "../../views/products/homePage.ejs"
}


 