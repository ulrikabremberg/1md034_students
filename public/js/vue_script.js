window.onload = function(){


  const vm = new Vue({
    el: '.wrapper',
    data: {
      name1: food[0].name,
      img1: food[0].img,
      kcal1: food[0].kcal,
      allergy1: food[0].allergy,

      name2: food[1].name,
      img2: food[1].img,
      kcal2: food[1].kcal,
      allergy2: food[1].allergy,

      name3: food[2].name,
      img3: food[2].img,
      kcal3: food[2].kcal,
      allergy3: food[2].allergy,

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
