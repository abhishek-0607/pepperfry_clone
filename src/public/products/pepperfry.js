
// script for carousel starts here

let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.getElementById('carousel__button--1').addEventListener("click", function() {
    moveToNextSlide(0);
  });
document.getElementById('carousel__button--2').addEventListener("click", function() {
    moveToNextSlide(1);
});
  document.getElementById('carousel__button--3').addEventListener("click", function() {
    moveToNextSlide(2);
});
document.getElementById('carousel__button--4').addEventListener("click", function() {
    moveToNextSlide(3);
});
document.getElementById('carousel__button--5').addEventListener("click", function () {
    moveToNextSlide(4);
});

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

var interval = setInterval(function () {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}, 3000)

// the buttons below carousel banner's script

function moveToNextSlide(x) {
  slidePosition = x;
  updateSlidePosition();

  clearInterval(interval);

  interval = setInterval(function () {
    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {
      slidePosition++;
    }
    updateSlidePosition();
  }, 3000)
}

//script for banner ads beside carousel part

function banner() {
    let divban1 = document.getElementById("banner")
    let image1 = document.createElement("img");
    let image2 = document.createElement("img");
    image1.src = "https://ii1.pepperfry.com/media/wysiwyg/banners/WEB_RHS_Cloud_2x_New-1.png";
    image2.src = "https://ii2.pepperfry.com/media/wysiwyg/banners/WEB_RHS_Clear_2X_New-1.png";

    divban1.append(image1, image2);

    let register = document.getElementById("registernow");
    let image3 = document.createElement("img");
    image3.src = "https://ii3.pepperfry.com/media/wysiwyg/banners/2021_web_regBanner_01.jpg";

    let para_p = document.createElement("p");
    para_p.innerHTML = 'Already a member? <a>Login</a>'
    register.append(image3, para_p);

    let bannar = document.getElementById("safedeliver");
    let image4 = document.createElement("img")
    image4.src = "https://ii1.pepperfry.com/media/wysiwyg/banners/Safe_Web2_2x_11062021.jpg"
    bannar.append(image4);

    imgArr = ["https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Bank_0116421_2x_new.jpg","https://ii2.pepperfry.com/media/wysiwyg/banners/Web_Bank_0216421_2x_new.jpg","https://ii3.pepperfry.com/media/wysiwyg/banners/Web_Bank_0416721_2x.jpg","https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Bank_HDFC_02_5721_2x.jpg","https://ii2.pepperfry.com/media/wysiwyg/banners/Web_Bank_0522421_2x.jpg","https://ii3.pepperfry.com/media/wysiwyg/banners/Web_Bank_YES_01_5721_2x.jpg"]

    let offer = document.getElementById("offers");
    let div_offer = document.createElement("div");
    let head = document.createElement("h5")
    head.textContent = "BANK OFFERS"
    offer.append(head, div_offer);
    imgArr.forEach(function (el) {
        
        let img_div = document.createElement("div")
        let img1 = document.createElement("img")

        img1.src = el;

        img_div.append(img1);

        div_offer.append(img_div);
    })


    let vibes = document.getElementById("vibes0");
    let vibe_div = document.createElement("div");
    let in_div1 = document.createElement("div");
    let in_head = document.createElement("h5");
    let in_head2 = document.createElement("h6");
    in_head2.textContent = "Catering To All Tastes";
    in_head.textContent = "WHAT'S YOUR VIBE?";
    in_div1.append(in_head, in_head2);
    vibe_div.append(in_div1)
    vibes.append(vibe_div)

    let data = [
                {
            imgArr2: "https://ii1.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-woodsworth_2x_15012021.png",
            imgArr3: "https://ii2.pepperfry.com/media/wysiwyg/banners/Rain_web_23062021_1.jpg",
            traits: "Contemporary, Clean, Functional",
            line: "Our Contemporary Wooden Furniture Brand that offers Wide Furniture Choices.",
            popular: "Dinning Sets, Beds, Study, Tables & More"
        },
            {        
            imgArr2: "https://ii3.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-casacraft_2x_15012021.png",
            imgArr3: "https://ii1.pepperfry.com/media/wysiwyg/banners/Rain_web_23062021_2.jpg",
            traits: "Trendy, Comfortable, Vibrant",
            line: "Modern Living Room Furniture Brand which brings you Latest Trends from across the Globe.",
            popular: "Sofas, Coffee tables, End Tables & More"
        },
            {
            imgArr2: "https://ii2.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-mudramark_2x_15012021.png",
            imgArr3: "https://ii3.pepperfry.com/media/wysiwyg/banners/Rain_web_23062021_3.jpg",
            traits: "Ethenic, Indian Carvings, Impeccable Crafting",
            line: "A wide range of Traditional Furniture inspired from our Indian Heritage",
            popular: "Coffee Tables, Cabinets, Dinning sets & More"
        },
            {
            imgArr2: "https://ii1.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-mintwud_2x_15012021.png",
            imgArr3: "https://ii2.pepperfry.com/media/wysiwyg/banners/Rain_web_23062021_4.jpg",
            traits: "Modern, Functional, Affordable",
            line: "Designed for Compact Homes, Its Minimalistics, Simple and Furniture at Affordable Price.",
            popular: "Wardrobes, Beds, Shoes Racks & More"
        },
            {
            imgArr2: "https://ii3.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-amberville_2x_15012021.png",
            imgArr3: "https://ii1.pepperfry.com/media/wysiwyg/banners/Rain_web_23062021_5.jpg",
            traits: "Gracious Living, olonial Style, Curved Lines",
            line: "A range of Hand-crafted Colonial Furniture inspired by Mid-Century Designs.",
            popular: "Study Tables, Chest of Drawers, Chairs & More"
        },
            {
            imgArr2: "https://ii2.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-bohemiana_2x_15012021.png",
            imgArr3: "https://ii3.pepperfry.com/media/wysiwyg/banners/Rain_web_23062021_6.jpg",
            traits: "Hand-Crafted, Free-Spirited, Adventurous",
            line: "Eclectic Furniture inspired by the Spirit of Freedom and Adventure.",
            popular: "End Tables, Seating stools, Bar stools & More"
        },
    
    ]

    
if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", JSON.stringify(data));
}

function showdata(d) {
    
    let data = d

    let data_div = document.getElementById("vibes1");
    data_div.innerHTML = null

    data.forEach(function (el) {
        
        let div = document.createElement("div")
        
        let p_traits = document.createElement("div");
        p_traits.innerHTML = `<span>Traits: </span>` + el.traits;
        
        let p_line = document.createElement("div");
        p_line.innerHTML = el.line;

        let p_popular = document.createElement("div");
        p_popular.innerHTML = `<span>Popular For: </span>` + `<a>${el.popular}</a>`;        

        let anchor1 = document.createElement("a")
        let anchor2 = document.createElement("a")

        let imgArr2 = document.createElement("img");
        imgArr2.src = el.imgArr2;

        let imgArr3 = document.createElement("img");
        imgArr3.src = el.imgArr3;

        anchor1.append(imgArr2)
        anchor2.append(imgArr3)

        div.append(anchor1, p_traits, anchor2, p_line, p_popular);

        data_div.append(div);
    })

}

showdata(JSON.parse(localStorage.getItem("data")));





}

banner();
