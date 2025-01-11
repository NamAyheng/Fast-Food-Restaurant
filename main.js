// Menu bar
const toggle = document.querySelector(".toggle");
const info = document.querySelector(".info");
info.style.display = "none";
toggle.onclick = () => {
  if (info.style.display == "none") {
    info.style.display = "flex";
  } else {
    info.style.display = "none";
  }
};

// Sign In & Sign Up
const signIn = document.querySelector(".sign-in");
const signUp = document.querySelector(".sign-up");

const overlay = document.querySelector(".overlay");
const overlayIn = document.querySelector(".in");
const overlayUp = document.querySelector(".up");

overlay.style.display = "none";
overlayIn.style.display = "none";
overlayUp.style.display = "none";

signIn.onclick = () => {
  overlay.style.display = "flex";
  overlayIn.style.display = "flex";
  overlayUp.style.display = "none";
  info.style.display = "none";
};
signUp.onclick = () => {
  info.style.display = "none";
  overlay.style.display = "flex";
  overlayIn.style.display = "none";
  overlayUp.style.display = "flex";
};

overlay.onclick = (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
};

const spanIn = document.querySelector("span.sign-in");
const spanUp = document.querySelector("span.sign-up");

spanIn.addEventListener("click", function () {
  overlay.style.display = "flex";
  overlayIn.style.display = "flex";
  overlayUp.style.display = "none";
});
spanUp.addEventListener("click", function () {
  overlay.style.display = "flex";
  overlayIn.style.display = "none";
  overlayUp.style.display = "flex";
});

// Contents

// Fast Food
const fastFood = document.querySelector(".fast-food");
// put fast food data here
const fastFoodData = [
  {
    image: "image/burger-1.png",
    title: "Beef Burger ",
    rate: "4.1",
    category: "Fast-Food",
  },
  {
    image: "image/burger-2.png",
    title: "Burger Cheese ",
    rate: "4.7",
    category: "Fast-Food",
  },
  {
    image: "image/pizza-1.png",
    title: "Pizza Cheese",
    rate: "3.9",
    category: "Fast-Food",
  },
  {
    image: "image/pizza-2.png",
    title: "Pizza Hotdog",
    rate: "4.0",
    category: "Fast-Food",
  },
  {
    image: "image/sandwich-1.png",
    title: "Super Sandwich",
    rate: "5.0",
    category: "Fast-Food",
  },
  {
    image: "image/sandwich-2.png",
    title: "Sandwich Cheese",
    rate: "4.3",
    category: "Fast-Food",
  },
  {
    image: "image/hotdog-1.png",
    title: "Saucy Hotdog",
    rate: "4.9",
    category: "Fast-Food",
  },
  {
    image: "image/hotdog-2.png",
    title: "Gril Hotdog",
    rate: "3.2",
    category: "Fast-Food",
  },
];
const fastFoodMap = fastFoodData.map(function (fastFood) {
  return `
          <article class="food-card">
            <div class="food-image">
              <img src="${fastFood.image}" alt="" />
            </div>
            <div class="food-title">
              <h3>${fastFood.title}</h3>
              <p><i class="fa-solid fa-star"></i> ${fastFood.rate}</p>
            </div>
            <div class="food-category">
              <p>${fastFood.category}</p>
            </div>
          </article>
          `;
});
fastFood.innerHTML = fastFoodMap.join("");
//
//
//
// Drinks
const drinks = document.querySelector(".drinks");
// put drinks data here
const drinksData = [
  {
    image: "image/drinks-1.png",
    title: "CAMBODIA",
    rate: "5.0",
    category: "Drinks",
  },
  {
    image: "image/drinks-2.png",
    title: "Coca Cola",
    rate: "4.6",
    category: "Drinks",
  },
  {
    image: "image/drinks-3.png",
    title: "FANTA",
    rate: "4.4",
    category: "Drinks",
  },
  {
    image: "image/smoothy-1.png",
    title: "Chocolate",
    rate: "3.9",
    category: "Smoothy",
  },
  {
    image: "image/smoothy-2.png",
    title: "Mix Fruits",
    rate: "4.2",
    category: "Smoothy",
  },
  {
    image: "image/smoothy-3.png",
    title: "Green Tea",
    rate: "4.9",
    category: "Smoothy",
  },
];
const drinksMap = drinksData.map(function (drinks) {
  return `
          <article class="food-card">
            <div class="food-image">
              <img src="${drinks.image}" alt="" />
            </div>
            <div class="food-title">
              <h3>${drinks.title}</h3>
              <p><i class="fa-solid fa-star"></i> ${drinks.rate}</p>
            </div>
            <div class="food-category">
              <p>${drinks.category}</p>
            </div>
          </article>
          `;
});
drinks.innerHTML = drinksMap.join("");
//
//
//
// Ice Cream
const iceCream = document.querySelector(".ice-cream");
// put ice cream data here
const iceCreamData = [
  {
    image: "image/ice-cream-1.png",
    title: "Ice Cream Cake",
    rate: "4.8",
    category: "Ice Cream",
  },
  {
    image: "image/ice-cream-2.png",
    title: "Ice Cream Cup",
    rate: "4.1",
    category: "Ice Cream",
  },
  {
    image: "image/ice-cream-3.png",
    title: "Ice Cream Cone",
    rate: "4.6",
    category: "Ice Cream",
  },
  {
    image: "image/ice-cream-4.png",
    title: "Ice Cream Cube",
    rate: "4.2",
    category: "Ice Cream",
  },
  {
    image: "image/ice-cream-5.png",
    title: "Ice Cream Cup +",
    rate: "4.7",
    category: "Ice Cream",
  },
  {
    image: "image/ice-cream-6.png",
    title: "BIce Cream Plate",
    rate: "3.5",
    category: "Ice Cream",
  },
];
const iceCreamMap = iceCreamData.map(function (iceCream) {
  return `
          <article class="food-card">
            <div class="food-image">
              <img src="${iceCream.image}" alt="" />
            </div>
            <div class="food-title">
              <h3>${iceCream.title}</h3>
              <p><i class="fa-solid fa-star"></i> ${iceCream.rate}</p>
            </div>
            <div class="food-category">
              <p>${iceCream.category}</p>
            </div>
          </article>
          `;
});
iceCream.innerHTML = iceCreamMap.join("");
