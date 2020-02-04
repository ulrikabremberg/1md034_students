

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

let Chickpea = new Burger("Where the Chick(pea)s at?", "Gluten", "700 kcal", "");

let Bean = new Burger("Bean out lately?", "Gluten", "800 kcal", "");

let LivsBurger = new Burger("Liv's burger", "Fish", "670 kcal", "");

let Mystery = new Burger("Mystery Burger", "?", "? kcal", "");


let ID = document.getElementById("myID");

let halloumi = document.createElement('h4');
halloumi.innerHTML = Halloumi.item();
ID.appendChild(halloumi);


let chickpea = document.createElement('h4');
chickpea.innerHTML = Chickpea.item();
ID.appendChild(chickpea);

let bean = document.createElement('h4');
bean.innerHTML = Bean.item();
ID.appendChild(bean);

let mystery = document.createElement('h4');
mystery.innerHTML = Mystery.item();
ID.appendChild(mystery);

let liv = document.createElement('h4');
liv.innerHTML = LivsBurger.item();
ID.appendChild(liv);
