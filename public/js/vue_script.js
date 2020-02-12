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

  let halloumi = new Burger("Hallo(umi) I like your style", "Gluten and Milk", "760 kcal", "https://cdn.pixabay.com/photo/2014/05/27/11/31/hamburger-355342_1280.jpg");

  let chickpea = new Burger("Where the Chick(pea)s at?", "Gluten", "700 kcal", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQc_T-KlFyJ3nh0EHab2SusfwshUMNaLW2VcrR_0uIjqDA3b0aQ&s");

  let bean = new Burger("Bean out lately?", "Gluten", "800 kcal", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkqwu7BYs4eO8nmUG0KDy-McHlxfA1OMIBZgrjuukfIxku8Ty&s");

  let livsBurger = new Burger("Liv's burger", "Fish", "670 kcal", "");

  let mystery = new Burger("Mystery Burger", "?", "? kcal", "");




  const vm = new Vue({
    el: '.wrapper',
    data: {
      name1: halloumi.name,
      img1: halloumi.image,
      kcal1: halloumi.kcal,
      allergy1: halloumi.allergy,

      name2: chickpea.name,
      img2: chickpea.image,
      kcal2: chickpea.kcal,
      allergy2: chickpea.allergy,

      name3: bean.name,
      img3: bean.image,
      kcal3: bean.kcal,
      allergy3: bean.allergy,

    }
  });
/*
const second = new Vue({
    el: '#burgerb',
    data: {
      name2: Chickpea.name,
      img2: Chickpea.image,
      kcal2: Chickpea.kcal,
      allergy2: Chickpea.allergy,

    }
  });

const third = new Vue({
      el: '#burgerc',
      data: {
        name3: Bean.name,
        img3: Bean.image,
        kcal3: Bean.kcal,
        allergy3: Bean.allergy,

      }
    });
*/
}

/* Html för detta är : <script src="https://vuejs.org/js/vue.js"></script>
<div id="myID" style="white-space:pre-wrap">
<h1>{{arbitraryVariableName}}</h1>
<h4 v-for = "burgers in menu">{{burgers}}
</h4>
</div> */
