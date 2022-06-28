
const products = JSON.parse(localStorage.getItem("cart"))

let totalCutPrice = 0;
let totalDiscount = 0;
let netTotal = 0;
localStorage.setItem('checkout',JSON.stringify(products));

function append(el){
    totalCutPrice += el.cutPrice;
    totalDiscount += el.cutPrice - el.price;
    netTotal += el.price;
     
    let mrpprice = document.getElementById('mrp-price');
    mrpprice.innerHTML =  `₹ ${totalCutPrice}`

    let discount = document.getElementById('discount');
    discount.innerHTML =  `(-) ₹ ${totalDiscount}`

    let netPrice = document.getElementById('netPrice');
    netPrice.innerHTML = `₹ ${netTotal}`
    
    let netpayable = document.getElementById('netpayable');
    netpayable.innerHTML =  `₹ ${netTotal}`
    
    let container = document.createElement("div")
    let details = document.createElement("div")
    let imageDiv = document.createElement("div")
    let priceDiv = document.createElement("div")
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p2img = document.createElement('img');
    let p3 = document.createElement('p');
    
    p1.innerHTML = "36 Months' Warranty, 100% Genuine";
    p2.innerHTML = "Delivery By";
    p3.innerHTML = "Enter Your Pincode Above To Get These Details";
    let p = document.createElement('p');
    p.innerHTML = el.name;

    p2img.src= "https://image.flaticon.com/icons/png/512/747/747310.png";

    let img = document.createElement('img');
    img.src= el.img;

    let cutp = document.createElement('p');
    cutp.innerHTML = `₹ ${el.cutPrice}`;

    let pr = document.createElement('p');
    pr.innerHTML = `₹ ${el.price}`;

    imageDiv.append( img);
    details.append(p, p1, p2img,p2, p3);
    
    priceDiv.append( cutp,pr);
    container.append(imageDiv, details,priceDiv);
    p2img.style.width="18px"
    p2img.style.marginRight="15px"
    p2.style.display="inline"
    pr.style.color = "red";
    cutp.style.textDecoration = "line-through";
    details.setAttribute("class","details")
    container.setAttribute("class", "container")
    imageDiv.setAttribute("class", "imageDiv")
   

    let greenDiv = document.getElementById('green');
    greenDiv.append(container);




}

function show(){
    let data = JSON.parse(localStorage.getItem('checkout'));

    data.forEach(function (el){
        append(el);
    });
}
show();

function success(){
    window.location.href = "/products/success"
}
