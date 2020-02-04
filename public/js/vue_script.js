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

let Mystery = new Burger("Mystery Burger", "?", "? kcal", "");


const heading = new Vue({
  el: '#myID',
  data: {
    arbitraryVariableName: 'Välj en burgare'
  }
})

const burgers = new Vue({
  el: '#burgerID',
  data: {
    burgerList: Halloumi.item() + '\n' + Chickpea.item() + '\n' + Bean.item() + '\n' + Mystery.item() + '\n' + LivsBurger.item()
  }

})
