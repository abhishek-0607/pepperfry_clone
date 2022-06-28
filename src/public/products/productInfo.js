var count = 0;
  
let newProduct = JSON.parse(localStorage.getItem("currentItem"))

const arrImage = newProduct.gallery;
console.log(arrImage);
function carousel() {
    
    console.log('count:', count)
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    let div3 = document.getElementById("div3");
    let div4 = document.getElementById("div4");
    let div5 = document.getElementById("div5");


   let img=document.createElement("img") 
 

 
       img.src = arrImage[count];
       div1.innerHTML=`<img src=${img.src} alt="">`
       
       img.src = arrImage[count+1];
       
       div2.innerHTML=`<img src=${img.src} alt="">`
       
       img.src = arrImage[count+2];
       div3.innerHTML=`<img src=${img.src} alt="">`
       
       img.src = arrImage[count+3];
       div4.innerHTML=`<img src=${img.src} alt="">`
       
       img.src = arrImage[count+4];
       div5.innerHTML=`<img src=${img.src} alt="">` 
  
}

carousel();

function nextImage() {
    count += 4;
    if (count > 4)
        count = 4;
    console.log('count:', count)
    
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    let div3 = document.getElementById("div3");
    let div4 = document.getElementById("div4");
    let div5 = document.getElementById("div5");


   let img=document.createElement("img")  
 
    if (count  < arrImage.length - 1) {
        img.src = arrImage[count];
        div1.innerHTML = `<img src=${img.src} alt="">`
    }
    else
    div1.innerHTML = ``;
           
    if (count + 1 < arrImage.length - 1) {
        img.src = arrImage[count + 1];
        div2.innerHTML = `<img src=${img.src} alt="">`
    }
    else
    div2.innerHTML = ``;
       
    if (count + 2 < arrImage.length - 1) {
        img.src = arrImage[count + 2];
        div3.innerHTML = `<img src=${img.src} alt="">`
    }
    else
    div3.innerHTML = ``;
       
    if (count + 3 < arrImage.length - 1) {
        img.src = arrImage[count + 3];
        div4.innerHTML = `<img src=${img.src} alt="">`
    }
    else
    div4.innerHTML = ``;
     if (count + 4 < arrImage.length - 1) {
        img.src = arrImage[count + 4];
        div5.innerHTML = `<img src=${img.src} alt="">`
    }
    else
        div5.innerHTML = ``;
        
  
}
             
function prevImage() {
    count -= 4;
    if (count < 0)
        count = 0;
    console.log('count:', count)

     
    
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    let div3 = document.getElementById("div3");
    let div4 = document.getElementById("div4");
    let div5 = document.getElementById("div5");


   let img=document.createElement("img") 
 

 
    img.src = arrImage[count];
    div1.innerHTML=`<img src=${img.src} alt="">`
    
    img.src = arrImage[count+1];
    
    div2.innerHTML=`<img src=${img.src} alt="">`
    
    img.src = arrImage[count+2];
    div3.innerHTML=`<img src=${img.src} alt="">`
    
    img.src = arrImage[count+3];
    div4.innerHTML=`<img src=${img.src} alt="">`
    
    img.src = arrImage[count+4];
    div5.innerHTML=`<img src=${img.src} alt="">` 
  
}
              


function changeImage(){
    
let div_Image1 = document.getElementById("div-image");
    
    
let divs1=document.querySelectorAll(".mouse")
    
    for(let i=0;i<divs1.length;i++)
    {
        
        divs1[i].addEventListener("mouseover", function () {
            
            divs1[i].style.border = "1px solid red";
             
            div_Image1.innerHTML = ` ${divs1[i].innerHTML}  `
              
                divs1[i].addEventListener("mouseout",function(){
                   
                  divs1[i].style.border="1px solid white";
                  
                }) 
             
            })   
        }

   }   
   
   changeImage()

 

  
function aboutUs(){                   
    window.location.href="/products/aboutus"
}
   function gohome(){ 
       window.location.href = "/products/home"
   }

   function incart(){ 
       window.location.href = "/products/cart"
   }

