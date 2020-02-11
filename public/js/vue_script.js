window.onload = function(){

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




  const first = new Vue({
    el: '#burger a',
    data: {
      name1: Halloumi.name,
      img1: Halloumi.image,
      kcal1: Halloumi.kcal,
      allergy1: Halloumi.allergy,
    }
  })

  const second = new Vue({
    el: '#burger b',
    data: {
      name2: Chickpea.name,
      img2: Chickpea.image,
      kcal2: Chickpea.kcal,
      allergy2: Chickpea.allergy,
    }
  })

}

/* Html för detta är : <script src="https://vuejs.org/js/vue.js"></script>
<div id="myID" style="white-space:pre-wrap">
<h1>{{arbitraryVariableName}}</h1>
<h4 v-for = "burgers in menu">{{burgers}}
</h4>
</div> */
