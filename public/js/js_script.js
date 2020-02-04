function Burger(n, a, k, i) {
  this.name = n;
  this.allergy = a;
  this.kcal = k;
  this.image = i;

  this.item = function() {
    return this.name + ' ' + this.kcal;
  };
}

let Halloumi = new Burger("Hallo(umi) I like your style", "Gluten and Milk", "760 kcal", "");

let Chickpea = new Burger("Where the Chick(pea)s at?", "Gluten", "700 kcal", "");

let Bean = new Burger("Bean out lately?", "Gluten", "800 kcal", "");

let LivsBurger = new Burger("Liv's burger", "Fish", "670 kcal", "");

let Mystery = new Burger("Mystery Burger", "", "? kcal", "");


let ID = document.getElementById("myID");

let menu = [Halloumi, Chickpea, Bean, LivsBurger, Mystery];

for (let i = 0; i < menu.length; i++) {
  let burger = document.createElement('p');
  burger.innerHTML = menu[i].item();
  ID.appendChild(burger);

  if (menu[i].allergy != false) {
    let allergies = document.createElement('h4');
    allergies.innerHTML = menu[i].allergy;
    ID.appendChild(allergies);
  }
}
