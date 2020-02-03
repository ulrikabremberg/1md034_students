

function Burger(n, a, k, i){
  this.name = n;
  this.allergy = a;
  this.kcal = k;
  this.image = i;

  this.item = function(){
    return this.name + ' ' + this.kcal;
  };
}

let Halloumi = new Burger("Hallo(umi) I like your style", "Gluten and Milk", "760 kcal", "");

console.log(Halloumi.item());

let Chickpea = new Burger("Where the Chick(pea)s at?", "Gluten", "700 kcal", "");

console.log(Chickpea.item());

let Bean = new Burger("Bean out lately?", "Gluten", "800 kcal", "");

console.log(Bean.item());

let LivsBurger = new Burger("Liv's burger", "Fish", "670 kcal", "");

console.log(LivsBurger.item());

let Mystery = new Burger("Mystery Burger", "?", "? kcal", "");

console.log(Mystery.item());
